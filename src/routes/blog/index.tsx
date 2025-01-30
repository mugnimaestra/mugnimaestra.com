import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="bg-oxford-50 dark:bg-oxford min-h-screen font-sans">
      <div class="mx-auto max-w-2xl px-4 py-32">
        <h1 class="font-display text-h1 text-oxford dark:text-oxford-50 mb-8 font-medium">
          Blog
        </h1>
        <ul class="space-y-12">
          <li class="group">
            <Link href="/blog/hello-world" class="block space-y-2">
              <h2 class="font-display text-h4 text-oxford group-hover:text-oxford-300 dark:text-oxford-50 dark:group-hover:text-oxford-200 transition-colors">
                Hello, World!
              </h2>
              <p class="text-body text-oxford-300 dark:text-oxford-200">
                Welcome to my blog built with Qwik and MDX
              </p>
              <span class="text-body-sm text-oxford-300 dark:text-oxford-200">
                January 30, 2024
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Blog Posts",
  meta: [
    {
      name: "description",
      content: "Read my latest blog posts about web development and technology",
    },
  ],
};
