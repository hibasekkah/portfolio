import { Briefcase, BriefcaseBusiness, ChartNoAxesCombined, Code, LockKeyhole, User } from "lucide-react";


export const AboutSection = () =>{
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-3">
                    <h3 className="text-2xl font-semibold">Passionate about crafting seamless digital experiences.</h3>

                    <p className="text-muted-foreground">
                        I am a Computer Science Engineer with strong expertise in web development and data-driven applications. 
                        I specialize in building modern, scalable, and user-friendly digital platforms that combine technical excellence with real business impact.


                    </p>
                        
                    <p className="text-muted-foreground">
                        My experience extends across key industries such as Logistics Tech, FinTech, and E-commerce, 
                        where I leverage both my technical skills and my understanding of business processes to design solutions that are reliable, 
                        efficient, and tailored to industry needs.


                    </p>

                    <p className="text-muted-foreground">
            
                        Passionate about innovation, I focus on developing future-proof applications that integrate web technologies, 
                        data insights, and domain expertise to help organizations optimize operations, 
                        enhance customer experience, and drive growth in today’s digital economy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>
                        <a href="src/assets/CV_Hiba_SEKKAH_EN.pdf" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        target="_blank"
                        >
                            {" "}
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <div className="gradient-border p-3 card-hover">
                        <div className="flex items-start gap-3">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web & Data Development </h4>
                                <p className="text-muted-foreground">Building scalable, data-driven web applications and platforms that deliver real business impact across industries.. </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <ChartNoAxesCombined className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Industry-Focused Solutions</h4>
                                <p className="text-muted-foreground">Designing and delivering tailored applications in Logistics Tech, FinTech, and E-commerce to optimize operations and drive growth. </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BriefcaseBusiness className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
                                <p className="text-muted-foreground">Leading projects from conception to completion with agile methodologies. </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <LockKeyhole className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Security & Reliability</h4>
                                <p className="text-muted-foreground">Ensuring robust authentication, secure data management, and resilient architectures for mission-critical solutions. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>;
};