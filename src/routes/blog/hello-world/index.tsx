import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

interface BlogPostData {
  Content: any;
  frontmatter: {
    title: string;
    description: string;
    date: string;
  };
}

export default component$(() => {
  return (
    <div class="bg-oxford-50 dark:bg-oxford min-h-screen font-sans">
      <div class="mx-auto max-w-2xl px-4 py-32">
        <article class="space-y-8">
          <header class="space-y-2">
            <h1 class="font-display text-h1 text-oxford dark:text-oxford-50 font-medium">
              Hello, World!
            </h1>
            <p class="text-body text-oxford-300 dark:text-oxford-200">
              January 30, 2024
            </p>
          </header>
          <div class="text-body text-oxford-300 dark:text-oxford-200 space-y-4 [&_h2]:font-display [&_h2]:text-h3 [&_h2]:text-oxford [&_h2]:dark:text-oxford-50 [&_h2]:font-medium [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-h4 [&_h3]:text-oxford [&_h3]:dark:text-oxford-50 [&_h3]:font-medium [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-2 [&_pre]:bg-oxford-100 [&_pre]:dark:bg-oxford-900 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_code]:font-mono [&_code]:text-sm [&_a]:text-oxford [&_a]:dark:text-oxford-50 [&_a]:underline [&_a]:hover:text-oxford-300 [&_a]:dark:hover:text-oxford-200">
            <p>Welcome to my blog! This is a sample post written in MDX format. MDX allows us to use React-style components right inside our markdown content.</p>

            <h2>Features</h2>
            <ul>
              <li>Write content in Markdown</li>
              <li>Use components when needed</li>
              <li>Code syntax highlighting</li>
            </ul>

            <pre><code class="language-typescript">{`function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
}`}</code></pre>

            <h2>What's Next?</h2>
            <p>Stay tuned for more posts! In the meantime, you can:</p>
            <ol>
              <li>Explore the site</li>
              <li>Check out the <a href="https://github.com/yourusername/yourwebsite">source code</a></li>
              <li>Learn more about <a href="https://qwik.builder.io/">Qwik</a></li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Hello, World!",
  meta: [
    {
      name: "description",
      content: "Welcome to my blog built with Qwik and MDX",
    },
  ],
};
