import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About Us';
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Our Mission: Empowering Your Mental Well-being
        </h1>
      </header>

      {/* Content */}
      <section className="space-y-6 text-gray-700">
        <p className="text-lg leading-relaxed">
          Here at Calm Sphere, we believe that mental health is not just about overcoming struggles—it’s about thriving. Your journey is unique, and there is no one-size-fits-all approach to emotional well-being. That’s why we are dedicated to being your trusted companion, offering guidance, support, and insight at every step.
        </p>

        <p className="text-lg leading-relaxed">
          Whether you're navigating anxiety, depression, seeking emotional balance, or simply looking to better understand yourself and the world around you, we are here to help. Our goal is to empower you with the right tools, knowledge, and encouragement to take charge of your mental wellness and embrace a fulfilling life.
        </p>

        <p className="text-lg leading-relaxed">
          Mental health is an evolving field, and as research advances, so does our commitment to providing you with the most reliable, evidence-based insights. We sift through the overwhelming sea of information, ensuring that what you read is not just informative but also practical and actionable. Our resources are backed by experts, therapists, psychologists, and the latest scientific studies—because your well-being deserves the highest standard of care.
        </p>

        <p className="text-lg leading-relaxed">
          But science alone doesn’t tell the whole story. We understand that mental health is deeply personal, shaped by lived experiences, culture, and societal shifts. That’s why Calm Sphere is built on inclusivity, amplifying diverse voices and real-life perspectives. We are constantly learning, evolving, and striving to create a space where you feel seen, heard, and understood.
        </p>

        <p className="text-lg leading-relaxed">
          At Calm Sphere, you are never alone. No matter where you are on your journey, we are here to guide you toward a life of balance, resilience, and self-discovery.
        </p>

        <p className="text-lg leading-relaxed">
          Your mind matters. Your well-being matters. You matter.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p className="text-lg font-semibold">— The Calm Sphere Team</p>
        <p className="mt-4">
          <strong>Contact Us</strong><br />
          We love to hear from our readers. If you have a comment, suggestion, or correction to share, feel free to contact us at{' '}
          <a
            href="mailto:contact@calmsphere.com"
            className="text-blue-500 hover:underline"
          >
            contact@calmsphere.com
          </a>
          .
        </p>
        <p className="mt-2">Cairo, EG</p>
      </footer>
    </div>
  );
}