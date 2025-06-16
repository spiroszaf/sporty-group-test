<template>
  <q-item-section>
    <q-item-label>{{ row.strLeague }}</q-item-label>
    <q-item-label caption>{{ row.strLeagueAlternate }}</q-item-label>
  </q-item-section>
</template>
<script setup lang="ts">
import type { LeagueDto } from 'src/api/leagues/leagues.dto';

defineProps<{
  row: LeagueDto
}>();

</script>
