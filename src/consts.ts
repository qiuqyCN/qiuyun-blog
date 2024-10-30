import type { Site, Page, Links, Socials, Profile } from "@types"


// Profile
export const PROFILE: Profile = {
  NAME: "Qiuyun",
  DESCRIPTION: "Java Development Engineer & Full Stack Developer & Ultimate Perfectionist.",
}


// Global
export const SITE: Site = {
  TITLE: "秋云博客",
  DESCRIPTION: "欢迎来到秋云博客, 一个 Java 开发者的作品集和博客.",
  AUTHOR: "Qiuyun",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  // { 
  //   TEXT: "Work", 
  //   HREF: "/work", 
  // },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "97208294@qq.com",
    HREF: "mailto:97208294@qq.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Qiuyun",
    HREF: "https://github.com/qiuqyCN"
  },
  // { 
  //   NAME: "LinkedIn",
  //   ICON: "linkedin",
  //   TEXT: "markhorn-dev",
  //   HREF: "https://www.linkedin.com/in/markhorn-dev/",
  // },
  // { 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
]

