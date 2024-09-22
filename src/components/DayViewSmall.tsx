import { Day, EventCard, timeToMinutes, toAmPm } from "./DayView";

const DayViewSmall = ({ day }: { day: Day }) => {
  const allEvents = Object.values(day.rooms)
    .flat()
    .sort((a, b) => {
      return a.track?.localeCompare(b.track ?? "") ?? 0;
    })
    .sort((a, b) => {
      return timeToMinutes(a.start) - timeToMinutes(b.start);
    });

  console.log(allEvents);

  return (
    <div className="flex flex-col gap-3">
      {allEvents.map((event, index) => (
        <EventCard
          key={index}
          event={event}
          height={"fit-content"}
          time={timeToMinutes(event.start)}
          className="relative"
          showRoom
        />
      ))}
    </div>
  );
};

export default DayViewSmall;
