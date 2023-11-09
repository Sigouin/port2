import Image from "next/image";
import itsAMeAMario from "../public/assets/images/rsz_13b83a2491.png";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const HARDCODED_NAV = [
  "dashdoor",
  "whackamole",
  "package.json crawler",
  "rating component",
];

export default function Home() {
  return (
    <section className="bg-stella-purple page-wrap p-16">
      <header>
        <span>Hello, I&apos;m</span>
        <h1>Matt Sigouin</h1>
      </header>

      <main className="flex items-center flex-grow py-8">
        <aside>
          <Image
            src={itsAMeAMario}
            alt="Matt and Stella. For real."
            height={600}
            width={438}
          />
        </aside>
        <div className="text-right text-sm">
          <p>
            Hello world! After spending the last 14 years going from a medical
            biller to an Executive manager I decided it was time to change
            course. I decided to pursue my passion for programming. I&apos;ve
            spent the past year learning the ins and outs of JavaScript with the
            help of The Odin Project. I&apos;ve also had the privilege to have a
            1 on 1 mentorship with a senior developer going over coding
            principles and best practices as well as Agile methodologies, issue
            tracking and sprint life cycle with Jira. I&apos;m currently looking
            for a full time position as a software developer to grow and hone my
            skills.
          </p>
          <p>
            When I&apos;m not coding, I enjoy spending time with the family,
            playing video games, or learning something new.
          </p>
        </div>
      </main>

      <nav className="">
        <h2>Projects</h2>
        <div className="flex items-center justify-between w-full">
          <ul className="flex gap-4">
            {HARDCODED_NAV.map((navItem) => (
              <li key={navItem}>{navItem}</li>
            ))}
          </ul>
          <ul className="flex gap-2">
            <li>
              <BiLogoGithub />
            </li>
            <li>
              <BiLogoLinkedin />
            </li>
            <li>
              <MdOutlineAlternateEmail />
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
