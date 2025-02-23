import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Aly Elalwany",
    description: "Aly Elalwany's personal website",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Blog', link: '/blog/all-blogs'}
        ],

        sidebar: [
            {
                text: 'Reference',
                items: [
                    {text: 'About', link: '/about'},
                    {
                        text: 'Blog', link: '/blog/all-blogs', items: [
                            {text: 'Encrypting with GPG Public Key', link: '/blog/encrypting-with-gpg-public-key'},
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/alyelalwany'},
            {icon: 'linkedin', link: 'https://www.linkedin.com/in/alyelalwany/'},

        ],

        search: {
            provider: 'local',
        }
    },

})
