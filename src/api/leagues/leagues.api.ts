import { apiClient } from "boot/api";
import type { GetAllLeaguesResponse, GetLeagueBadgesResponse } from "./leagues.dto";
import type { AxiosResponse } from "axios";

export async function getAllLeagues(): Promise<AxiosResponse<GetAllLeaguesResponse>> {
  return apiClient.get<GetAllLeaguesResponse>("/all_leagues.php")
}

export async function getLeagueSeasonBadges(idLeague: string): Promise<AxiosResponse<GetLeagueBadgesResponse>> {
  return apiClient.get<GetLeagueBadgesResponse>("/search_all_seasons.php", {
    params: {
      badge: 1,
      id: idLeague
    }
  })
}
