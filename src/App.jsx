import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contactus from "./Components/Contact.jsx";
import Footer from "./Components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            <Navbar />

            <main className="mt-16">
                <section id="hero" className="scroll-mt-16">
                    <Hero />
                </section>

                <section id="skills" className="scroll-mt-16">
                    <Skills />
                </section>

                <section id="projects" className="scroll-mt-16">
                    <Projects />
                </section>

                <section id="contact" className="scroll-mt-16">
                    <Contactus />
                </section>
            </main>

            <Footer />
        </div>
    );
}
