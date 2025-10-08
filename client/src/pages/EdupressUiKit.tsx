import React from "react";

const sections = [
  {
    title: "Home Page",
    width: "w-[1920px]",
    images: [{ alt: "Home course basic", src: "", width: "" }],
  },
  {
    title: "Course Listing",
    width: "w-full",
    images: [
      { alt: "Course listing", src: "", width: "" },
      { alt: "Course listing", src: "", width: "" },
    ],
  },
  {
    title: "Course Single",
    width: "w-[9920px]",
    images: [
      { alt: "Course details", src: "", width: "w-[1920px]" },
      { alt: "Course details", src: "", width: "w-[1920px]" },
      { alt: "Course details", src: "", width: "w-[1920px]" },
      { alt: "Course details", src: "", width: "w-[1920px]" },
      { alt: "Course details", src: "", width: "w-[1920px]" },
    ],
  },
  {
    title: "Blog Listing",
    width: "w-full",
    images: [
      { alt: "Blog listing", src: "", width: "" },
      { alt: "Blog listing", src: "", width: "" },
    ],
  },
  {
    title: "Blog Single",
    width: "w-full",
    images: [{ alt: "Blog single", src: "", width: "" }],
  },
  {
    title: "Contact",
    width: "w-full",
    images: [{ alt: "Contact", src: "", width: "" }],
  },
  {
    title: "Faqs",
    width: "w-full",
    images: [{ alt: "Fa qs", src: "", width: "" }],
  },
  {
    title: "Error",
    width: "w-full",
    images: [{ alt: "Fa qs", src: "", width: "" }],
  },
  {
    title: "Login / Register",
    width: "w-full",
    images: [{ alt: "Fa qs", src: "", width: "" }],
  },
];

export const EdupressUiKit = (): JSX.Element => {
  return (
    <div className="inline-flex items-start gap-80 w-full min-w-[31840px] min-h-[6929.8px]">
      {sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="inline-flex flex-col items-start gap-40 flex-[0_0_auto]"
        >
          <header
            className={`flex items-center justify-center gap-[24.86px] px-[70px] py-10 ${section.width === "w-full" ? "self-stretch w-full" : section.width} flex-[0_0_auto] bg-[#e9e9e9]`}
          >
            <h1 className="w-fit mt-[-5.00px] font-h1-large font-[number:var(--h1-large-font-weight)] text-black text-[length:var(--h1-large-font-size)] tracking-[var(--h1-large-letter-spacing)] leading-[var(--h1-large-line-height)] whitespace-nowrap [font-style:var(--h1-large-font-style)]">
              {section.title}
            </h1>
          </header>

          {section.images.length === 1 ? (
            <img
              className={`flex-[0_0_auto] ${section.images[0].width || ""}`}
              alt={section.images[0].alt}
              src={section.images[0].src}
            />
          ) : (
            <div className="inline-flex items-start gap-20 flex-[0_0_auto]">
              {section.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  className={`flex-[0_0_auto] ${image.width || ""}`}
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};
