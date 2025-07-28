export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Elite SaaS. All rights reserved.</p>
      <div className="social-links">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
    </footer>
  );
}
