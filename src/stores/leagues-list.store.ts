import { useQuery } from '@tanstack/vue-query';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { getAllLeagues } from 'src/api/leagues/leagues.api';
import { computed } from 'vue';

const _5_MINUTES = 1000 * 60 * 5;

export const useLeaguesListStore = defineStore('leagues-list', () => {

  const { data: leaguesData } = useQuery({
    queryKey: ['leagues', 'all'],
    queryFn: getAllLeagues,
    staleTime: _5_MINUTES
  })

  const leaguesList = computed(() => leaguesData.value?.data.leagues ?? []);

  return {
    leaguesList,
  }
});


// Boilerplate code that enables hot module replacement (HMR) for the store
// See: https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLeaguesListStore, import.meta.hot));
}
