import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import CardSlider from '@/components/CardSlider';
import { previousProjects, developmentProjects } from '@/data/projects';

const Projects = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="py-16 md:py-20">
                <div className="container max-w-5xl mx-auto px-6">
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Projects
                    </h1>
                </div>
            </section>

            <div id="projects">

                <Section>
                    <CardSlider title="Previously, I have worked on" projects={previousProjects} />
                </Section>

                <Section>
                    <CardSlider title="Development Projects" projects={developmentProjects} />
                </Section>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;