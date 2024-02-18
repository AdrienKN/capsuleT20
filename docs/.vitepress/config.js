export default {
    base: '/capsule_temporelle/',
    ignoreDeadLinks: true,
    title: "Promo T20",
    description: "Pour ne jamais oublier",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Menu', link: '/' },
        { text: 'Sommaire',
        items: [
          { text: 'Capsule temporelle', link: '/map' },
          { text: 'Drives photos', link: '/api-examples' }
      ]}],
      sidebar: [
        {
          text: 'Sommaire',
          items: [
            { text: 'Capsule temporelle', link: '/map' },
            { text: 'Drives photos', link: '/api-examples' }
          ]
        }
      ],
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    }
  }
  
