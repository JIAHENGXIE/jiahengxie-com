import { Landing } from "../_components/Landing";
import { homeCopy } from "../_content/home";

export default function Page() {
  const copy = homeCopy.zh;

  return (
    <Landing
      name="Jiaheng Xie"
      subname="谢 嘉 衡"
      tagline={copy.tagline}
      cta={copy.cta}
      switchLabel={copy.switchLabel}
      switchHref={copy.switchHref}
      links={{
        linkedin: "https://www.linkedin.com/in/jiaheng-xie-53a073157",
        instagram: "https://www.instagram.com/jiaheng_xie",
        email: "mailto:YOUR_EMAIL",
      }}
    />
  );
}