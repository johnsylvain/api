import { gql } from "apollo-server";

const data = {
  name: "John Sylvain",
  occupation: "Software Engineer",
  profiles: {
    github: "https://github.com/johnsylvain",
    soundcloud: "https://soundcloud.com/johnsylvain",
    linkedin: "https://linkedin.com/in/johnsylvain",
    keybase: "https://keybase.io/jsyl",
    spotify: "https://open.spotify.com/user/magicjahn"
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

  type Resume {
    name: String
    occupation: String
    profiles: Profiles
  }
`;

export const resumeConnector = () => data;
