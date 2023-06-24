import { SiVelog, SiNotion } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import ContactForm from "@/components/ContactForm";

const LINKS = [
  { icon: <AiFillGithub />, url: process.env.REACT_APP_GITHUB_URL },
  { icon: <SiVelog />, url: process.env.REACT_APP_VELOG_URL },
  { icon: <SiNotion />, url: process.env.REACT_APP_NOTION_RESUME },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>jangyeun0927@naver.com</p>
      <ul className="flex gap-6 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Send me an email</h2>
      <ContactForm />
    </section>
  );
}
