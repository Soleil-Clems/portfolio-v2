"use client"

import { CustomCard } from "@/components/ui/customCard"
import { projects } from "@/constants/projects"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useLanguageStore from "@/store/translation.store"

export const Project = () => {
  const category: string = "all"
  const [showAll, setShowAll] = useState(false)
  const { lang } = useLanguageStore()

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.techno.some((tech) => tech.toLowerCase() === category.toLowerCase()))

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="w-full flex justify-center py-20 px-4 bg-background bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="w-full max-w-7xl flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-own-purple to-transparent"></div>
            <span className="text-xs font-semibold tracking-widest text-own-purple/80 uppercase">
              {lang === "en" ? "See all my projects" : 'Voir tous mes projets'}
            </span>
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight">
                {lang === "en" ? "Projects" : 'Projets'}
            <span className="text-own-purple">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="transition-all duration-300 hover:scale-[1.02]">
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

        <div className="flex justify-center mt-6">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="group relative overflow-hidden bg-card hover:bg-accent/5 text-foreground border-2 border-border hover:border-own-purple transition-all duration-300 px-8 py-6 text-base font-medium rounded-full shadow-sm hover:shadow-md"
          >
            <span className="relative z-10 flex items-center gap-2">
              {lang === "fr" ? (
                <span>{showAll ? "Voir moins" : "Voir tous les projets"}</span>
              ) : (
                <span>{showAll ? "Show less" : "View all projects"}</span>
              )}
              <ArrowRight
                className={`h-5 w-5 transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:translate-x-1"}`}
              />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
