import { gql } from "apollo-server";
import { get } from "../util/get";

export const codeStatsTypeDefs = gql`
  type CodeStatsLanguage {
    name: String
    percent: Float
  }

  type CodeStatsGraph {
    date: String
    time: String
    value: Float
  }

  type CodeStatsTime {
    hour: Int
    minute: Int
    seconds: Float
  }

  type CodeStats {
    time: CodeStatsTime
    graph: [CodeStatsGraph]
    languages: [CodeStatsLanguage]
  }
`;

function convert(
  seconds: number
): { hour: number; minute: number; seconds: number } {
  let hour: number;
  let minute: number;

  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;

  return {
    hour,
    minute,
    seconds
  };
}

const baseUrl = "https://wakatime.com/share/@johnsylvain/";

const getTime = async () => {
  const response = await get(
    `${baseUrl}092bac11-3129-45ed-91f8-c1770edfefe6.json`
  );
  const seconds: number = response.data.reduce(
    (acc, cur) => acc + cur.grand_total.total_seconds,
    0
  );
  return {
    time: convert(seconds),
    graph: response.data
      .map(i => ({
        date: i.range.date,
        time: i.grand_total.digital,
        value: i.grand_total.total_seconds
      }))
      .reverse()
  };
};

const getLanguages = async () => {
  const response = await get(
    `${baseUrl}e13bf9c6-a046-4728-acde-cddb46881a04.json`
  );
  return response.data.filter(i => i.name !== "Other").splice(0, 3);
};

const CodeStats = {
  get: async () => {
    const [time, languages] = await Promise.all([getTime(), getLanguages()]);
    return {
      time: time.time,
      graph: time.graph,
      languages
    };
  }
};

export const codeStatsConnector = async () => await CodeStats.get();
