import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

interface BlogPostData {
  Content: any;
  frontmatter: {
    title: string;
    description: string;
    date: string;
  };
}

export const useBlogPost = routeLoader$(async (requestEvent) => {
  const slug = requestEvent.params.slug;
  const contentPath = new URL(`../../../content/blog/${slug}.mdx`, import.meta.url).href;
  
  try {
    // @vite-ignore
    const post = await import(contentPath);
    
    return {
      Content: post.default,
      frontmatter: {
        title: post.frontmatter?.title || "Blog Post",
        description: post.frontmatter?.description || "",
        date: post.frontmatter?.date || ""
      }
    } as BlogPostData;
  } catch (error) {
    throw requestEvent.error(404, "Blog post not found");
  }
});

export default component$(() => {
  const post = useBlogPost();
  const Content = post.value.Content;
  const { title, date } = post.value.frontmatter;

  return (
    <div class="bg-oxford-50 dark:bg-oxford min-h-screen font-sans">
      <div class="mx-auto max-w-2xl px-4 py-32">
        <article class="space-y-8">
          <header class="space-y-2">
            <h1 class="font-display text-h1 text-oxford dark:text-oxford-50 font-medium">
              {title}
            </h1>
            <p class="text-body text-oxford-300 dark:text-oxford-200">
              {date}
            </p>
          </header>
          <div class="text-body text-oxford-300 dark:text-oxford-200 space-y-4 [&_h2]:font-display [&_h2]:text-h3 [&_h2]:text-oxford [&_h2]:dark:text-oxford-50 [&_h2]:font-medium [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-h4 [&_h3]:text-oxford [&_h3]:dark:text-oxford-50 [&_h3]:font-medium [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-2 [&_pre]:bg-oxford-100 [&_pre]:dark:bg-oxford-900 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_code]:font-mono [&_code]:text-sm [&_a]:text-oxford [&_a]:dark:text-oxford-50 [&_a]:underline [&_a]:hover:text-oxford-300 [&_a]:dark:hover:text-oxford-200">
            <Content />
          </div>
        </article>
      </div>
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const post = resolveValue(useBlogPost);
  return {
    title: post.frontmatter.title,
    meta: [
      {
        name: "description",
        content: post.frontmatter.description,
      },
    ],
  };
};
