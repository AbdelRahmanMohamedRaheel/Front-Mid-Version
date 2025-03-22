import React from 'react';

export default function Card14() {
    return (
        <div className="min-h-screen bg-[url('bg-image.jpg')] bg-cover bg-center">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
                    <div className="mb-8">
                        <p className="text-[#257f69] uppercase text-sm font-bold tracking-widest">
                            Theories
                        </p>
                        <h1 className="text-[#212121] text-4xl md:text-5xl font-bold leading-tight mt-2">
                            What Is Objective Morality?                        </h1>
                    </div>

                    <div className="mb-8">
                        <img
                            src="/photo14.webp"
                            alt="Objective Morality"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                            Objective morality is the idea that right and wrong exist factually, independent of personal opinions or beliefs. It suggests that certain actions are inherently good or bad, regardless of individual perspectives or cultural differences.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This concept, also known as moral objectivism, has been debated for centuries, with arguments both for and against its existence.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">The History of Objective Morality</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The idea of objective morality dates back to ancient times, with roots in philosophies like Mohism in China and the works of Plato and Aristotle in Greece. In the 19th century, philosophers began to align morality with scientific objectivity, leading to a more fact-based approach to ethical questions.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Morality vs. Ethics</h2>
                        <p className="text-gray-700 leading-relaxed">
                            While morality and ethics are often used interchangeably, they are distinct concepts:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>Morality</strong>: Personal beliefs about right and wrong, shaped by upbringing, religion, and experiences.</li>
                            <li><strong>Ethics</strong>: Standards of behavior defined by social, professional, or legal systems.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Arguments For Objective Morality</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Several arguments support the existence of objective morality:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>Religion</strong>: Many religious texts, such as the Bible, Torah, and Quran, provide clear moral guidelines.</li>
                            <li><strong>Society</strong>: Shared societal norms and reactions to fairness suggest a universal sense of right and wrong.</li>
                            <li><strong>Self-Improvement</strong>: The universal desire to become better people points to common moral ideals.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Arguments Against Objective Morality</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Critics of objective morality argue that morality is relative and context-dependent:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>Moral Relativism</strong>: Morality varies across cultures and historical periods, suggesting it is not universal.</li>
                            <li><strong>Scientific Analysis</strong>: There is no objective way to compare opposing moral beliefs, making it difficult to define universal truths.</li>
                        </ul>
                        <blockquote className="border-l-4 border-[#257f69] pl-4 italic text-gray-700 my-6">
                            “Morality is relative, changing between cultures and historical periods. There is no universal standard for right and wrong.”
                        </blockquote>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Does Objective Morality Truly Exist?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The debate over objective morality remains unresolved. While some argue that certain actions are universally wrong (e.g., murder), others point to cultural practices that challenge this notion (e.g., polygamy). Ultimately, whether objective morality exists depends on one's philosophical perspective.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">A Word From Verywell</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Whether objective morality exists or not, we all have an inner sense of right and wrong. Following your moral compass and striving to be a kind, ethical person is a meaningful way to navigate life. Philosophy offers many perspectives on morality, and exploring these ideas can deepen your understanding of ethics and human behavior.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}