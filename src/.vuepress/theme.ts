import { hopeTheme } from 'vuepress-theme-hope';
import { navbarConfig } from './navbar/navbar.js';
import { sidebarConfig } from './sidebar/sidebar.js';

const footerICP_HTML = `
<a class="footer-about" href="https://music.163.com/#/song?id=31838335" target="_blank">
冷月如刀砍落花，落花笑我太卑贱
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/about/website.html">关于本站</a>`;

export default hopeTheme({
  hostname: 'https://jjliu98.github.io',
  author: {
    name: '十⁸⁹',
    url: 'https://github.com/jjliu98',
    email: 'lau5464@126.com',
  },
  iconAssets: [
    '//at.alicdn.com/t/c/font_3855310_p3z6ugbxr7a.css',
    '//at.alicdn.com/t/c/font_2922463_kweia6fbo9.css'
  ],
  logo: '/pwa/144.png',
  docsDir: 'src',
  editLink: false,
  fullscreen: true,
  navbarAutoHide: 'always',
  footer: footerICP_HTML,
  pageInfo: [
    'Author',
    'Category',
    'Date',
    'Original',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView',
    //..
  ],

  blog: {
    name: '十⁸⁹',
    avatar: '/avatar.gif',
    description: '隔牖风惊竹，开窗雪满山',
    intro: 'https://jjliu98.github.io/about/me.html',
    medias: {
      Email: 'mailto:lau5464@126.com',
      GitHub: 'https://github.com/jjliu98',
      Rss: '/atom.xml',
    },
  },

  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Outlook'],
  },

  locales: {
    '/': {
      navbar: navbarConfig,
      sidebar: sidebarConfig,
      blog: {
        name: '十⁸⁹',
        description: '隔牖风惊竹，开窗雪满山',
        intro: '/about/me.html',
        timeline: '美好的事情即将发生',
      },
    },
  },

  // enable it to preview all changes in time
  hotReload: true,

  plugins: {
    blog: true,
    comment: {
      provider: 'Waline',
      serverURL: 'https://blog-comment-puce-iota.vercel.app',
      copyright: false,
      reaction: true,
    },

    copyright: false,

    searchPro: {
      // 索引全部内容
      indexContent: true,
      autoSuggestions: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter(page: any) {
            return page.frontmatter.category;
          },
          formatter: {
            '/': '分类：$content',
          },
        },
        {
          getter(page: any) {
            return page.frontmatter.tag;
          },
          formatter: {
            '/': '标签：$content',
          },
        },
      ],
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      breaks: true,
      linkify: true,
      alert: true,
      footnote: true,
      obsidianImgSize: true,
      vPre: true,

      // install chart.js before enabling it
      chart: true,

      // insert component easily

      // install echarts before enabling it
      echarts: true,

      // install flowchart.ts before enabling it
      flowchart: true,

      // gfm requires mathjax-full to provide tex support
      gfm: true,

      // install katex before enabling it
      // katex: false,

      // install mathjax-full before enabling it
      // mathjax: false,

      // install mermaid before enabling it
      // mermaid: false,

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      // },
      revealJs: false,

      // install @vue/repl before enabling it
      vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: false,
    },

    pwa: {
      favicon: '/favicon.png',
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: '/pwa/144.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/pwa/144.png',
        color: '#000',
      },
      manifest: {
        icons: [
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: '十⁸⁹',
            short_name: '十⁸⁹',
            url: '/',
            icons: [
              {
                src: '/pwa/192.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },

    components: {
      components: ['Badge', 'VPCard', 'BiliBili'],
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
      image: '/pwa/72.png',
      icon: '/pwa/512.png',
    },
  },
});