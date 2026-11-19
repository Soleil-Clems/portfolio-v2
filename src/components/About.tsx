
import { motion } from "framer-motion"
import useLanguageStore from "@/store/translation.store"
import { translations } from "@/constants/translations"
import { HtmlContent } from "@/components/HtmlContent"
import resume from "@/assets/resume.pdf"

const facts = [
    { value: { fr: "4", en: "4" }, label: { fr: "projets en production, dont 2 pour des clients", en: "projects in production, 2 of them for clients" } },
    { value: { fr: "1re place", en: "1st place" }, label: { fr: "hackathon IA 4 Good, Onepoint", en: "IA 4 Good hackathon, Onepoint" } },
    { value: { fr: "Depuis 2024", en: "Since 2024" }, label: { fr: "développeur fullstack en alternance chez Librasoft", en: "work-study fullstack developer at Librasoft" } },
    { value: { fr: "2025–2028", en: "2025–2028" }, label: { fr: "Master of Science IA et Big Data, Epitech", en: "MSc in AI and Big Data, Epitech" } },
]

export const About = () => {
    const { lang } = useLanguageStore()
    const t = translations.about[lang]
    const l = lang === "en" ? "en" : "fr"
    return (
        <section
            id="about"
            className="w-full flex justify-center py-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#09090b] dark:to-gray-900"
        >
            <motion.div
                className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center px-6 lg:px-8 gap-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="w-full lg:w-3/5 flex flex-col gap-10"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "200px" }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="relative">
                        <div className="inline-flex items-center gap-3">
                            <div className="h-px w-16 bg-gradient-to-r from-own-purple to-transparent"></div>
                            <span className="text-xs font-semibold tracking-widest text-own-purple/80 uppercase">
                                {lang === "en" ? "Learn more" : 'En savoir plus'}
                            </span>
                        </div>
                        <motion.h1
                            className="font-bold text-4xl sm:text-5xl lg:text-6xl text-own-dark-deep dark:text-own-purple"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "200px" }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {lang == "en" ? "About" : "À propos de moi"}
                            <span className="text-own-purple dark:text-white">.</span>
                        </motion.h1>

                    </div>

                    <motion.div
                        className="flex flex-col gap-8 text-own-dark"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "200px" }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <motion.div
                            className="flex gap-4 items-center p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-lg dark:shadow-gray-900/30 backdrop-blur-sm border-2 border-gray-100/50 dark:border-gray-700/50 hover:border-own-purple/50 dark:hover:border-own-purple/50 transition-all duration-300"
                            whileHover={{
                                y: -5,
                                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.15), 0 10px 10px -5px rgba(139, 92, 246, 0.1)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full flex items-center justify-center">
                                <img className="h-full w-full object-contain" src="/web-developer.svg" alt="Web Developer Icon" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold dark:text-white">Soleil OUISOL</h3>
                                <p className="text-own-purple font-medium">{t.web}</p>
                            </div>
                        </motion.div>

                        <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <motion.p
                                className="text-base md:text-lg relative pl-4 border-l-2 border-own-purple"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "200px" }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <HtmlContent content={t.description1} />
                            </motion.p>

                            <motion.p
                                className="text-base md:text-lg relative pl-4 border-l-2 border-own-purple"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "200px" }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                <HtmlContent content={t.description2} />
                            </motion.p>

                            <motion.p
                                className="text-base md:text-lg relative pl-4 border-l-2 border-own-purple"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "200px" }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                            >
                                {t.description3}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "200px" }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                        >
                            <a
                                href={resume}
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-own-purple hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
                                rel="noreferrer"
                            >
                                <span>{t.resume}</span>
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    ></path>
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-2/5 flex justify-center lg:justify-end"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "200px" }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="w-full max-w-md grid grid-cols-2 gap-4">
                        {facts.map((f) => (
                            <div
                                key={f.value.fr}
                                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 p-5 shadow-sm"
                            >
                                <p className="text-2xl md:text-3xl font-bold text-own-purple">{f.value[l]}</p>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-snug">{f.label[l]}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
