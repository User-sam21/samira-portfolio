
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Development",
    description:
      "Building clean and maintainable web, mobile and backend applications using modern technologies.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Turning business and technical requirements into practical and reliable software solutions.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaborating effectively with teams while respecting deadlines, organization and project requirements.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and continuously improving my technical skills and development practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            {/* Section Label */}
            <div className="animate-fade-in">
              <span className="text-sm uppercase tracking-widest text-primary font-semibold">
                About Me
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-4xl md:text-5xl font-bold 
              leading-tight animate-fade-in 
              animation-delay-100 text-secondary-foreground"
            >
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}digital solutions.
              </span>
            </h2>

            {/* Description */}
            <div
              className="space-y-4 text-muted-foreground 
              animate-fade-in animation-delay-200"
            >
              <p>
                I'm Samira, a software engineer and graduate with a Master's
                degree in Data Science, Software Engineering and Networks,
                specialized in Software Engineering.
              </p>

              <p>
                Throughout my academic projects and professional experiences,
                I have worked on web, mobile and backend applications using
                technologies such as React, Angular, Flutter, Node.js and
                Spring Boot.
              </p>

              <p>
                I enjoy solving technical problems, learning new technologies
                and building applications that are reliable, intuitive and
                useful. I'm currently looking for opportunities where I can
                contribute my skills, work on real-world projects and continue
                growing as a software engineer.
              </p>
            </div>

            {/* Quote */}
            <div
              className="glass rounded-2xl p-6 glow-border 
              animate-fade-in animation-delay-300"
            >
              <p className="text-lg font-medium italic text-foreground">
                "I believe good software is not only about writing code,
                but about creating simple, reliable and meaningful solutions
                to real-world problems."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl 
                animate-fade-in hover:glow-border 
                transition-all duration-300"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl 
                  bg-primary/10 flex items-center 
                  justify-center mb-4 
                  hover:bg-primary/20 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

