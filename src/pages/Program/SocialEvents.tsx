import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import Content from "../../documents/attend/social-events.md";
import { markdownCommonStyles } from "../../utils/markdownCommonStyles";

const SocialEventsPage = () => {
  const [mddText, setMddText] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(Content)
      .then((res) => res.text())
      .then((text) => setMddText(text));
  });

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/imgs/present_crop_01.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 0px",
        }}
        className="relative flex items-center justify-center h-64 bg-gray-100 bg-no-repeat bg-cover bg-center"
      ></section>
      <section className="container prose-sm md:prose lg:prose-lg">
        <div>
          <Markdown
            options={{
              overrides: markdownCommonStyles,
            }}
            children={mddText}
          />
        </div>
      </section>
    </>
  );
};
export default SocialEventsPage;
