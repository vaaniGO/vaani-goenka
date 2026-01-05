import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="py-16 md:py-20">
                <div className="container max-w-5xl mx-auto px-6">
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                        Teaching
                    </h1>
                    <p className="mb-10">I have been a Teaching Assistant in the following courses.</p>

                    <div className="space-y-12 max-w-3xl">

                        {/* Monsoon 2025 */}
                        <div>
                            <p className="font-body text-lg font-semibold text-foreground mb-6">
                                Monsoon 2025
                            </p>
                            <div className="space-y-6">
                                {/* Discrete Mathematics */}
                                <div className="border-l-2 border-primary pl-6">
                                    <p className="font-body text-base text-muted-foreground mb-1">
                                        Discrete Mathematics
                                    </p>
                                    <p className="font-body text-sm text-muted-foreground">
                                        <a
                                            href="https://gauravbhatnagar.org/"
                                            className="text-primary hover:text-primary/80 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Prof. Gaurav Bhatnagar
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Summer 2025 */}
                        <div>
                            <p className="font-body text-lg font-semibold text-foreground mb-6">
                                Summer 2025
                                {' • '}
                                <a
                                    href="https://www.lodhageniusprogramme.com/"
                                    className="text-primary hover:text-primary/80 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Lodha Genius Programme
                                </a>
                            </p>
                            <div className="space-y-6">
                                {/* Introduction to Modern Cryptography */}
                                <div className="border-l-2 border-primary pl-6">
                                    <p className="font-body text-base text-muted-foreground mb-1">
                                        Introduction to Modern Cryptography
                                    </p>
                                    <p className="font-body text-sm text-muted-foreground">
                                        <a
                                            href="https://sites.google.com/site/homeofmahavir/Home"
                                            className="text-primary hover:text-primary/80 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Prof. Mahavir Jhawar
                                        </a>
                                    </p>
                                </div>

                                {/* Problem-Solving Group */}
                                <div className="border-l-2 border-primary pl-6">
                                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                                        Problem-Solving Group
                                    </h3>
                                    <p className="font-body text-sm text-muted-foreground">
                                        <a
                                            href="https://web.iitd.ac.in/~atripath/"
                                            className="text-primary hover:text-primary/80 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Prof. A. Tripathi
                                        </a>
                                    </p>
                                </div>

                                {/* Linear Algebra */}
                                <div className="border-l-2 border-primary pl-6">
                                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                                        Linear Algebra
                                    </h3>
                                    <p className="font-body text-sm text-muted-foreground">
                                        <a
                                            href="https://sites.google.com/view/sagar-shrivastava/home"
                                            className="text-primary hover:text-primary/80 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Prof. Sagar Srivastava
                                        </a>
                                    </p>
                                </div>

                                {/* Graph Theory & Combinatorics */}
                                <div className="border-l-2 border-primary pl-6">
                                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                                        Graph Theory & Combinatorics
                                    </h3>
                                    <p className="font-body text-sm text-muted-foreground">
                                        Archana Kumari, Surabhi (PhD Students, IIT Delhi)
                                    </p>
                                </div>
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