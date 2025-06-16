<template>
  <q-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <q-card class="q-pa-sm">
      <q-card-section>
        <h2 class="text-h6 q-ma-none">{{ league.strLeague }}</h2>
        <h3 class="text-caption q-ma-none">{{ league.strLeagueAlternate }}</h3>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-mb-sm">Season {{ badge?.strSeason }}</div>
        <q-img v-if="badge && badge.strBadge" :src="badge.strBadge" :alt="`Badge for ${league.strLeague}`"
          style="max-width: 100%; max-height: 200px; object-fit: contain;" />
        <p v-else>No badge available for this league.</p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import type { LeagueDto } from 'src/api/leagues/leagues.dto';
import { useSeasonBadges } from 'src/composables/leagues/season-badges';
import { computed } from 'vue';

defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const props = defineProps<{
  modelValue: boolean;
  league: LeagueDto
}>();

const seasonBadges = useSeasonBadges(props.league.idLeague);

const badge = computed(() => seasonBadges.value.at(0));



</script>
