<template>
  <q-page padding>
    <h1 class="text-h4">Leagues</h1>
    <p>
      Find leagues you are interested in. Click on a league to view its details.
    </p>
    <TableFilters />
    <LeaguesTable @row-click="onRowClick($event)" />
    <BadgeDialog v-if="showBadgeDialog" v-model="showBadgeDialog" :league="currentLeague!" />
  </q-page>
</template>

<script setup lang="ts">
import LeaguesTable from 'components/leagues-list/table/LeaguesTable.vue';
import type { LeagueDto } from 'src/api/leagues/leagues.dto';
import TableFilters from 'src/components/leagues-list/filters/TableFilters.vue';
import BadgeDialog from 'src/components/leagues-list/table/BadgeDialog.vue';
import { useLeaguesListStore } from 'src/stores/leagues-list.store';
import { onMounted, ref } from 'vue';

const showBadgeDialog = ref(false);
const currentLeague = ref<LeagueDto | null>(null);
const leaguesListStore = useLeaguesListStore();

onMounted(() => {
  leaguesListStore.loadFiltersFromRoute();
});

function onRowClick(row: LeagueDto) {
  currentLeague.value = row;
  showBadgeDialog.value = true;
}

</script>
