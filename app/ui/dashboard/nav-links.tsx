"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";

// https://github.com/Sigouin/dashdoor
// <a href="https://linkedin.com/in/matt-sigouin" target="_blank" rel="noreferrer">
// <a href="https://github.com/Sigouin" target="_blank" rel="noreferrer">

const links = [
  { name: "DashDoor", href: "/dashboard/dashdoor" },
  { name: "Rating Component", href: "/dashboard/ratingcomp" },
  { name: "Whack-A-Mole", href: "/dashboard/whackamole" },
  { name: "package.JSON Crawler", href: "/dashboard/jsoncrawler" },
];

const socialLinks = [];
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkName = link.name;
        return (
          <Link key={link.name} href={link.href}>
            <LinkName />
          </Link>
        );
      })}
    </>
  );
}
