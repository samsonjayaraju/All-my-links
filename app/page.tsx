import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const links = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/samsonjayaraju",
    icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    account: "@codexsamm",
    href: "https://open-in-app.com/o/?u=https%3A%2F%2Fwww.youtube.com%2F%40codexsamm",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    account: "@codexsamm",
    href: "https://www.instagram.com/codexsamm?cplk=MWd2b21lM3ltM3Z5aQ==",
    icon: FaInstagram,
  },
];

export default function Home() {
  return (
    <main>
      <div className="profile">
        <header>
          <img className="avatar" src="/avatar.webp" alt="" width="108" height="108" />
          <h1>Samson</h1>
          <p className="handle">@codexsamm</p>
        </header>
        <nav aria-label="Social profiles">
          <ul>
            {links.map(({ name, account, href, icon: Icon }) => (
              <li key={name}>
                <a href={href}>
                  <span className="platform-icon" data-platform={name}>
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="link-text">
                    <strong>{name}</strong>
                    {account && <span>{account}</span>}
                  </span>
                  <FiArrowUpRight className="arrow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
