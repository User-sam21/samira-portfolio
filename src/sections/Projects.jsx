
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio",
    description:
      "A modern and responsive personal portfolio website showcasing my skills, professional experience, education, and projects. The website also includes a contact form with EmailJS integration.",
    image: "/projects/portfolio.PNG",
    tags: ["React", "Tailwind CSS", "EmailJS", "JavaScript","Vercel"],
    link: "#",
    github: "#",
  },

  {
    title: "E-Commerce Mobile Application",
    description:
      "A cross-platform e-commerce mobile application built with Flutter. The application allows users to browse products and categories, authenticate with Firebase, and make secure online payments using Stripe.",
    image: "/projects/shop.jpeg",
    tags: [
      "Flutter",
      "Dart",
      "Provider",
      "Firebase",
      "Stripe",
      "REST API",
    ],
    link: "#",
    github: "#",
  },

  {
    title: "Worcal — Project Management App",
    description:
      "A cross-platform project management mobile application developed with Flutter for iOS and Android. The application helps users organize and manage projects through an intuitive interface, with REST API integration and state management using BLoC.",
    image: "/projects/worcal.jpeg",
    tags: [
      "Flutter",
      "Dart",
      "BLoC",
      "REST API",
      "SQLite",
    ],
    link: "#",
    github: "#",
  },

  {
    title: "Library Management Web Application",
    description:
      "A web application developed to manage a library's books and user feedback. Users can browse available books, view detailed information, and submit feedback through an interactive interface.",
    image: "/projects/biblio.jpeg",
    tags: ["Django", "Python"],
    link: "#",
    github: "#",
  },

  {
    title: "User and Movie Management Application",
    description:
      "A web application for managing users and movies, with a backend powered by Spring Boot and Apache Kafka for event-driven communication. The application uses MySQL for data persistence.",
    image: "/projects/film.jpeg",
    tags: [
      "Angular",
      "Spring Boot",
      "MySQL",
      "Apache Kafka",
    ],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  // Image actuellement sélectionnée
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glows */}
      <div
        className="absolute top-20 left-0
        w-72 h-72 bg-primary/10
        rounded-full blur-3xl
        pointer-events-none"
      />

      <div
        className="absolute bottom-20 right-0
        w-72 h-72 bg-primary/10
        rounded-full blur-3xl
        pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">

          <span
            className="text-secondary-foreground
            text-sm font-medium tracking-wider
            uppercase animate-fade-in"
          >
            Featured Work
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in
            animation-delay-100
            text-secondary-foreground"
          >
            Projects that{" "}
            <span
              className="font-serif italic
              font-normal text-white"
            >
              make an impact.
            </span>
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            A selection of projects I have developed
            throughout my academic and professional journey,
            covering mobile, web and backend development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl
              overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >

              {/* Image */}
              <div
                className="relative overflow-hidden
                aspect-video cursor-pointer"
                onClick={() =>
                  setSelectedImage({
                    image: project.image,
                    title: project.title,
                  })
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110"
                />

                {/* Gradient */}
                <div
                  className="absolute inset-0
                  bg-gradient-to-t
                  from-card via-card/50
                  to-transparent opacity-60"
                />

                {/* Zoom indication */}
                <div
                  className="absolute inset-0
                  flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300"
                >
                  <div
                    className="glass rounded-full
                    px-5 py-3 text-sm font-medium"
                  >
                    Click to view
                  </div>
                </div>

                {/* Overlay Links */}
                {/* <div
                  className="absolute bottom-4
                  right-4 flex items-center gap-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass
                    hover:bg-primary
                    hover:text-primary-foreground
                    transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass
                    hover:bg-primary
                    hover:text-primary-foreground
                    transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">

                <div className="flex items-start justify-between">

                  <h3
                    className="text-xl font-semibold
                    group-hover:text-primary
                    transition-colors"
                  >
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="w-5 h-5
                    text-muted-foreground
                    group-hover:text-primary
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-all"
                  />

                </div>

                <p
                  className="text-muted-foreground
                  text-sm"
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">

                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5
                      rounded-full bg-surface
                      text-xs font-medium
                      border border-border/50
                      text-muted-foreground
                      hover:border-primary/50
                      hover:text-primary
                      transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================= */}
      {/* IMAGE LIGHTBOX / MODAL */}
      {/* ========================= */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999]
          bg-black/80 backdrop-blur-sm
          flex items-center justify-center
          p-4"
          onClick={() => setSelectedImage(null)}
        >

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6
            w-12 h-12 rounded-full
            glass flex items-center justify-center
            hover:bg-primary
            hover:text-primary-foreground
            transition-all z-50"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-6xl
            max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh]
              object-contain rounded-2xl
              shadow-2xl"
            />

            {/* Project Name */}
            <div
              className="absolute bottom-4
              left-1/2 -translate-x-1/2
              glass px-5 py-2 rounded-full
              text-sm font-medium
              whitespace-nowrap"
            >
              {selectedImage.title}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

