<template>
  <q-select clearable map-options emit-value outlined dense label="Sport type"
    v-model="leaguesListStore.filters.sportType" :options="options" />


</template>
<script setup lang="ts">
import { useLeaguesListStore } from 'src/stores/leagues-list.store';
import { computed } from 'vue';

const leaguesListStore = useLeaguesListStore();

const options = computed(() => {
  return leaguesListStore.sportTypes
    .concat() // Create a shallow copy to avoid mutating the original array
    .sort((a, b) => a.localeCompare(b)) // Sort sport types alphabetically
    .map(sportType => ({
      label: sportType,
      value: sportType
    })
    );
});
</script>
