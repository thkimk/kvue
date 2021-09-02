import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./views/Home"
import About from "./views/About"

/**
 * Router에 대해서 알아보자. 
 * Vue가 단일 페이지로 작동(SPA)하기 때문에, 페이지에 요청이 올 때마다 서버에 요청을 보내서 페이지를 받아오는게 아니라, 
 * 미리 페이지들을 로딩해서 갖고 있다. 이런 각 페이지들로 이동할 수 있게 해주는 것이 Router이다. 
 */

// VueRouter 사용 선언
Vue.use(VueRouter)
 
/**
 * VueRouter 인스턴스 생성하면서, mode와 routes 속성을 설정
 * mode에는 "hash"와 "history"가 있는데, Vue는 기본적으로 hash로 설정된다. 
 * Hash 모드는 URL 상에 "#"이 들어간다. 이것은 mode를 직접 "hash"로 해서 실행하면 확인할 수 있다. 
 * 이 모드는 SPA 방식이라서 페이지가 바뀔 때마다 서버에 페이지에 대한 정보들을 다시 요청하지 않는다. 
 * history 모드는 페이지가 바뀔 때마다 서버에 요청을 하므로 통신 부하가 있으나, 정보가 갱신되고, URL 상 "#" 표시가 안들어간다는 장점이 있다.
 */
const router = new VueRouter({
    mode:"history",
    routes: [
        {path: "/", name: "home", component: Home},
        {path: "/about", name: "about", component: About}
        // {path: "/about", name: "about", component: () => import('./views/About.vue')}   // lazy load 개념 (미리 로드하지않고, 요청이 있을때 불러옴)
    ]
})
 
export default router
