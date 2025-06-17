import { useQuery } from "@tanstack/vue-query";
import { getLeagueSeasonBadges } from "src/api/leagues/leagues.api";
import { computed } from "vue";

const _5_MINUTES = 1000 * 60 * 5;

export function useSeasonBadges(leagueId: string) {

  const { data: seasons, isError, isLoading } = useQuery({
    queryKey: ['league-season-badges', leagueId],
    queryFn: () => getLeagueSeasonBadges(leagueId),
    staleTime: _5_MINUTES,
  })

  return computed(() => ({
    seasons: seasons.value?.data.seasons || [],
    isError: isError.value,
    isLoading: isLoading.value,
  }));

}
