<template>
    <nav
        class="
            sm:flex
            mx-auto
            text-center
            sm:flex-row
            sm:justify-between
            py-8
            sm:px-6
            sm:items-baseline
            w-10/12
        "
    >
        <div>
            <NuxtLink to="/" class="font-bold text-3xl md:text-4xl">
                <font-awesome-icon :icon="['fas', 'shield-virus']" />
                COVID-19 Tracker</NuxtLink
            >
        </div>
    </nav>
</template>
