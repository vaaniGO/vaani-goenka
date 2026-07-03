import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { previousProjects, developmentProjects } from '@/data/projects';

type ProjectLink = {
    url: string;
    title: string;
};

type Project = {
    title: string;
    description: string;
    link?: string;
    links?: ProjectLink[];
    tags?: string[];
};

const ProjectItem = ({ project }: { project: Project }) => {
    return (
        <div className="border-l-2 border-primary pl-6 space-y-2">
            <p className="font-body text-base text-foreground">
                {project.title}
            </p>

            <p className="font-body text-sm text-muted-foreground">
                {project.description}
            </p>

            {/* Links (small font, below description) */}
            {(project.link || project.links) && (
                <div className="flex flex-wrap gap-4 pt-1">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:text-primary/80 transition-colors"
                        >
                            Visit →
                        </a>
                    )}

                    {project.links?.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:text-primary/80 transition-colors"
                        >
                            {link.title} →
                        </a>
                    ))}
                </div>
            )}

            {/* Tags */}
            {project.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-body text-muted-foreground bg-muted px-2 py-0.5 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="py-16 md:py-20">
                <div className="container max-w-5xl mx-auto px-6">
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Projects
                    </h1>

                    <div className="space-y-16 max-w-3xl">

                        {/* Previous Projects */}
                        <div>
                            <p className="font-body text-lg font-semibold text-foreground mb-6">
                                Previously, I have worked on
                            </p>

                            <div className="space-y-6">
                                {previousProjects.map((project, index) => (
                                    <ProjectItem key={index} project={project} />
                                ))}
                            </div>
                        </div>

                        {/* Development Projects */}
                        <div>
                            <p className="font-body text-lg font-semibold text-foreground mb-6">
                                Development Projects
                            </p>

                            <div className="space-y-6">
                                {developmentProjects.map((project, index) => (
                                    <ProjectItem key={index} project={project} />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Projects;
