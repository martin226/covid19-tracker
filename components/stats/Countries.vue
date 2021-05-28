<template>
    <div class="m-auto px-5 text-center">
        <h1 class="mb-12 text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
            Country <span class="text-blue-800">COVID-19</span> Statistics
        </h1>
        <CountryTable :countries="countries" />
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
});
</script>
