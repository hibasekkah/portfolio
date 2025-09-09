import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Store",
    Description: "A full-stack e-commerce web app with product listings, cart, and Stripe payments.",
    image: "projects/project1.jpg",
    tags: ["React", "Tailwind", "Supabase", "Stripe"],
    demoUrl: "https://myecommerce-demo.com",
    gituburl: "https://github.com/username/ecommerce-store"
  },
  {
    id: 2,
    title: "Portfolio Website",
    Description: "Personal portfolio showcasing projects, blog, and contact form.",
    image: "projects/project2.jpg",
    tags: ["Next.js", "Tailwind", "Vercel"],
    demoUrl: "https://myportfolio.com",
    gituburl: "https://github.com/username/portfolio"
  },
  {
    id: 3,
    title: "Chat App",
    Description: "A real-time chat application with authentication and private chat rooms.",
    image: "projects/project3.jpg",
    tags: ["React", "Firebase", "Tailwind"],
    demoUrl: "https://mychatapp.com",
    gituburl: "https://github.com/username/chat-app"
  },
  {
    id: 4,
    title: "Task Manager",
    Description: "A productivity tool to manage tasks with drag-and-drop and due date reminders.",
    image: "projects/project4.jpg",
    tags: ["Vue", "Node.js", "MongoDB"],
    demoUrl: "https://mytaskmanager.com",
    gituburl: "https://github.com/username/task-manager"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    Description: "An interactive weather forecast app with charts and location search.",
    image: "projects/project5.jpeg",
    tags: ["React", "OpenWeather API", "Chart.js"],
    demoUrl: "https://myweatherapp.com",
    gituburl: "https://github.com/username/weather-dashboard"
  }
];

export const ProjectsSection = () =>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-myted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. 
                Each project was carefully crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div 
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    key={key}
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span 
                                    className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.Description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a 
                                href={project.demoUrl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <ExternalLink size={20}/>
                                </a>
                                <a 
                                href={project.demoUrl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                href="#"
                target="_blank">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
};