import { motion } from "framer-motion"
import useLanguageStore from "@/store/translation.store"
import dockerIcon from "../../public/docker.svg"
import symfonyIcon from "../../public/symfony.svg"
import tailwindIcon from "../../public/tailwindcss-icon.svg"
import reactnvIcon from "../../public/react.svg"
import phpIcon from "../../public/phpIcon.svg"
import laravelIcon from "../../public/laravel.svg"
import gitIcon from "../../public/git.svg"
import htmlIcon from "../../public/html5.svg"
import mysqlIcon from "../../public/mysql.svg"
import postmanIcon from "../../public/postman.svg"
import pythonIcon from "../../public/python.svg"
import javascriptIcon from "../../public/javascript.svg"
import typescriptIcon from "../../public/typescript.svg"
import figmaIcon from "../../public/figma.svg"
import bootstrapIcon from "../../public/bootstrap.svg"
import cssIcon from "../../public/css.svg"
import javaIcon from "../../public/java.svg"
import nextIcon from "../../public/nextjs_icon_dark.svg"
import springbootIcon from "../../public/spring.svg"
import goIcon from "../../public/go.svg"
import scssIcon from "../../public/file-type-scss.svg"
import nodeIcon from "../../public/file-type-node.svg"
import nestjsIcon from "../../public/nestjs.svg"
import electronIcon from "../../public/electron.svg"
import gitlabIcon from "../../public/gitlab.svg"
import n8nIcon from "../../public/n8n.svg"
import viteIcon from "../../public/vite.svg"

import githubIcon from "../../public/github-light.svg"

type Skill = { name: string; icon?: string }
type Group = { title: { fr: string; en: string }; text: { fr: string; en: string }; skills: Skill[] }

const groups: Group[] = [
  {
    title: { fr: "Front-end", en: "Front-end" },
    text: { fr: "Interfaces rapides, accessibles et pensées pour le mobile.", en: "Fast, accessible, mobile-first interfaces." },
    skills: [
      { name: "React", icon: reactnvIcon },
      { name: "Next.js", icon: nextIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
      { name: "SCSS", icon: scssIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
    ],
  },
  {
    title: { fr: "Back-end", en: "Back-end" },
    text: { fr: "API, authentification, droits d'accès et logique métier.", en: "APIs, authentication, access control and business logic." },
    skills: [
      { name: "Symfony", icon: symfonyIcon },
      { name: "PHP", icon: phpIcon },
      { name: "Go", icon: goIcon },
      { name: "NestJS", icon: nestjsIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Laravel", icon: laravelIcon },
      { name: "Java", icon: javaIcon },
      { name: "Spring Boot", icon: springbootIcon },
      { name: "Python", icon: pythonIcon },
    ],
  },
  {
    title: { fr: "Bases de données", en: "Databases" },
    text: { fr: "Modélisation, migrations et requêtes.", en: "Modelling, migrations and queries." },
    skills: [{ name: "MySQL", icon: mysqlIcon }, { name: "PostgreSQL" }, { name: "MongoDB" }, { name: "Doctrine" }],
  },
  {
    title: { fr: "DevOps et déploiement", en: "DevOps and deployment" },
    text: { fr: "Du dépôt Git à la mise en production.", en: "From the Git repository to production." },
    skills: [
      { name: "Docker", icon: dockerIcon },
      { name: "GitHub Actions", icon: githubIcon },
      { name: "GitLab CI", icon: gitlabIcon },
      { name: "Git", icon: gitIcon },
      { name: "Linux" },
      { name: "Vercel" },
    ],
  },
  {
    title: { fr: "Outils", en: "Tools" },
    text: { fr: "Ce qui sert au quotidien, du test d'API à la maquette.", en: "Everyday tools, from API testing to mockups." },
    skills: [
      { name: "Vite", icon: viteIcon },
      { name: "Postman", icon: postmanIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "n8n", icon: n8nIcon },
      { name: "Electron", icon: electronIcon },
    ],
  },
]

export const Experience = () => {
  const { lang } = useLanguageStore()
  const l = lang === "en" ? "en" : "fr"

  return (
    <section id="skills" className="w-full flex justify-center py-16 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="w-[90%] max-w-7xl flex flex-col gap-12">
        <div>
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-own-purple to-transparent"></div>
            <span className="text-xs font-semibold tracking-widest text-own-purple/80 uppercase">
              {l === "en" ? "See my skills" : "Découvrez mes compétences"}
            </span>
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-own-dark-deep dark:text-white py-4">
            {l === "en" ? "Skills" : "Compétences"}
            <span className="text-own-purple">.</span>
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            {l === "en"
              ? "The technologies I use in my projects, from the interface to production."
              : "Les technologies que j'utilise dans mes projets, de l'interface à la mise en production."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title.en}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 p-6 shadow-sm ${i === groups.length - 1 && groups.length % 2 === 1 ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-xl font-bold text-foreground">{g.title[l]}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{g.text[l]}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s.name}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/60 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-100"
                  >
                    {s.icon && <img src={s.icon} alt="" width={18} height={18} className={`h-[18px] w-[18px] object-contain ${s.icon === githubIcon ? "dark:invert" : ""}`} />}
                    {s.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
