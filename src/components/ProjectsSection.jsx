import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MorocAntik",
    Description: "Designed and developed a full-stack e-commerce website for Moroccan traditional products, focusing on usability, performance, and secure order management. Built with React, Django REST Framework, SQLite, and JWT authentication, the platform ensures responsiveness, modularity, and data protection.",
    image: "projects/project1.png",
    tags: ["React", "Tailwind", "Django", "JWT", "MVC", "SqLite"],
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7370163765234929666/",
    gituburl: "https://github.com/hibasekkah/E-commerce-WebSite"
  },
  {
    id: 2,
    title: "PowerLearn",
    Description: "The ASP.NET web application manages a training center with four user roles (guest, participant, instructor, administrator), each having tailored functionalities. Designed to be responsive, it streamlines administrative and educational management while enhancing the user experience.",
    image: "projects/project2.png",
    tags: ["ASP.Net", "Bootstrap", "JS", "HTML", "SqlServer", "MVC"],
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7288190055834148864/",
    gituburl: "https://github.com/hibasekkah/Siteweb-de-gestion-de-centre-de-formation"
  },
  {
    id: 3,
    title: "Plenitude Education",
    Description: "Developed a full-stack web application to digitize and streamline professional training management, integrating role-based access, planning, and automated document generation. Built with Laravel, React, and JWT-secured APIs, the solution enhanced efficiency, usability, and data confidentiality.",
    image: "projects/project3.png",
    tags: ["React", "Laravel", "Tailwind", "JWT", "MVC", "MySQL"],
    demoUrl: "#",
    gituburl: "https://github.com/hibasekkah/PlenitudeEducation"
  },
  {
    id: 4,
    title: "Delivery Route Optimization Platform",
    Description: "Developed a SaaS solution for delivery route optimization, integrating constraints like truck capacity, goods type, time windows, and traffic restrictions. The platform reduces costs through fuel optimization, minimizes empty kilometers, enables resource sharing, and supports sustainability with CO₂ emission tracking and eco-friendly route suggestions, while offering real-time dynamic replanning.",
    image: "projects/project4.png",
    tags: ["in progress"],
    demoUrl: "#",
    gituburl: "#"
  },
  {
    id: 4,
    title: "Financement intelligent B2B avec scoring IA",
    Description: "A platform that analyzes the financial health of SMEs in real time by monitoring invoices, orders, cash flow, banking behavior, and open banking data.AI assigns a dynamic credit score and connects SMEs with investors and banks to obtain instant and flexible financing.Value Proposition: It reduces risk for investors while accelerating SMEs’ access to credit.",
    image: "projects/project5.png",
    tags: ["in progress"],
    demoUrl: "#",
    gituburl: "#"
  },
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
                                href={project.gituburl}
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
                href="https://github.com/hibasekkah"
                target="_blank">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
};