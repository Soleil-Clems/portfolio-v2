import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import {Experience} from '@/components/Skills'
import {About} from '@/components/About'
import {Project} from '@/components/Project'
import {Parcours} from '@/components/Parcours'
// import {Evaluation} from '@/components/Evaluation'
import Contact from '@/components/Contact'


export default function Home() {
    return (
        <div>
            <Navigation/>
            <Hero/>
            <About/>
            <Project/>
            <Parcours/>
            <Experience/>
            {/* <Evaluation/> */}
            <Contact/>
            <Footer/>
        </div>
    )
}
