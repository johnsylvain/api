import { gql } from "apollo-server";

const data = {
  name: "John Sylvain",
  occupation: "Software Engineer",
  businessCard: "npx johnsylvain",
  profiles: {
    github: "https://github.com/johnsylvain",
    soundcloud: "https://soundcloud.com/johnsylvain",
    linkedin: "https://linkedin.com/in/johnsylvain",
    keybase: "https://keybase.io/jsyl",
    spotify: "https://open.spotify.com/user/magicjahn"
  },
  education: {
    school: "Purdue University",
    graduationDate: "May 2017",
    study: {
      major: "Computer Graphics Technology",
      minor: "Computer Information Technology"
    }
  },
  experience: [
    {
      company: "Rocketmiles",
      position: "Software Engineer",
      date: "October 2017 - present",
      description: [
        "Led the process of migrating legacy AngularJS applications to React and TypeScript",
        "Architected profitable features for the company's flagship white-label product",
        "Constructed and maintained an internal, cross-product UI component library",
        "Created insightful A/B tests, leading to increased conversions"
      ]
    },
    {
      company: "USAA",
      position: "Software Developer",
      date: "Summer 2016",
      description: [
        "Worked on an agile team primarily focused on enterprise applications",
        "Developed a Restful application to manage business rules"
      ]
    },
    {
      company: "Blast Radius",
      position: "Web Developer",
      date: "Summer 2015"
    }
  ],
  projects: [
    {
      title: "Slack Colors",
      description: "AI Slack themes",
      links: {
        demo: "https://slackcolors.com",
        github: "http://github.com/johnsylvain/slack-colors"
      }
    },
    {
      title: "Popcover",
      description: "Spotify Playlist Creator",
      links: {
        demo: "https://popcover.pro",
        github: "http://github.com/johnsylvain/pop-cover"
      }
    },
    {
      title: "Streamit",
      description: "Reddit Video streamer",
      links: {
        demo: "https://streamit.space",
        github: "http://github.com/johnsylvain/streamit"
      }
    },
    {
      title: "Kobra",
      description: "Minimal JavaScript Framework",
      links: {
        docs: "https://kobra.js.org",
        github: "https://github.com/johnsylvain/kobra"
      }
    }
  ],
  skills: {
    languages: [
      "JavaScript (esnext)",
      "TypeScript",
      "CSS (Sass, Less)",
      "HTML"
    ],
    frameworksAndLibraries: ["React", "Redux", "Express", "Node", "Angular"],
    webTooling: ["git", "webpack", "gulp", "bash"],
    database: ["GraphQL", "SQL", "MongoDB", "Mongoose"]
  }
};

export const resumeTypeDefs = gql`
  type Profiles {
    github: String
    soundcloud: String
    linkedin: String
    keybase: String
    spotify: String
  }

  type EducationStudy {
    major: String
    minor: String
  }

  type Education {
    school: String
    graduationDate: String
    study: EducationStudy
  }

  type Experience {
    company: String
    position: String
    date: String
    description: [String]
  }

  type Project {
    title: String
    description: String
    links: ProjectLinks
  }

  type ProjectLinks {
    github: String
    demo: String
    docs: String
  }

  type Skills {
    languages: [String]
    frameworksAndLibraries: [String]
    webTooling: [String]
    database: [String]
  }

  type Resume {
    name: String
    occupation: String
    profiles: Profiles
    businessCard: String
    education: Education
    experience: [Experience]
    projects: [Project]
    skills: Skills
  }
`;

export const resumeConnector = () => data;
