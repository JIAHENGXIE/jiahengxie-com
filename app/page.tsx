export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
        <h1 className="text-5xl font-semibold tracking-tight">Jiaheng Xie </h1>

        <p className="mt-4 text-lg leading-relaxed text-black/70">
          Massachusetts-licensed architect based in Boston.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/jiaheng-xie-53a073157"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/20 px-4 py-2 text-sm hover:border-black/40"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/jiaheng_xie"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/20 px-4 py-2 text-sm hover:border-black/40"
          >
            Instagram
          </a>
          <a
            href="mailto:YOUR_EMAIL"
            className="rounded-full border border-black/20 px-4 py-2 text-sm hover:border-black/40"
          >
            Email
          </a>
        </div>

        <footer className="mt-16 text-xs text-black/50">
          © {new Date().getFullYear()} Jiaheng Xie
        </footer>
      </div>
    </main>
  );
}