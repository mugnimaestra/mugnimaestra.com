import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="bg-oxford-50 dark:bg-oxford min-h-screen font-sans">
      {/* Hero Section */}
      <div class="mx-auto max-w-2xl px-4 py-32">
        <p class="text-h4 text-oxford-300 dark:text-oxford-200 mb-2 font-medium">
          Frontend Engineer who crafts with precision
        </p>
        <h1 class="font-display text-h1 md:text-display text-oxford dark:text-oxford-50 mb-8 font-medium">
          Hi, I'm <span class="font-semibold">Mugni Hadi</span>
        </h1>
        <p class="text-body text-oxford-300 dark:text-oxford-200">
          I'm a frontend engineer at Rukita, where I specialize in building
          modern web applications using Next.js and TypeScript. I focus on
          creating clean, maintainable code while ensuring great user
          experiences through accessibility and performance optimization.
        </p>
      </div>

      {/* Work Section */}
      <div class="mx-auto max-w-2xl px-4 py-16">
        <h2 class="font-display text-h3 text-oxford dark:text-oxford-50 mb-8 font-medium">
          Selected Work
        </h2>
        <div class="space-y-12">
          <a
            href="https://www.rukita.co"
            target="_blank"
            rel="noopener noreferrer"
            class="group block"
          >
            <div class="space-y-2">
              <h3 class="font-display text-h4 text-oxford group-hover:text-oxford-300 dark:text-oxford-50 dark:group-hover:text-oxford-200 transition-colors">
                Rukita Platform Revamp
              </h3>
              <p class="text-body text-oxford-300 dark:text-oxford-200">
                Led the development of Rukita's new website and mobile app,
                implementing Next.js for better SEO, Tailwind CSS for
                performance, and Tanstack Query for efficient data management.
                Completed both projects within 3 months.
              </p>
            </div>
          </a>

          <a
            href="https://www.rukita.co/stories"
            target="_blank"
            rel="noopener noreferrer"
            class="group block"
          >
            <div class="space-y-2">
              <h3 class="font-display text-h4 text-oxford group-hover:text-oxford-300 dark:text-oxford-50 dark:group-hover:text-oxford-200 transition-colors">
                Rukita Stories Redesign
              </h3>
              <p class="text-body text-oxford-300 dark:text-oxford-200">
                Transformed the Stories platform from WordPress to a custom
                design using WordPress REST API, significantly improving
                performance and user experience.
              </p>
            </div>
          </a>

          <div class="space-y-2">
            <h3 class="font-display text-h4 text-oxford dark:text-oxford-50">
              Mobile Applications
            </h3>
            <div class="space-y-4">
              <p class="text-body text-oxford-300 dark:text-oxford-200">
                Contributed to multiple React Native applications:
              </p>
              <ul class="text-body text-oxford-300 dark:text-oxford-200 list-disc space-y-2 pl-5">
                <li>
                  RuManage by Rukita - Property management mobile application
                </li>
                <li>RuAssist by Rukita - Support staff mobile application</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div class="mx-auto max-w-2xl px-4 py-16">
        <h2 class="font-display text-h3 text-oxford dark:text-oxford-50 mb-8 font-medium">
          About
        </h2>
        <div class="text-body text-oxford-300 dark:text-oxford-200 space-y-4">
          <p>
            With experience at companies like Rukita and CIAYO, I've developed
            expertise in React, Next.js, and TypeScript. I enjoy working with
            modern web technologies and have a strong foundation in CSS,
            including styled-components and SCSS.
          </p>
          <p>
            I'm particularly interested in code quality and developer
            experience, having contributed to standardizing coding practices and
            improving development workflows. When I'm not coding, I take on side
            projects to explore new technologies and enhance my skills.
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div class="mx-auto max-w-2xl px-4 py-16">
        <h2 class="font-display text-h3 text-oxford dark:text-oxford-50 mb-8 font-medium">
          Blog
        </h2>
        <a
          href="/blog"
          class="group inline-block text-body text-oxford hover:text-oxford-300 dark:text-oxford-50 dark:hover:text-oxford-200 transition-colors"
        >
          Read my thoughts on web development, technology, and more →
        </a>
      </div>

      {/* Contact Section */}
      <div class="mx-auto max-w-2xl px-4 py-16">
        <h2 class="font-display text-h3 text-oxford dark:text-oxford-50 mb-8 font-medium">
          Connect
        </h2>
        <div class="flex space-x-6">
          <a
            href="https://github.com/mugnimaestra"
            target="_blank"
            rel="noopener noreferrer"
            class="text-body-sm text-oxford hover:text-oxford-300 dark:text-oxford-50 dark:hover:text-oxford-200 font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mugnimaestra"
            target="_blank"
            rel="noopener noreferrer"
            class="text-body-sm text-oxford hover:text-oxford-300 dark:text-oxford-50 dark:hover:text-oxford-200 font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mugnimaestra2@gmail.com"
            class="text-body-sm text-oxford hover:text-oxford-300 dark:text-oxford-50 dark:hover:text-oxford-200 font-medium transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Mugni Hadi — Frontend Engineer",
  meta: [
    {
      name: "description",
      content:
        "Frontend engineer at Rukita, specializing in Next.js and TypeScript development with a focus on clean code and great user experiences",
    },
  ],
};
