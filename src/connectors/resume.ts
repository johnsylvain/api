import { gql } from 'apollo-server';
import { db } from '../config/firebase';

const ref = db.collection('resume-data').doc('ZZDyN5iMsYJbPhbi6Tgk');

export const resumeTypeDefs = gql`
  type Profiles {
    github: String
    soundcloud: String
    bandcamp: String
    linkedin: String
    keybase: String
    spotify: String
    blog: String
    discography: String
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
    bio: [String]
    profiles: Profiles
    businessCard: String
    education: Education
    experience: [Experience]
    projects: [Project]
    skills: Skills
  }
`;

export const resumeConnector = async () => await (await ref.get()).data();
