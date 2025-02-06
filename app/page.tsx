export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-medium mb-8">Ashwani Paras</h1>
      <div className="prose prose-invert">
        <p className="text-muted-foreground mb-4">
          A Software Engineer based in India, making software with{" "}
          <span className="text-foreground">React</span> and{" "}
          <span className="text-foreground">TypeScript</span>
        </p>
        <p className="text-muted-foreground">
          I am currently working on full-stack web applications, building tools for other developers to make great user interfaces.
        </p>
        <p className="text-muted-foreground mt-4">
          You can read more about me on the{" "}
          <a href="/about" className="text-[#63B3ED]">about</a> page.
        </p>
      </div>
    </main>
  );
}
