export default function About() {
  return (
    <main>
      <h1 className="text-2xl font-medium mb-8">About</h1>
      <div className="prose prose-invert space-y-4">
        <p className="text-muted-foreground">
          Hi, I'm Ashwani. A software engineer based in India, with a focus on web technologies. My
          work bridges functional programming and web technologies, focusing on creating better developer
          tools and experiences with React and TypeScript.
        </p>

        <p className="text-muted-foreground">
          I believe clarity in the design, a sound architecture, and the evolution of software are the
          foundation of building powerful and maintainable software. I'm building developer tooling while maintaining several Open Source projects.
        </p>

        <p className="text-muted-foreground">
          Want to chat? DM me on{" "}
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          {" "}or{" "}
          <a href="https://github.com/ParasRaina01" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </main>
  );
} 