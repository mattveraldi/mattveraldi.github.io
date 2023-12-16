import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://mattveraldi.github.io/", // replace this with your deployed domain
  author: "Matteo Veraldi",
  desc: "My microblogging website",
  title: "Matteo Veraldi",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/mattveraldi",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/matteo-veraldi",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
];
