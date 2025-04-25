import Link from "next/link";

export default function About() {
  return (
    <main className="py-3">
      <h1 className="text-4xl font-bold mb-6">About This Blog</h1>
      <p className="text-gray-700 mb-4">
        Hey there! 👋 This is <span className="font-semibold">Group 6</span>, we are a full-stack development and UI/UX design team
        passionate about building clean, functional web applications and beautiful user experiences.
      </p>
      <p className="text-gray-700 mb-4">
        This blog is where we share what we learn on our journey—whether it's tips on JavaScript, deep dives into Next.js,
        playing with AI models, or just cool stuff I’ve built or found interesting.
      </p>
      <p className="text-gray-700 mb-4">
        We are still in high school, but that hasn’t stopped us from coding, designing, and dreaming big. We hope you find
        something useful or inspiring here. ✨
      </p>
      <p className="text-gray-700">
        Thanks for stopping by. If you want to connect, feel free to reach out via
        or check us out my work on{" "}
        <Link href="https://github.com/studygenuis" target="_blank" className="text-blue-600 hover:underline">
          GitHub
        </Link>.
      </p>
    </main>
  );
}  