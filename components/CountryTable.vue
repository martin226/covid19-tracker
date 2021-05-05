<template>
    <vue-good-table
        class="px-5 md:px-10 lg:px-16 mb-5"
        :columns="columns"
        :rows="countries"
        :search-options="{
            enabled: true,
            placeholder: 'Search for a country'
        }"
        :pagination-options="{
            enabled: true,
            mode: 'pages',
            perPage: 5
        }"
    />
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: ['countries'],
    data() {
        return {
            columns: [
                {
                    label: 'Country',
                    field: 'Country'
                },
                {
                    label: 'Daily Cases',
                    field: 'NewConfirmed',
                    type: 'number'
                },
                {
                    label: 'Total Cases',
                    field: 'TotalConfirmed',
                    type: 'number'
                },
                {
                    label: 'Daily Recoveries',
                    field: 'NewRecovered',
                    type: 'number'
                },
                {
                    label: 'Total Recoveries',
                    field: 'TotalRecovered',
                    type: 'number'
                },
                {
                    label: 'Daily Deaths',
                    field: 'NewDeaths',
                    type: 'number'
                },
                {
                    label: 'Total Deaths',
                    field: 'TotalDeaths',
                    type: 'number'
                }
            ]
        };
    }
});
</script>
