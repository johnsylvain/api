import { gql } from "apollo-server";
import { get } from "../util/get";

export const soundCloudTypeDefs = gql`
  type DiscographyUser {
    id: Int
    kind: String
    permalink: String
    username: String
    last_modified: String
    uri: String
    permalink_url: String
    avatar_url: String
  }

  type DiscographyTrack {
    kind: String
    id: Int
    created_at: String
    user_id: Int
    duration: Int
    commentable: Boolean
    state: String
    original_content_size: Int
    last_modified: String
    sharing: String
    tag_list: String
    permalink: String
    streamable: Boolean
    embeddable_by: String
    downloadable: Boolean
    purchase_url: String
    label_id: Int
    purchase_title: String
    genre: String
    title: String
    description: String
    release_year: Int
    release_month: Int
    release_day: Int
    original_format: String
    license: String
    uri: String
    user: DiscographyUser
    permalink_url: String
    artwork_url: String
    waveform_url: String
    stream_url: String
    playback_count: Int
    download_count: Int
    favoritings_count: Int
    comment_count: Int
  }

  type DiscographyItem {
    duration: Int
    release_day: Int
    permalink_url: String
    genre: String
    permalink: String
    release_month: Int
    description: String
    uri: String
    release_year: Int
    track_count: Int
    user_id: Int
    last_modified: String
    license: String
    tracks: [DiscographyTrack]
    playlist_type: String
    id: Int
    downloadable: Boolean
    sharing: String
    created_at: String
    kind: String
    title: String
    type: String
    artwork_url: String
    streamable: Boolean
  }
`;

export const soundCloudConnector = async () => {
  const response = await get(
    `https://api.soundcloud.com/users/147843669/playlists?client_id=${process.env.SOUNDCLOUD_API_KEY}`
  );

  return response;
};
