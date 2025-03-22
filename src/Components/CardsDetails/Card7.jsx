import React from 'react';

export default function Card7() {
    return (
        <div className="min-h-screen bg-[url('bg-image.jpg')] bg-cover bg-center">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
                    <div className="mb-8">
                        <p className="text-[#257f69] uppercase text-sm font-bold tracking-widest">
                            Theories
                        </p>
                        <h1 className="text-[#212121] text-4xl md:text-5xl font-bold leading-tight mt-2">
                            Understanding the Biopsychosocial Model of Health and Wellness                        </h1>
                    </div>

                    <div className="mb-8">
                        <img
                            src="/photo7.webp"
                            alt="Biopsychosocial Model"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                            The biopsychosocial model is an approach to understanding mental and physical health through a multi-systems lens, considering the influence of biology, psychology, and social environment. Developed by Dr. George Engel and Dr. John Romano in the 1970s, this model recognizes that these systems overlap and interact to impact an individual’s well-being and risk for illness.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            A biopsychosocial approach to healthcare emphasizes the importance of patient self-awareness, relationships with providers, and individual life context. It also highlights the need for holistic care that addresses all aspects of a person’s health.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">What Are the Three Aspects of the Biopsychosocial Model?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The biopsychosocial model considers three key components:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>Biological</strong>: Genetics, physical health, and organ system functioning.</li>
                            <li><strong>Psychological</strong>: Thoughts, emotions, and behaviors.</li>
                            <li><strong>Social</strong>: Socioeconomic factors, social support, and culture.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-4 mb-2">Biological</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Our physical well-being impacts our mental health in multiple ways. For example, chronic pain can lead to symptoms of depression, and genetics play a significant role in mental health. According to Dr. Akeem Marsh, MD, “Genetics are the most basic level by which mental health is influenced, and on some level, it has an impact for everyone.”
                        </p>

                        <h3 className="text-xl font-bold mt-4 mb-2">Psychological</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Mental health is health, and psychological well-being impacts both mental and physical health. Unhealthy thoughts, emotions, and behaviors can contribute to mental health conditions, creating a cyclical effect. For instance, self-isolation as a symptom of depression can worsen depressive symptoms.
                        </p>
                        <blockquote className="border-l-4 border-[#257f69] pl-4 italic text-gray-700 my-6">
                            “Routine physical activity is known to promote positive mental wellness, while inadequate or excessive physical activity can contribute to different types of mental health struggles.”
                            <br />— Dr. Akeem Marsh, MD
                        </blockquote>

                        <h3 className="text-xl font-bold mt-4 mb-2">Social</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Social factors, such as environment and support systems, significantly influence mental health. Individuals with strong social support experience fewer mental health issues compared to those without it. Addressing social needs can sometimes improve mental health more effectively than traditional treatments.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">How the Biopsychosocial Model Impacts Mental Health</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Traditionally, healthcare has focused on the medical and biological aspects of health, while mental health care has emphasized psychological factors. However, a holistic approach that addresses biological, psychological, and social factors can lead to more effective and less invasive treatments.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            For example, addressing environmental stressors or social needs can improve mental health outcomes more effectively than medication or therapy alone.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Criticism of the Biopsychosocial Model</h2>
                        <p className="text-gray-700 leading-relaxed">
                            While the biopsychosocial model has many strengths, it also faces criticism. Dr. Marsh notes that some believe the model lacks scientific validation due to the difficulty of studying holistic care in controlled trials. However, the model has been extensively researched and shown positive results when applied in practice.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">How Healthcare Professionals Use the Biopsychosocial Model</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Mental health professionals using the biopsychosocial model consider medical history, family history, genetics, and social factors in addition to psychological information. This approach ensures that all of the client’s needs are met, recognizing that medical issues can manifest as mental health symptoms.
                        </p>
                        <blockquote className="border-l-4 border-[#257f69] pl-4 italic text-gray-700 my-6">
                            “When adopted appropriately, health professionals conceptualize patients as whole people—complex human beings with nuance, so much more than just a cluster of symptoms or a diagnosis.”
                            <br />— Dr. Akeem Marsh, MD
                        </blockquote>

                        <h2 className="text-2xl font-bold mt-6 mb-4">How Clients and Patients Can Use the Biopsychosocial Model</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Individuals can also apply the biopsychosocial model to better understand their own health. By being aware of how environmental factors, genetics, and medical history influence their thoughts, emotions, and behaviors, individuals can gain a deeper understanding of themselves and their health needs.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Dr. Marsh emphasizes that the model can enhance self-awareness and help individuals address challenges more effectively.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}