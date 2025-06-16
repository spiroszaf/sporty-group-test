import { useQuery } from '@tanstack/vue-query'
import * as api from './leagues.api'

export function useQueryAllLeagues(staleTime: number = 0) {
  return useQuery({
    queryKey: ['leagues', 'all'],
    queryFn: () => api.getAllLeagues(),
    staleTime,
  })
}

export function useQueryLeagueSeasonBadges(idLeague: string, staleTime: number = 0) {
  return useQuery({
    queryKey: ['league-season-badges', idLeague],
    queryFn: () => api.getLeagueSeasonBadges(idLeague),
    staleTime,
  })
}
