interface ProjectData {
  name: string;
  content: string;
  alignImageLeft: boolean;
  images: Project.Images;
  links: Project.Links;
  techStack: Project.TechStack;
}

declare namespace Project {
  interface Images {
    original: StaticImageData;
    clip?: StaticImageData;
    minified: StaticImageData;
  }
  interface Links {
    github: string;
    demoUrl?: string;
  }
  interface TechStack {
    frontend: string[];
    backend: string[];
  }
}
