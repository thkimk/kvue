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
 
// VueRouter 인스턴스 생성하면서, mode와 routes 속성을 설정
const router = new VueRouter({
    mode:"history",
    routes: [
        {path: "/", name: "home", component: Home},
        {path: "/about", name: "about", component: About}
    ]
})
 
export default router
