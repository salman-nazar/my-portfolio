import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "unique-style-store",
    title: "UniqueStyle Store",
    description: "A full-stack e-commerce platform built end-to-end with Next.js, Node.js, and Python.",
    longDescription:
      "An e-commerce web application handling product listings, cart, and checkout flows, deployed live on Vercel with a Node.js/Python backend.",
    stack: ["Next.js", "Node.js", "Python"],
    image: "/images/projects/unique-style-store.png",
    liveUrl: "https://uniquestyle-store.vercel.app",
    githubUrl: "https://github.com/salman-nazar/unique-style-backend",
    featured: true,
  },
];