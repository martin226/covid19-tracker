module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        '@nuxtjs/eslint-config-typescript',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        'import/extensions': 'off',
    },
    settings: {
        'import/core-modules': ['vue'],
    },
};
