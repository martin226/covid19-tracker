<template>
    <div class="mb-5 px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="py-10 px-4 bg-white shadow-lg rounded-lg">
            <h2 class="text-3xl mb-3">
                Confirmed
                <font-awesome-icon
                    class="text-blue-500"
                    :icon="['fas', 'signal']"
                ></font-awesome-icon>
            </h2>
            <p v-if="daily" class="text-xl">
                {{ formatNumber(stats.NewConfirmed) }}
            </p>
            <p v-else class="text-xl">
                {{ formatNumber(stats.TotalConfirmed) }}
            </p>
        </div>
        <div class="py-10 px-4 bg-white shadow-lg rounded-lg">
            <h2 class="text-3xl mb-3">
                Recovered
                <font-awesome-icon
                    class="text-red-500"
                    :icon="['fas', 'heartbeat']"
                ></font-awesome-icon>
            </h2>
            <p v-if="daily" class="text-xl">
                {{ formatNumber(stats.NewRecovered) }}
            </p>
            <p v-else class="text-xl">
                {{ formatNumber(stats.TotalRecovered) }}
            </p>
        </div>
        <div class="py-10 px-4 bg-white shadow-lg rounded-lg">
            <h2 class="text-3xl mb-3">
                Deaths
                <font-awesome-icon
                    class="text-green-600"
                    :icon="['fas', 'skull']"
                ></font-awesome-icon>
            </h2>
            <p v-if="daily" class="text-xl">
                {{ formatNumber(stats.NewDeaths) }}
            </p>
            <p v-else class="text-xl">{{ formatNumber(stats.TotalDeaths) }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        stats: {
            type: Object
        },
        daily: {
            type: Boolean
        }
    }
});
</script>
