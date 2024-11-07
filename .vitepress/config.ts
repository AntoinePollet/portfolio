import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Portfolio",
  description: "My portfolio",
  base: "/portfolio/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AntoinePollet' }
    ],
    footer: {
      message: 'You can contact me at pollet.antoine.alexis@gmail.com',
      copyright: 'Copyright © 2021-present <a href="https://github.com/AntoinePollet">Antoine Pollet</a>'
    }
  }
})
