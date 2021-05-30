<template>
    <div>
        <vue-good-table
            class="px-5 md:px-10 lg:px-16 mb-5 block dark:hidden"
            :columns="columns"
            :rows="countries"
            theme="polar-bear"
            :search-options="{
                enabled: true,
                placeholder: 'Search for a country',
            }"
            :pagination-options="{
                enabled: true,
                mode: 'pages',
            }"
        />
        <vue-good-table
            class="px-5 md:px-10 lg:px-16 mb-5 hidden dark:block"
            :columns="columns"
            :rows="countries"
            theme="nocturnal"
            :search-options="{
                enabled: true,
                placeholder: 'Search for a country',
            }"
            :pagination-options="{
                enabled: true,
                mode: 'pages',
            }"
        />
    </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        countries: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            columns: [
                {
                    label: 'Country',
                    field: 'Country',
                },
                {
                    label: 'Daily Cases',
                    field: 'NewConfirmed',
                    type: 'number',
                    formatFn: this.formatNumber,
                },
                {
                    label: 'Total Cases',
                    field: 'TotalConfirmed',
                    type: 'number',
                    formatFn: this.formatNumber,
                },
                {
                    label: 'Daily Recoveries',
                    field: 'NewRecovered',
                    type: 'number',
                    formatFn: this.formatNumber,
                },
                {
                    label: 'Total Recoveries',
                    field: 'TotalRecovered',
                    type: 'number',
                    formatFn: this.formatNumber,
                },
                {
                    label: 'Daily Deaths',
                    field: 'NewDeaths',
                    type: 'number',
                    formatFn: this.formatNumber,
                },
                {
                    label: 'Total Deaths',
                    field: 'TotalDeaths',
                    type: 'number',
                    formatFn: this.formatNumber,
                },
            ],
        };
    },
});
</script>
