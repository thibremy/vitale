 module.exports = {
  title: 'Vitale',
  description: 'A Vitale documentation',
  themeConfig: {
    sidebar: [
      { 
        text: 'Getting Started', 
        ling: '/'
      },
      { 
        text: 'Basic Features', 
        link: '/basic-features/',
        children: [
          { text: 'data-fetching',  link: '/basic-features/data-fetching' },
          { text: 'pages',  link: '/basic-features/pages' },
          { text: 'static-file-serving',  link: '/basic-features/static-file-serving' },
        ]
      },
      { 
        text: 'Routing', 
        link: '/routing/',
        children: [
          { text: 'introduction',  link: '/routing/introduction' }
        ]
      },
      { 
        text: 'API Routes', 
        link: '/api-routes/',
        children: [
          { text: 'introduction',  link: '/api-routes/introduction' }
        ]
      },
      { 
        text: 'Advanced Features', 
        link: '/advanced-features/',
        children: [
          { text: 'src directory',  link: '/advanced-features/introduction' },
          { text: 'static html',  link: '/advanced-features/introduction' }
        ]
      }
    ]
  },
}
