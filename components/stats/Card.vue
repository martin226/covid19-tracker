<template>
    <div
        class="
            my-16
            mx-auto
            relative
            bg-white
            py-6
            px-6
            rounded-3xl
            my-4
            shadow-2xl
        "
    >
        <div
            class="
                text-white
                flex
                items-center
                absolute
                rounded-full
                py-4
                px-4
                shadow-2xl
                bg-blue-700
                left-4
                -top-6
            "
        >
            <img
                class="h-8 w-8"
                :src="require(`~/assets/img/${img}.svg`)"
                alt=""
            />
        </div>
        <div class="mt-8">
            <p class="text-xl lg:text-3xl font-semibold my-2">{{ title }}</p>
            <p class="text-xl lg:text-3xl my-2">{{ formatNumber(numbers) }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        title: {
            type: String,
            default: '',
        },
        numbers: {
            type: Number,
            default: 0,
        },
        img: {
            type: String,
            default: '',
        },
    },
});
</script>
