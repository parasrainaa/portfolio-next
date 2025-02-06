export default function Work() {
  return (
    <main>
      <h1 className="text-2xl font-medium mb-8">Work</h1>
      <div className="prose prose-invert">
        <p className="text-muted-foreground mb-8">
          I author, maintain or co-maintain a few open-source projects
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-lg font-medium mb-2">MathDraw</h2>
            <p className="text-muted-foreground mb-2">
              A mathematical recognition application that processes hand-drawn expressions through Google's Gemini AI.
            </p>
            <a href="https://ai-calc-fe-sjgt.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Space Bar</h2>
            <p className="text-muted-foreground mb-2">
              A space-themed typing game with interactive gameplay and dynamic content generation.
            </p>
            <a href="https://space-bar-main.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">JunoPad</h2>
            <p className="text-muted-foreground mb-2">
              Real-time collaborative notes application with authentication and online publishing.
            </p>
            <a href="https://juno-pad.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Notion Clone</h2>
            <p className="text-muted-foreground mb-2">
              A full-stack Notion-like workspace with real-time collaboration and rich text editing.
            </p>
            <a href="https://notion-clone-rho-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Genius AI</h2>
            <p className="text-muted-foreground mb-2">
              AI SaaS platform offering conversation, image, video, and music generation capabilities.
            </p>
            <a href="https://genius-ai-rho.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 