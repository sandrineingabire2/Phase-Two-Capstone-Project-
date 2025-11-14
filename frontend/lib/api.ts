// Placeholder API client; replace with real endpoints or mock server
export async function fetchExamplePosts() {
  return Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Example Post ${i + 1}`,
    excerpt: "A short excerpt to demonstrate the grid and layout.",
  }));
}