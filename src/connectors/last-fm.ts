import { get } from "../util/get";
import { gql } from "apollo-server";

const LastFm = {
  get: async () => {
    const json = await get(
      "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=johnsylvain&api_key=46427d6edd6b15adba1941374daff3f3&format=json&period=7day"
    );
    const albums = json.topalbums.album
      .map(album => ({
        image: album.image[album.image.length - 1]["#text"],
        url: album.url,
        artist: album.artist.name,
        album: album.name
      }))
      .filter(album => album.image)
      .slice(0, 7);
    return albums;
  }
};

export const lastFmTypeDefs = gql`
  type LastFmStats {
    image: String
    url: String
    artist: String
    album: String
  }
`;

export const lastFmConnector = async () => await LastFm.get();
