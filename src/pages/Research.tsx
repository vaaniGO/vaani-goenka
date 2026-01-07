import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

const Research = () => {
    // Replace this with your actual PDF path
    const pdfUrl = `${import.meta.env.BASE_URL}research-paper.pdf`;
    const vscodeExtensionUrl = "https://marketplace.visualstudio.com/items?itemName=VaaniGoenka.boop-for-cs-pedagogy"; // Replace with your extension URL
    const boopURL = "https://vaanigo.github.io/boop/"; // Replace with your BOOP walkthrough URL

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <Section>
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Research
                    </h1>

                    <div className="mb-6">
                        <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                            My research with <a href="https://aalok-thakkar.github.io/" className='text-primary'> Prof. Aalok Thakkar </a> aims to reassert a correctness-first practice of computer science in pedagogical context. We introduce BOOP, a tool to systematically derive a correct implementation from mathematical reasoning given a problem statement.
                        </p>
                        {/* VS Code Extension Button */}
                        <div className="mt-4">
                            <a
                                href={vscodeExtensionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-body text-sm rounded-md hover:bg-primary/90 transition-colors shadow-sm"
                            >
                                VS Code Extension
                            </a>

                            <a
                                href={boopURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-5 inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-body text-sm rounded-md hover:bg-primary/90 transition-colors shadow-sm"
                            >
                                Walkthrough
                            </a>
                        </div>


                        <h3 className='mt-10 mb-2'>Publications</h3>
                        <p>Goenka, V., Thakkar, A. (2026). BOOP: Write Right Code. In: Prasad, P., Raman, A., Shah, B. (eds) Computing Education Research . COMPUTE 2025. Communications in Computer and Information Science, vol 2739. Springer, Cham. <a href="https://doi.org/10.1007/978-3-032-14583-3_7">https://doi.org/10.1007/978-3-032-14583-3_7</a></p>

                    </div>



                    {/* PDF Viewer */}
                    <div className="w-full border border-border rounded-lg overflow-hidden bg-card shadow-sm">
                        <iframe
                            src={pdfUrl}
                            className="w-full h-[800px]"
                            title="Research Paper"
                        />
                    </div>

                    {/* Download Link */}
                    <div className="mt-6 text-center">
                        <a
                            href={pdfUrl}
                            download
                            className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download PDF
                        </a>
                    </div>
                </div >
            </Section >

            <Footer />
        </div >
    );
};

export default Research;