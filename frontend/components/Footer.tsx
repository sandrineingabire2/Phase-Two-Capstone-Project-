export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} MediumLite — Built with Next.js
        </p>
      </div>
    </footer>
  );
}