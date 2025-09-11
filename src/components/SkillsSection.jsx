import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },

  // Backend
  { name: "Java", level: 80, category: "backend" },
  { name: "C#", level: 80, category: "backend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "PHP (Laravel)", level: 85, category: "backend" },
  { name: "Laravel", level: 95, category: "backend" },
  { name: "Django", level: 75, category: "backend" },
  { name: "ASP.NET", level: 80, category: "backend" },
  { name: "PL/SQL", level: 80, category: "backend" },
  { name: "SQL", level: 90, category: "backend" },

  // Databases
  { name: "MySQL", level: 80, category: "database" },
  { name: "Oracle", level: 75, category: "database" },
  { name: "ER Modeling", level: 80, category: "database" },
  { name: "Merise", level: 85, category: "database" },

  // Tools & Methodologies
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "StarUML", level: 100, category: "tools" },
  { name: "UML", level: 85, category: "tools" },
  { name: "Eclipse", level: 85, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Visual Studio", level: 85, category: "tools" },
  { name: "Postman", level: 70, category: "tools" },
  { name: "Jira", level: 70, category: "tools" },
];



const categories = ["all", "frontend", "backend", "tools", "database"];

export const SkillsSection = () =>{
    const [activeCategory,setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category == activeCategory
    );

    return <section 
    id="skills" 
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button 
                    key = {key} 
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}
                    onClick={()=> setActiveCategory(category) }
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {filteredSkills.map((skill,key)=>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hovec">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};