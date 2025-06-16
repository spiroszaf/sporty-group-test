<template>
  <q-input :maxlength="20" outlined clearable dense debounce="300" v-model="leaguesListStore.filters.search"
    placeholder="Search">
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>
<script setup lang="ts">
import { useLeaguesListStore } from 'src/stores/leagues-list.store';

const leaguesListStore = useLeaguesListStore();
</script>
