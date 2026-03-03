import Link from "next/link";

type Props = {
  name: string;
  subname?: string;
  tagline: string;
  cta: { linkedin: string; instagram: string; email: string };
  links: { linkedin: string; instagram: string; email: string };
  switchLabel: string;
  switchHref: string;
};

export function Landing({
  name,
  subname,
  tagline,
  cta,
  links,
  switchLabel,
  switchHref,
}: Props) {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
        <div className="mb-10 flex items-center justify-end">
          <Link
            href={switchHref}
            className="text-sm text-black/60 hover:text-black"
          >
            {switchLabel}
          </Link>
        </div>

        <h1 className="text-5xl font-semibold tracking-tight">
        {name}
        {subname ? (
            <span className="ml-3 text-2xl font-normal tracking-normal text-black/55">
            · {subname}
            </span>
        ) : null}
        </h1>

        <p className="mt-4 min-h-[31px] text-lg leading-relaxed text-black/70">{tagline}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/20 px-4 py-2 text-sm hover:border-black/40"
          >
            {cta.linkedin}
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/20 px-4 py-2 text-sm hover:border-black/40"
          >
            {cta.instagram}
          </a>
          <a
            href={links.email}
            className="rounded-full border border-black/20 px-4 py-2 text-sm hover:border-black/40"
          >
            {cta.email}
          </a>
        </div>

        <footer className="mt-16 text-xs text-black/50">
          © {new Date().getFullYear()} {name}
        </footer>
      </div>
    </main>
  );
}