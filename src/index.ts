import { ApolloServer, gql } from "apollo-server";
import { resumeTypeDefs, resumeConnector } from "./connectors/resume";
import { lastFmTypeDefs, lastFmConnector } from "./connectors/last-fm";
import {
  soundCloudConnector,
  soundCloudTypeDefs
} from "./connectors/soundcloud";

const typeDefs = gql`
  type Query {
    resume: Resume
    lastfm: [LastFmStats]
    soundcloud: [DiscographyItem]
  }
`;

const resolvers = {
  Query: {
    resume: resumeConnector,
    lastfm: lastFmConnector,
    soundcloud: soundCloudConnector
  }
};

const server = new ApolloServer({
  typeDefs: [typeDefs, resumeTypeDefs, lastFmTypeDefs, soundCloudTypeDefs],
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server listening on port ${url}`);
});
