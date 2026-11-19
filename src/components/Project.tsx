import { CustomCard } from "@/components/ui/customCard"
import { featuredOrder, projects } from "@/constants/projects"
import { useState } from "react"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import useLanguageStore from "@/store/translation.store"

export const Project = () => {
  const [showAll, setShowAll] = useState(false)
  const { lang } = useLanguageStore()
  const l = lang === "en" ? "en" : "fr"

  const featured = featuredOrder
    .map((name) => projects.find((p) => p.name === name))
    .filter((p): p is (typeof projects)[number] => Boolean(p))
  const others = projects.filter((p) => p.other)
  const displayed = showAll ? featured : featured.slice(0, 6)

  return (
    <section id="projects" className="w-full flex justify-center py-20 px-4 bg-background bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="w-full max-w-7xl flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-own-purple to-transparent"></div>
            <span className="text-xs font-semibold tracking-widest text-own-purple/80 uppercase">
              {l === "en" ? "Selected work" : "Sélection de projets"}
            </span>
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight">
            {l === "en" ? "Projects" : "Projets"}
            <span className="text-own-purple">.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            {l === "en"
              ? "Client projects in production, published tools and team projects. Click a card for details."
              : "Des projets clients en production, des outils publiés et des projets d'équipe. Cliquez sur une carte pour le détail."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayed.map((project) => (
            <div key={project.name} className="transition-all duration-300 hover:scale-[1.02]">
              <CustomCard
                title={project.name}
                tagline={project.tagline?.[l]}
                description={project.description[l] || project.description.en}
                imageUrl={project.img}
                githubUrl={project.github}
                liveUrl={project.liveUrl}
                techno={project.techno}
                status={project.status}
                client={project.client}
                skills={project.skills}
              />
            </div>
          ))}
        </div>

        {showAll && others.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-foreground">{l === "en" ? "Other projects" : "Autres projets"}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 divide-y divide-gray-200 dark:divide-gray-800 md:divide-y-0">
              {others.map((p) => (
                <li key={p.name} className="flex items-start justify-between gap-4 py-3 md:border-b md:border-gray-200 md:dark:border-gray-800">
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">{p.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{p.description[l]}</p>
                  </div>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} sur GitHub`} className="shrink-0 text-gray-500 hover:text-own-purple">
                      <Github size={18} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="group relative overflow-hidden bg-card hover:bg-accent/5 text-foreground border-2 border-border hover:border-own-purple transition-all duration-300 px-8 py-6 text-base font-medium rounded-full shadow-sm hover:shadow-md"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>{showAll ? (l === "en" ? "Show less" : "Voir moins") : l === "en" ? "View all projects" : "Voir tous les projets"}</span>
              <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:translate-x-1"}`} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
