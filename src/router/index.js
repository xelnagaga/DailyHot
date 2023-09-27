import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/router/routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由守卫
router.beforeEach(() => {
  $loadingBar.start();
});

router.afterEach((to) => {
  $loadingBar.finish();
  
  // Google Analytics tracking
  if (typeof window.gtag !== 'undefined') {
    gtag('config', 'G-0X9ZGTQDHC', {
      'page_path': to.fullPath,
      'page_title': to.name || 'Unknown Page',
    });
  }
});


export default router;