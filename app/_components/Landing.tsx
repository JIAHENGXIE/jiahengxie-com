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
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-5 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex items-center justify-end sm:mb-10">
          <Link
            href={switchHref}
            className="text-sm text-black/60 hover:text-black"
          >
            {switchLabel}
          </Link>
        </div>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {/* name：手机端块级、桌面端行内 */}
          <span className="block sm:inline">{name}</span>

          {/* Mobile：永远占一行高度（没 subname 就用空格占位） */}
          <span className="mt-2 block text-xl font-normal tracking-normal text-black/55 sm:hidden">
            {subname ? `· ${subname}` : "\u00A0"}
          </span>

          {/* Desktop：同一行显示 subname（仅当存在） */}
          {subname ? (
            <span className="ml-3 hidden text-2xl font-normal tracking-normal text-black/55 sm:inline">
              · {subname}
            </span>
          ) : null}
        </h1>

        <p className="mt-4 min-h-[48px] text-base leading-relaxed text-black/70 sm:min-h-[56px] sm:text-lg">{tagline}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/20 px-4 py-2.5 text-sm hover:border-black/40 sm:py-2"
          >
            {cta.linkedin}
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/20 px-4 py-2.5 text-sm hover:border-black/40 sm:py-2"
          >
            {cta.instagram}
          </a>
          <a
            href={links.email}
            className="rounded-full border border-black/20 px-4 py-2.5 text-sm hover:border-black/40 sm:py-2"
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