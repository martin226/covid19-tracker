<template>
    <div class="text-center h-full m-auto align-middle">
        <font-awesome-icon
            class="text-9xl text-red-300 my-10"
            :icon="['fas', 'exclamation-triangle']"
        />
        <p class="text-2xl">{{ error }}</p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        error: {
            type: String,
            default: 'An unknown error occurred.'
        }
    }
});
</script>
