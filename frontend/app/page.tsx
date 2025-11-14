export default function Home() {
  return (
    <section>
      <h1 style={{ margin: "1.25rem 0" }}>Home Feed</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1rem",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <article
            key={i}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: "1rem",
              background: "#fff",
            }}
          >
            <h3 style={{ marginBottom: ".5rem" }}>Example Post {i + 1}</h3>
            <p style={{ color: "#6b7280" }}>
              A short excerpt to demonstrate the grid and layout.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
