<template>
    <div class="py-20 px-5 sm:px-32 grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        <div>
            <img
                class="w-10/12 hidden lg:block"
                src="~/assets/img/medical_research.svg"
                alt=""
            />
        </div>
        <div class="m-auto">
            <h1 class="mb-24 text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
                All-Time <span class="text-blue-800">COVID-19</span> Statistics
            </h1>
            <StatsCard
                title="Total Cases"
                img="cases"
                :numbers="stats.TotalConfirmed"
            />
            <StatsCard
                title="Total Recoveries"
                img="recoveries"
                :numbers="stats.TotalRecovered"
            />
            <StatsCard
                title="Total Deaths"
                img="deaths"
                :numbers="stats.TotalDeaths"
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
