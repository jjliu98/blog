import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss'; // 为页面图标添加鼠标悬停的跳动效果。

const TopNavBeautify = defineAsyncComponent(() => import('./Components/TopNavBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./Components/HeroBG.vue'));
const HeroHitokoto = defineAsyncComponent(() => import('./Components/HeroHitokoto.vue'));
const NavMusic = defineAsyncComponent(() => import('./Components/NavMusic.vue'));
const PrintVersion = defineAsyncComponent(() => import('./Components/PrintVersion.vue'));
const CommentHideBtn = defineAsyncComponent(() => import('./Components/CommentHideBtn.vue'));
const MyLinks = defineAsyncComponent(() => import('./Components/MyLinks.vue'));
const MyIcon = defineAsyncComponent(() => import('./Components/MyIcon.vue'));
const BlogBg = defineAsyncComponent(() => import('./Components/BlogBg.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./Components/BlogBeautify.vue'));
const FooterEdit = defineAsyncComponent(() => import('./Components/FooterEdit.vue'));

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyLinks', MyLinks);
    app.component('MyIcon', MyIcon);
  },
  setup() {
    onMounted(() => {});
  },
  rootComponents: [
    TopNavBeautify,
    HeroBG,
    HeroHitokoto,
    NavMusic,
    PrintVersion,
    CommentHideBtn,
    BlogBeautify,
    FooterEdit,
    BlogBg,
    // ...
  ],
});
