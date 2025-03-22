import React from 'react';

export default function Card10() {
    return (
        <div className="min-h-screen bg-[url('bg-image.jpg')] bg-cover bg-center">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
                    <div className="mb-8">
                        <p className="text-[#257f69] uppercase text-sm font-bold tracking-widest">
                            Theories
                        </p>
                        <h1 className="text-[#212121] text-4xl md:text-5xl font-bold leading-tight mt-2">
                            Ethnocentrism in Psychology: Definitions, Examples, and How to Combat Biases
                        </h1>
                    </div>

                    <div className="mb-8">
                        <img
                            src="/photo10.webp"
                            alt="Ethnocentrism in Psychology"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                            Ethnocentrism is the belief that one’s own ethnic, racial, or social group is superior or the standard against which all other groups should be compared. While it can sometimes be a conscious belief, it’s often an unconscious bias that influences research, clinical practice, and mental health outcomes.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            In psychology, ethnocentrism can lead to misdiagnosis, inappropriate treatments, and harm to communities that are overlooked or pathologized for not conforming to Western norms.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Why Ethnocentrism Occurs</h2>
                        <p className="text-gray-700 leading-relaxed">
                            A 2010 review of psychological studies found that 96% of participants came from Western, Educated, Industrialized, Rich, and Democratic (WEIRD) societies, which represent only 12% of the global population. This narrow focus has led to the generalization of Western cultural values as the default standard for mental health.
                        </p>
                        <blockquote className="border-l-4 border-[#257f69] pl-4 italic text-gray-700 my-6">
                            “Behavior that is seen as adaptive or maladaptive can be culturally informed. Customs and norms of one group may differ significantly from another.”
                            <br />— Dr. K. Chinwe Idigo, Licensed Psychologist
                        </blockquote>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Examples of Ethnocentrism in Psychology</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ethnocentrism manifests in psychological theories and practices that are based on Western norms but applied globally. Examples include:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>Attachment Theory</strong>: Based on studies of American infants, it assumes nuclear family structures are universal, ignoring collectivist cultures where children are raised by extended communities.</li>
                            <li><strong>Trauma Definitions</strong>: Focuses on individualized trauma (e.g., abuse) while excluding systemic or historical trauma (e.g., racism, colonialism).</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            These biases can lead to misdiagnosis, inappropriate treatments, and harm to marginalized communities.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">How Ethnocentrism Shows Up in Psychology</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ethnocentrism influences how mental health providers approach care. For example:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>Misdiagnosis</strong>: Cultural behaviors may be pathologized as abnormal.</li>
                            <li><strong>Inappropriate Treatments</strong>: Therapies like exposure therapy or CBT may not align with the experiences of non-Western clients, such as refugees.</li>
                        </ul>
                        <blockquote className="border-l-4 border-[#257f69] pl-4 italic text-gray-700 my-6">
                            “Clients often feel unseen when providers lack awareness of cultural impacts in therapy.”
                            <br />— Maryam Elbalghiti-Williams, LCSW-C
                        </blockquote>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Why Ethnocentrism Is Harmful</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ethnocentrism excludes marginalized groups from appropriate care and perpetuates harmful stereotypes. It can lead to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li>Displacement of children based on biased family dynamics theories.</li>
                            <li>Exclusion from trauma treatment due to narrow definitions.</li>
                            <li>Feelings of alienation and lack of trust in mental health providers.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Ethnocentrism vs. Cultural Relativism</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Cultural relativism is the practice of understanding other cultures through their own norms and values, rather than judging them by Western standards. This approach helps clinicians:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li>Avoid pathologizing behaviors that are normal in other cultures.</li>
                            <li>Provide more culturally sensitive and effective care.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6 mb-4">How to Recognize and Address Ethnocentrism</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To reduce ethnocentrism in psychology, mental health providers can:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>Educate Themselves</strong>: Seek out training and research led by BIPOC clinicians.</li>
                            <li><strong>Reflect on Biases</strong>: Regularly evaluate personal beliefs and assumptions.</li>
                            <li><strong>Collaborate with Clients</strong>: Involve clients in setting treatment goals and ensure care aligns with their cultural values.</li>
                        </ul>
                        <blockquote className="border-l-4 border-[#257f69] pl-4 italic text-gray-700 my-6">
                            “A collaborative approach to treatment can help mitigate the effects of unconscious biases.”
                            <br />— Dr. K. Chinwe Idigo
                        </blockquote>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Summary</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ethnocentrism in psychology perpetuates harmful biases and excludes marginalized groups from appropriate care. By adopting cultural relativism, educating themselves, and collaborating with clients, mental health providers can deliver more inclusive and effective care.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}