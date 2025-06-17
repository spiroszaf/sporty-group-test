import { useQuery } from '@tanstack/vue-query';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { getAllLeagues } from 'src/api/leagues/leagues.api';
import { computed, reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const _5_MINUTES = 1000 * 60 * 5;

export const useLeaguesListStore = defineStore('leagues-list', () => {

  const route = useRoute();
  const router = useRouter();

  const filters = reactive({
    search: route.query.search as string | undefined,
    sportType: route.query.sportType as string | undefined,
  })

  // Persit filters in the URL query parameters
  watch(filters, async (newFilters) => {
    await router.replace({
      query: {
        ...route.query,
        search: newFilters.search || undefined,
        sportType: newFilters.sportType || undefined,
      },
    });
  },
    { deep: true }
  );

  const { data: leaguesData, isError: isQueryError, error: queryError, isFetching: isLeaquesFetching, refetch: refetchLeagues } = useQuery({
    queryKey: ['leagues', 'all'],
    queryFn: getAllLeagues,
    staleTime: _5_MINUTES
  })

  const leaguesList = computed(() => (leaguesData.value?.data.leagues ?? []));
  const getLeaguesError = computed(() => (isQueryError.value ? queryError.value : null));

  const filteredLeaguesList = computed(() => leaguesList.value
    .filter((x) => filters.search ? x.strLeague.toLowerCase().includes(filters.search.toLowerCase()) : true)
    .filter((x) => filters.sportType ? x.strSport.toLowerCase().includes(filters.sportType.toLowerCase()) : true)
  );


  const sportTypes = computed(() => {
    const types = new Set<string>();
    leaguesList.value.forEach((league) => {
      if (league.strSport) {
        types.add(league.strSport);
      }
    });
    return Array.from(types);
  });

  function loadFiltersFromRoute() {
    filters.search = route.query.search as string | undefined;
    filters.sportType = route.query.sportType as string | undefined;
  }

  return {
    leaguesList,
    filteredLeaguesList,
    filters,
    sportTypes,
    loadFiltersFromRoute,
    getLeaguesError,
    isLeaquesFetching,
    refetchLeagues
  }
});


// Boilerplate code that enables hot module replacement (HMR) for the store
// See: https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLeaguesListStore, import.meta.hot));
}
