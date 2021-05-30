module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            center: true,
        },
    },
    variants: {
        extend: {
            display: ['dark'],
        },
    },
    plugins: [],
};
