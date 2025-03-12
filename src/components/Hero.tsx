import { motion } from "framer-motion";
import Particles from "@/components/ui/particles";
import { ChevronRight, FileText, Code } from "lucide-react";
import dockerIcon from "../../public/docker.svg"
import reactIcon from "../../public/file-type-reactts.svg"
import symfonyIcon from "../../public/symfony.svg"
import tailwindIcon from "../../public/tailwindcss-icon.svg"
import useLanguageStore from "@/store/translation.store"
import { translations } from "@/constants/translations"
import { HtmlContent } from "@/components/HtmlContent"
import resume from "@/assets/resume.pdf"
import picture from "@/assets/profile.jpeg"


export default function Hero() {
    const { lang } = useLanguageStore();
    const t = translations.hero[lang]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };



    return (
        <section id="home" className="relative flex flex-col md:flex-row lg:flex-row lg:items-center items-start py-20 px-4 lg:px-8 w-full max-w-7xl mx-auto text-own-dark min-h-screen lg:min-h-0 lg:py-32">
            <Particles
                className="absolute inset-0 z-0"
                quantity={150}
                ease={100}
                color={"#6d28d9"}
                refresh
            />

            <motion.div
                className="relative z-10 max-w-lg w-full lg:w-1/2 lg:text-left space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    variants={itemVariants}
                    className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-own-purple dark:text-purple-300 font-medium"
                >
                    {t.greeting}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold text-own-dark-deep leading-tight"
                >
                    <HtmlContent content={t.title} />
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="text-lg lg:text-xl font-normal text-gray-600 dark:text-gray-300 leading-relaxed"
                >

                    <HtmlContent content={t.description} />
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="pt-4 flex flex-wrap gap-4"
                >
                    <a href={resume} target="_blank" className="bg-own-purple hover:bg-purple-800 dark:hover:text-black dark:hover:bg-white text-white flex items-center gap-2 h-12 px-6 rounded-lg shadow-lg shadow-purple-500/20">
                        <FileText size={18} />
                        <span>{t.curriculum}</span>
                        <ChevronRight size={16} className="ml-1" />
                    </a>

                    <a href="#projects" className="flex items-center p-1 bg-white dark:bg-own-dark-deep/50 dark:backdrop-blur-sm dark:hover:bg-own-dark text-own-dark border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:text-white h-12 px-6 rounded-lg shadow-lg">
                        <Code size={18} className="mr-2" />
                        <span>{t.projects}</span>
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                className="relative z-10 w-full lg:w-1/2 flex justify-center mt-16 lg:mt-0"
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-purple-300 to-pink-200 dark:from-purple-800 dark:to-pink-600 opacity-20 blur-xl"></div>
                </div>

                <motion.div
                    className="relative h-80 w-80 lg:h-96 lg:w-96"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-own-purple opacity-30"></div>
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="p-2 rounded-full bg-gradient-to-tr from-own-purple to-purple-400 shadow-xl"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <div className="p-1 rounded-full bg-white dark:bg-own-dark-deep overflow-hidden h-72 w-72 lg:h-80 lg:w-80">
                            <img
                                alt="Soleil - Fullstack Developer"
                                src={picture}
                                className="rounded-full object-cover w-full h-full"
                            />
                        </div>
                    </motion.div>
                </div>
                {[dockerIcon, reactIcon, symfonyIcon, tailwindIcon].map((tech, index) => (
                    <motion.div
                        key={tech}
                        className="absolute hidden lg:block"
                        style={{
                            top: `${20 + index * 20}%`,
                            left: index % 2 === 0 ? "10%" : "80%",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: [0, -10, 0],
                            transition: {
                                delay: 0.6 + index * 0.2,
                                y: {
                                    repeat: Infinity,
                                    duration: 2 + index,
                                    ease: "easeInOut"
                                }
                            }
                        }}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg">
                            <div className="w-6 h-6 flex items-center justify-center text-own-purple">
                                <img
                                    src={tech}
                                    alt={`${tech} Icon`}
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>

                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}