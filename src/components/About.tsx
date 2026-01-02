import { motion } from "framer-motion";
import devIcon from "../../public/web-developer.svg";
import programmingIcon from "../../public/Programming-amico.svg";
import useLanguageStore from "@/store/translation.store"
import { translations } from "@/constants/translations"
import { HtmlContent } from "@/components/HtmlContent"
import resume from "@/assets/resume.pdf"

export const About = () => {
    const { lang } = useLanguageStore();
    const t = translations.about[lang]
    return (
        <section id="about" className="w-full flex justify-center py-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#09090b] dark:to-gray-900">
            <motion.div
                className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center px-6 lg:px-8 gap-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="w-full lg:w-3/5 flex flex-col gap-10"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="relative">
                        <motion.h1
                            className="font-bold text-4xl sm:text-5xl lg:text-6xl text-own-dark-deep dark:text-own-purple"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {lang=="en"? "About":'A propos de moi'}<span className="text-own-purple dark:text-white">.</span>
                        </motion.h1>
                        <motion.div
                            className="absolute -bottom-3 left-0 h-1 bg-white rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "60px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </div>

                    <motion.div
                        className="flex flex-col gap-8 text-own-dark"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <motion.div
                            className="flex gap-4 items-center p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-lg dark:shadow-gray-900/30 backdrop-blur-sm"
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full flex items-center justify-center">
                                <img
                                    className="h-full w-full object-contain"
                                    src={devIcon}
                                    alt="Web Developer Icon"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold dark:text-white">
                                    Soleil OUISOL
                                </h3>
                                <p className="text-own-purple font-medium">
                                    {t.web}
                                </p>
                            </div>
                        </motion.div>

                        <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <motion.p
                                className="text-base md:text-lg relative pl-4 border-l-2 border-own-purple"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <HtmlContent content={t.description1} />
                            </motion.p>

                            <motion.p
                                className="text-base md:text-lg relative pl-4 border-l-2 border-own-purple"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                <HtmlContent content={t.description2} />

                            </motion.p>

                            <motion.p
                                className="text-base md:text-lg relative pl-4 border-l-2 border-own-purple"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                            >
                              {t.description3}
                            </motion.p>
                        </div>

                        
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                        >
                            <a
                                href={resume}
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-own-purple hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg shadow-purple-500/20 transition-all"
                            >
                                <span>{t.resume}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-2/5 flex justify-center lg:justify-end"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="relative">
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-200 dark:bg-purple-800/20 rounded-full blur-xl"></div>

                        <motion.div
                            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl relative z-10"
                            whileHover={{
                                y: -10,
                                transition: { type: "spring", stiffness: 300, damping: 10 }
                            }}
                            animate={{
                                y: [0, -10, 0],
                                transition: {
                                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                                }
                            }}
                        >
                            <img
                                className="h-full w-full object-contain"
                                src={programmingIcon}
                                alt="Programming Icon"
                            />
                        </motion.div>

                        {/* Badges de technologie flottants */}
                        {['React', 'Node', 'PHP'].map((tech, i) => (
                            <motion.div
                                key={tech}
                                className="absolute hidden lg:flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg px-4 py-2 text-sm font-medium text-own-purple"
                                style={{
                                    top: `${20 + i * 30}%`,
                                    right: i % 2 === 0 ? '-10%' : '85%',
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, -8, 0],
                                    transition: {
                                        delay: 0.8 + i * 0.2,
                                        y: {
                                            repeat: Infinity,
                                            duration: 3 + i,
                                            ease: "easeInOut"
                                        }
                                    }
                                }}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};