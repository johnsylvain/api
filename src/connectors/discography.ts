import { gql } from 'apollo-server';
import { db } from '../config/firebase';

export const discographyTypeDefs = gql`
  enum ReleaseType {
    single
    album
    ep
  }

  type Release {
    title: String
    url: String
    type: ReleaseType
    release_date: String
  }
`;

export const discographyConnector = async () => {
  const snapshot = await db.collection("discography").get();
  return snapshot.docs.map(doc => doc.data());
}
