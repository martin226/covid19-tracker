export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    router: {
        base: '/covid19-tracker/',
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'COVID-19 Tracker',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Real-time statistics tracker for the novel coronavirus (2019-nCoV), with global reports and individual country data.',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: 'favicon.ico?v2',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/styles.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/vue-good-table', ssr: false },
        '~/plugins/helpers',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/fontawesome',
    ],

    fontawesome: {
        icons: {
            solid: true,
            brands: true,
        },
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            name: 'COVID-19 Tracker',
            short_name: 'COVID',
            lang: 'en',
            description:
                'Statistics tracker for the novel coronavirus (2019-nCoV)',
            theme_color: '#536dfe',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    server: {
        host: '0.0.0.0',
    },
};
