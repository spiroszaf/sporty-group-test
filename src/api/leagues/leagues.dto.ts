export interface LeagueDto {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
}

export interface GetAllLeaguesResponse {
  leagues: LeagueDto[];
}

export interface SeasonBadgeDto {
  strSeason: string;
  strBadge: string;
}

export interface GetLeagueBadgesResponse {
  seasons: SeasonBadgeDto[];
}
