
const education = [
  {
    period: "October 2023 — August 2025",
    degree: "Master's Degree in Data Science, Software Engineering and Networks",
    institution: "Faculty of Sciences Ain Chock — Casablanca",
    description:
      "Master's degree in Data Science, Software Engineering and Networks, with a specialization in Software Engineering.",
    details: [
      "Software Engineering",
      "Data Science",
      "Networks",
      "Software Architecture",
      "Application Development",
    ],
    current: false,
  },

  {
    period: "October 2020 — July 2023",
    degree: "Bachelor's Degree in Computer Science, Networks and Multimedia",
    institution: "Faculty of Sciences and Techniques — Mohammedia",
    description:
      "Bachelor's degree in Computer Science, Networks and Multimedia, with a strong foundation in software development, computer networks and information technologies.",
    details: [
      "Computer Science",
      "Networks",
      "Software Development",
      "Multimedia",
    ],
    current: false,
  },

  {
    period: "September 2019 — July 2020",
    degree: "International Baccalaureate — French Option",
    institution: "Hassan Bnou Tabit High School — Berrechid",
    description:
      "International Baccalaureate with a French-language curriculum, specializing in Physical Sciences.",
    details: [
      "Physical Sciences",
      "French Option",
    ],
    current: false,
  },
];

export const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">

          <span
            className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase
            animate-fade-in"
          >
            Education
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in
            animation-delay-100
            text-secondary-foreground"
          >
            My academic
            <span
              className="font-serif italic
              font-normal text-white"
            >
              {" "}journey.
            </span>
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            My academic background has given me a strong foundation
            in software engineering, computer science, data science,
            and information technologies.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div
            className="timeline-glow absolute
            left-0 md:left-1/2
            top-0 bottom-0 w-[2px]
            bg-gradient-to-b
            from-primary/70 via-primary/30
            to-transparent
            md:-translate-x-1/2
            shadow-[0_0_25px_rgba(32,178,166,0.8)]"
          />

          {/* Education Items */}
          <div className="space-y-12">

            {education.map((item, idx) => (
              <div
                key={idx}
                className="relative grid
                md:grid-cols-2 gap-8
                animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                }}
              >

                {/* Timeline Dot */}
                <div
                  className="absolute left-0
                  md:left-1/2 top-0
                  w-3 h-3 bg-primary
                  rounded-full
                  -translate-x-1/2
                  ring-4 ring-background z-10"
                />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >

                  <div
                    className="glass p-6 rounded-2xl
                    border border-primary/30
                    hover:border-primary/50
                    transition-all duration-500"
                  >

                    {/* Period */}
                    <span
                      className="text-sm text-primary
                      font-medium"
                    >
                      {item.period}
                    </span>

                    {/* Degree */}
                    <h3
                      className="text-xl font-semibold
                      mt-2"
                    >
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <p
                      className="text-muted-foreground
                      mt-1"
                    >
                      {item.institution}
                    </p>

                    {/* Description */}
                    <p
                      className="text-sm
                      text-muted-foreground mt-4"
                    >
                      {item.description}
                    </p>

                    {/* Subjects / Details */}
                    <div
                      className={`flex flex-wrap
                      gap-2 mt-4 ${
                        idx % 2 === 0
                          ? "md:justify-end"
                          : ""
                      }`}
                    >

                      {item.details.map(
                        (detail, detailIdx) => (
                          <span
                            key={detailIdx}
                            className="px-3 py-1
                            bg-surface text-xs
                            rounded-full
                            text-muted-foreground"
                          >
                            {detail}
                          </span>
                        )
                      )}

                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
