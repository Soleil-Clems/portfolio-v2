import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Smartphone, Trophy } from "lucide-react"
import useLanguageStore from "@/store/translation.store"

type Step = {
  icon: typeof Briefcase
  when: { fr: string; en: string }
  title: { fr: string; en: string }
  place: string
  text: { fr: string; en: string }
}

const steps: Step[] = [
  {
    icon: Briefcase,
    when: { fr: "Octobre 2024 — aujourd'hui", en: "October 2024 — present" },
    title: { fr: "Développeur fullstack en alternance", en: "Fullstack developer (work-study)" },
    place: "Librasoft",
    text: {
      fr: "Développement d'applications web fullstack sur plusieurs projets, au sein d'une équipe, jusqu'au déploiement en production.",
      en: "Building fullstack web applications across several projects within a team, through to production deployment.",
    },
  },
  {
    icon: Briefcase,
    when: { fr: "Freelance — en cours", en: "Freelance — ongoing" },
    title: { fr: "Impact Manager", en: "Impact Manager" },
    place: "ICC Marseille",
    text: {
      fr: "Application de suivi des membres de l'église : conception, développement, mise en production et maintenance.",
      en: "Member follow-up application for the church: design, development, deployment and maintenance.",
    },
  },
  {
    icon: Smartphone,
    when: { fr: "2026 — en cours", en: "2026 — ongoing" },
    title: { fr: "Dynamia", en: "Dynamia" },
    place: "dynamia.dev",
    text: {
      fr: "App iPhone de suivi de la nutrition et du poids, avec son API et son dashboard : conception, développement, mise en production et soumission à l'App Store.",
      en: "iPhone nutrition and weight tracking app, with its API and dashboard: design, development, deployment and App Store submission.",
    },
  },
  {
    icon: GraduationCap,
    when: { fr: "Septembre 2025 — juillet 2028", en: "September 2025 — July 2028" },
    title: { fr: "Master of Science, IA et Big Data", en: "Master of Science, AI and Big Data" },
    place: "Epitech",
    text: {
      fr: "Cursus en alternance orienté intelligence artificielle, données et architecture logicielle.",
      en: "Work-study programme focused on artificial intelligence, data and software architecture.",
    },
  },
  {
    icon: GraduationCap,
    when: { fr: "En cours", en: "In progress" },
    title: { fr: "Data Engineering Professional Certificate", en: "Data Engineering Professional Certificate" },
    place: "IBM · Coursera",
    text: {
      fr: "Pipelines de données, ETL, bases relationnelles et NoSQL, entrepôts de données et traitement à grande échelle.",
      en: "Data pipelines, ETL, relational and NoSQL databases, data warehouses and large-scale processing.",
    },
  },
  {
    icon: Trophy,
    when: { fr: "Hackathon", en: "Hackathon" },
    title: { fr: "1re place, IA 4 Good", en: "1st place, IA 4 Good" },
    place: "Onepoint",
    text: {
      fr: "Solution à impact social basée sur un LLM local (Ollama), avec React et Flask.",
      en: "Social-impact solution built on a local LLM (Ollama), with React and Flask.",
    },
  },
  {
    icon: GraduationCap,
    when: { fr: "Novembre 2023 — août 2025", en: "November 2023 — August 2025" },
    title: { fr: "Développeur web et mobile", en: "Web and mobile developer" },
    place: "Web@cadémie by Epitech",
    text: {
      fr: "Formation intensive par projets : front, back, bases de données, travail en équipe et méthode agile.",
      en: "Intensive project-based training: front end, back end, databases, teamwork and agile methods.",
    },
  },
]

export const Parcours = () => {
  const { lang } = useLanguageStore()
  const l = lang === "en" ? "en" : "fr"

  return (
    <section id="parcours" className="w-full flex justify-center py-20 px-4 bg-white dark:bg-black">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-own-purple to-transparent"></div>
            <span className="text-xs font-semibold tracking-widest text-own-purple/80 uppercase">
              {l === "en" ? "Experience and education" : "Expérience et formation"}
            </span>
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight">
            {l === "en" ? "Background" : "Parcours"}
            <span className="text-own-purple">.</span>
          </h2>
        </div>

        <ol className="relative ml-4 border-l-2 border-gray-200 dark:border-gray-800 flex flex-col gap-10 max-w-3xl">
          {steps.map((s, i) => (
            <motion.li
              key={s.title.en}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative pl-8"
            >
              <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-own-purple text-white ring-4 ring-white dark:ring-black">
                <s.icon size={16} />
              </span>
              <p className="text-sm font-medium text-own-purple">{s.when[l]}</p>
              <h3 className="mt-1 text-xl font-bold text-foreground">
                {s.title[l]} <span className="font-medium text-gray-500 dark:text-gray-400">· {s.place}</span>
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">{s.text[l]}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
