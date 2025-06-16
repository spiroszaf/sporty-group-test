<template>
  <q-table flat :bordered="isSmallScreen" :grid="isSmallScreen" :rows="leaguesStore.leaguesList" :columns="columns"
    :pagination="initialPagination" row-key="league" @row-click="(event, row) => $emit('row-click', row)">
    <template v-slot:body-cell-league="props">
      <q-td key="league" :props="props">
        <LeagueNameCell :row="props.row" />
      </q-td>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import type { QTableColumn, QTableProps } from 'quasar';
import type { LeagueDto } from 'src/api/leagues/leagues.dto';
import { useLeaguesListStore } from 'src/stores/leagues-list.store';
import LeagueNameCell from './LeagueNameCell.vue';
import { useQuasar } from 'quasar';
import { computed } from 'vue';

defineEmits<{
  (e: 'row-click', row: LeagueDto): void;
}>();

const q = useQuasar();
const leaguesStore = useLeaguesListStore();

const isSmallScreen = computed(() => q.screen.lt.sm);

const initialPagination: QTableProps['pagination'] = {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 20
}

const columns: Array<QTableColumn<LeagueDto>> = [
  {
    name: 'league',
    label: 'League',
    align: 'left',
    field: row => row.strLeague,
  },
  {
    name: 'sport-type',
    label: 'Sport Type',
    align: 'left',
    field: row => row.strSport,
  },
]


</script>
