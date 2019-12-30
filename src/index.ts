require("dotenv").config();
import { ApolloServer, gql } from "apollo-server";
import { resumeTypeDefs, resumeConnector } from "./connectors/resume";
import { lastFmTypeDefs, lastFmConnector } from "./connectors/last-fm";
import {
  soundCloudConnector,
  soundCloudTypeDefs
} from "./connectors/soundcloud";
import { codeStatsTypeDefs, codeStatsConnector } from "./connectors/code-stats";

const typeDefs = gql`
  type Activity {
    music: [LastFmStats]
    code: CodeStats
  }

  type Query {
    resume: Resume
    activity: Activity
    discography: [DiscographyItem]
  }
`;

const resolvers = {
  Query: {
    resume: resumeConnector,
    activity: () => ({
      music: lastFmConnector,
      code: codeStatsConnector
    }),
    discography: soundCloudConnector
  }
};

const server = new ApolloServer({
  typeDefs: [
    typeDefs,
    resumeTypeDefs,
    lastFmTypeDefs,
    soundCloudTypeDefs,
    codeStatsTypeDefs
  ],
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server listening on port ${url}`);
});
