import { CustomCard } from "@/components/ui/customCard";
import { projects } from "@/constants/projects";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useLanguageStore from "@/store/translation.store";

export const Project = () => {
  const category:string = "all";
  const [showAll, setShowAll] = useState(false);
  const { lang } = useLanguageStore();

  const filteredProjects = category === "all" 
    ? projects 
    : projects.filter(project => 
        project.techno.some(tech => tech.toLowerCase() === category.toLowerCase())
      );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section 
      id='projects' 
      className="w-full flex justify-center py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="w-full max-w-7xl flex flex-col gap-12">
        <div className="relative">
          <div className="absolute -top-6 left-0 text-xs font-semibold tracking-wider text-own-purple uppercase">
            {lang === "en" ? "See all my projects" : 'Voir tous mes projets'}
          </div>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-own-dark-deep dark:text-white py-4">
            {lang === "en" ? "Projects" : 'Projets'}<span className="text-own-purple">.</span>
          </h1>
          <div className="absolute bottom-0 left-0 h-1 w-24 bg-own-purple rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={index} 
              className="opacity-100 transform transition-all duration-500" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CustomCard 
                title={project.name} 
                description={project.description[lang] || project.description.en} 
                imageUrl={project.img} 
                githubUrl={project.github} 
                techno={project.techno} 
                skills={project.skills} 

              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => setShowAll(!showAll)} 
            className="group bg-white hover:bg-gray-100 text-own-purple border border-own-purple hover:border-purple-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {lang === "fr" 
              ? <span>{showAll ? "Voir moins" : "Voir tous les projets"}</span> 
              : <span>{showAll ? "See less" : "See all projects"}</span>
            }
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAll ? "rotate-180" : "group-hover:translate-x-1"}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};