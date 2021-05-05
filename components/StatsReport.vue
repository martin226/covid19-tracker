<template>
    <div class="px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="py-10 px-4 bg-white shadow-lg rounded-lg">
            <h2 class="text-3xl mb-3">
                Confirmed
                <font-awesome-icon
                    class="text-blue-500"
                    :icon="['fas', 'signal']"
                ></font-awesome-icon>
            </h2>
            <p v-if="daily" class="text-xl">{{ format(stats.NewConfirmed) }}</p>
            <p v-else class="text-xl">{{ format(stats.TotalConfirmed) }}</p>
        </div>
        <div class="py-10 px-4 bg-white shadow-lg rounded-lg">
            <h2 class="text-3xl mb-3">
                Recovered
                <font-awesome-icon
                    class="text-red-500"
                    :icon="['fas', 'heartbeat']"
                ></font-awesome-icon>
            </h2>
            <p v-if="daily" class="text-xl">{{ format(stats.NewRecovered) }}</p>
            <p v-else class="text-xl">{{ format(stats.TotalRecovered) }}</p>
        </div>
        <div class="py-10 px-4 bg-white shadow-lg rounded-lg">
            <h2 class="text-3xl mb-3">
                Deaths
                <font-awesome-icon
                    class="text-green-600"
                    :icon="['fas', 'skull']"
                ></font-awesome-icon>
            </h2>
            <p v-if="daily" class="text-xl">{{ format(stats.NewDeaths) }}</p>
            <p v-else class="text-xl">{{ format(stats.TotalDeaths) }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: ['stats', 'daily'],
    methods: {
        format: function(x: number): string {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
});
</script>
