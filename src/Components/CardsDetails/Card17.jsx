import React from 'react';

export default function Card17() {
    return (
        <div className="min-h-screen bg-[url('bg-image.jpg')] bg-cover bg-center">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
                    <div className="mb-8">
                        <p className="text-[#257f69] uppercase text-sm font-bold tracking-widest">
                            Theories
                        </p>
                        <h1 className="text-[#212121] text-4xl md:text-5xl font-bold leading-tight mt-2">
                            What to Know About The Uncanny Valley
                        </h1>
                    </div>

                    <div className="mb-8">
                        <img
                            src="/photo17.webp"
                            alt="Uncanny Valley"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                            Think about the animated movies you've seen. Did any of them have an animation style that was realistic but, at the same time, ended up making you feel super uneasy? The uncanny valley is a term used to describe the relationship between the human-like appearance of a robotic object and the emotional response it evokes.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            One of the most classic examples is the 2004 movie <em>Polar Express</em>. Video games are a major player in the uncanny valley department too, as are humanoid robots. In this phenomenon, people feel a sense of unease or even revulsion in response to humanoid robots that are highly realistic.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The uncanny valley has implications within the field of robotics and artificial intelligence. Devices and online avatars that are made to mimic the human experience may actually end up alienating people who are using such tools.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">At a Glance</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Androids, avatars, and animations aim for extreme realism but get caught in a disturbing chasm dubbed the uncanny valley. They are very realistic and lifelike—but when we examine them, we see they are not quite human. When a robotic or animated depiction lies in this "valley," people tend to feel a sense of unease, strangeness, disgust, or creepiness.
                        </p>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Origins of the Uncanny Valley</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The phenomenon was first coined and described by the Japanese roboticist Masahiro Mori in an article published in 1970. Mori identified the phenomenon as <em>bukimi no tani genshō</em>, meaning 'valley of eeriness.' In 1978, author Jasia Reichardt translated the term 'uncanny valley' in the book <em>Robots: Fact, Fiction, and Prediction</em>.
                        </p>
                        <blockquote className="border-l-4 border-[#257f69] pl-4 italic text-gray-700 my-6">
                            “I have noticed that, in climbing toward the goal of making robots appear human, our affinity for them increases until we come to a valley, which I call the uncanny valley.”
                            <br />— Masahiro Mori, roboticist
                        </blockquote>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Uncanny Valley Examples</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The uncanny valley has been observed in a variety of contexts, from highly realistic robots to video game characters. Some of the best-known examples include:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>The Polar Express</strong>: The 2004 film's CGI animation was close to lifelike but fell into the uncanny valley due to slightly off facial expressions.</li>
                            <li><strong>Final Fantasy: The Spirits Within</strong>: Despite realistic CGI, the movie's characters were unsettling, contributing to its commercial failure.</li>
                            <li><strong>Shrek</strong>: Early test screenings of Princess Fiona caused anxiety in children, leading to her redesign to avoid the uncanny valley.</li>
                            <li><strong>Cats</strong>: The 2019 film's humanoid felines were widely criticized as creepy and unsettling.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6 mb-4">What Causes the Uncanny Valley Effect?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Several theories attempt to explain why people experience the uncanny valley effect:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>Ambiguity</strong>: Almost-but-not-quite-human appearances create tension and discomfort.</li>
                            <li><strong>Mismatched Elements</strong>: Combining human and non-human traits (e.g., robots with human voices) can feel unsettling.</li>
                            <li><strong>Inconsistency</strong>: Minor divergences from realism (e.g., a slow smile) can make characters seem uncanny.</li>
                            <li><strong>Survival Response</strong>: The effect may be an evolutionary response to potential threats like death or disease.</li>
                            <li><strong>Category Uncertainty</strong>: Difficulty categorizing something as human or non-human can cause cognitive dissonance.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Research on the Uncanny Valley</h2>
                        <p className="text-gray-700 leading-relaxed">
                            While Mori first proposed the theory in 1970, formal empirical investigations began in the mid-2000s. Some key findings include:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>Likeness and Eeriness</strong>: A 2013 study found a linear relationship between human likeness and eeriness.</li>
                            <li><strong>Children's Responses</strong>: A 2014 study showed that children also experience uncanniness with human-like virtual characters.</li>
                            <li><strong>Uncanny Valley vs. a Wall</strong>: Some researchers argue that the effect is more like a cliff than a valley, with likeability dropping off sharply at a certain point.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Implications of the Uncanny Valley</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The uncanny valley has significant implications in various fields:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li><strong>Robotics</strong>: Designing robots that avoid the uncanny valley is crucial for user acceptance.</li>
                            <li><strong>Digital Avatars</strong>: Overly realistic avatars in online therapy can reduce trust and likability.</li>
                            <li><strong>Film and Game Design</strong>: Filmmakers and game designers must balance realism to avoid unsettling audiences.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Avoiding the Uncanny Valley</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Researchers and designers have proposed several strategies to avoid the uncanny valley:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li>Matching human proportions with realistic textures.</li>
                            <li>Avoiding the mixing of non-human and human elements.</li>
                            <li>Ensuring that behaviors, appearance, and abilities do not conflict.</li>
                        </ul>
                        <blockquote className="border-l-4 border-[#257f69] pl-4 italic text-gray-700 my-6">
                            “While it may be possible to bridge the uncanny valley, I see no point in trying. Instead, I advocate designing things that stop before they reach the point of uncanniness.”
                            <br />— Masahiro Mori
                        </blockquote>

                        <h2 className="text-2xl font-bold mt-6 mb-4">Final Thoughts</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The uncanny valley remains a fascinating phenomenon with significant implications for technology and design. As advancements continue, understanding and addressing this effect will be crucial for creating tools and media that resonate positively with users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}