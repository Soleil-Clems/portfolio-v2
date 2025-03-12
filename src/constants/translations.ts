import { CheckCircle, BookOpen, Briefcase } from "lucide-react"
import { title } from "process";

export const translations = {
    header: {
        en: {  
            home: "Home",
            projects: "Projects",
            about: "About",
            skills: "Skills",
            evaluation: "Evaluation",
            contact: "Contact",
        },
        fr: {
            home: "Accueil",
            projects: "Projets",
            about: "À propos",
            skills: "Compétences",
            evaluation: "Évaluation",
            contact: "Contact",
        },
    },

    hero: {
        en: {
            greeting: "Hey, I'm Soleil 👋🏻",
            title: `<span class="inline-block">Full</span>
                    <span class="inline-block ml-2 text-own-purple">stack</span>
                    <span class="block mt-2">Developer</span>`,
            description: `I'm a fullstack developer studying at Epitech Marseille. I specialize in building 
                          <span class="text-own-purple font-medium">exceptional digital experiences</span> that bring your vision to life.`,
            curriculum: "Curriculum",
            projects: "Projects",
        },
        fr: {
            greeting: "Salut, je suis Soleil 👋🏻",
            title: `<span class="inline-block">Dev</span>
                    <span class="inline-block ml-2 text-own-purple">Full Stack</span>`,
            description: `Je suis un développeur fullstack étudiant à Epitech Marseille. Je suis spécialisé dans la création 
                          <span class="text-own-purple font-medium">d'expériences numériques exceptionnelles</span> qui donnent vie à votre vision.`,
            curriculum: "CV",
            projects: "Projets",
        },
    },

    about: {
        en: {
            web: "Web & Mobile Developer",
            description1: `As a web & mobile developer at <span className="text-own-purple font-medium">Web@cadémie</span>, I have acquired
                                            solid knowledge and skills in computer science through various
                                            stimulating projects. These projects, focused on acquiring
                                            practical and in-demand professional skills, have allowed me to
                                            train in an effective and hands-on manner.`,
            description2: `  My journey at Web@cadémie has taught me to be <span className="font-medium">self-taught</span>,
                                <span className="font-medium"> versatile</span> with different technologies, to work in a team, and to
                                adhere to the requirements of a project specification.`,
            description3: `  Today, as I complete my program, I present to you through this
                                portfolio the evolution of my skills and achievements over the
                                course of my two years of study.`,
            resume: "View Full Resume",
        },
        fr: {
            web: "Développeur Web & Mobile",
            description1: `En tant que développeur web & mobile à <span className="text-own-purple font-medium">Web@cadémie</span>, 
                            j'ai acquis des connaissances et compétences solides en informatique à travers divers projets stimulants. 
                            Ces projets, axés sur l'acquisition de compétences pratiques et recherchées sur le marché du travail, 
                            m'ont permis de me former de manière efficace et concrète.`,
            description2: `  Mon parcours à la Web@cadémie m'a appris à être <span className="font-medium">autodidacte</span>,
                                <span className="font-medium"> polyvalent</span> avec différentes technologies, à travailler en équipe 
                                et à respecter les exigences d'un cahier des charges.`,
            description3: `  Aujourd'hui, à l'issue de mon parcours, je vous présente à travers ce portfolio l'évolution 
                                de mes compétences et réalisations tout au long de mes deux années d'étude.`,
            resume: "Voir le CV",
        },
    },
    contact:{
        en:{
            title: "Contact Me",
            description:'Have a question or want to work together? Feel free to reach out using the form below.',
            description1:'Get in Touch',
            description2:"Fill out the form below and I'll get back to you as soon as possible.",
            name:'Name',
            email:'Email',
            message:'Message',
            send:'Send Message',
            success:'Your message has been sent successfully!',
            error:'An error occurred while sending your message. Please try again later.',
            placeholderName:"Your name",
            placeholderEmail:"your.email@example.com",
            placeholderMessage:"Write your message here",
        },
        fr: {
            title: "Contactez-moi",
            description: "Vous avez une question ou vous souhaitez collaborer ? N'hésitez pas à me contacter en utilisant le formulaire ci-dessous.",
            description1: "Entrer en contact",
            description2: "Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.",
            name: "Nom",
            email: "Email",
            message: "Message",
            send: "Envoyer le message",
            success: "Votre message a été envoyé avec succès !",
            error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.",
            placeholderName: "Votre nom",
            placeholderEmail: "votre.email@example.com",
            placeholderMessage: "Écrivez votre message ici",
        }
    }

};
