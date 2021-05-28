<template>
    <div class="py-20 px-5 sm:px-32 grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        <div class="m-auto">
            <h1 class="mb-24 text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
                Daily <span class="text-blue-800">COVID-19</span> Statistics
            </h1>
            <StatsCard
                title="Daily Cases"
                img="cases"
                :numbers="stats.NewConfirmed"
            />
            <StatsCard
                title="Daily Recoveries"
                img="recoveries"
                :numbers="stats.NewRecovered"
            />
            <StatsCard
                title="Daily Deaths"
                img="deaths"
                :numbers="stats.NewDeaths"
            />
        </div>
        <div>
            <img
                class="w-10/12"
                src="~/assets/img/social_distancing.svg"
                alt=""
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        stats: {
            type: Object,
            default: () => {},
        },
    },
});
</script>
