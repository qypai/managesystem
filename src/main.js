import Vue from 'vue'
import App from './App.vue'
import { Button, container, aside, header, main, Menu, submenu, MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem, Avatar, Row, Card, Col, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Input, Select, Option, DatePicker, Dialog, Alert, Message, MessageBox } from 'element-ui'
import router from '../router'
import store from '../store'
import http from 'axios'
import '../api/mock'



Vue.config.productionTip = false
Vue.use(Button)
Vue.use(container)
Vue.use(aside)
Vue.use(header)
Vue.use(main)
Vue.use(Menu)
Vue.use(submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Avatar)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Alert)
    // 引入axios
Vue.prototype.$http = http
    // 全局引入消息提示
Vue.prototype.$message = Message
    // 全局引入弹窗提示
Vue.prototype.$confirm = MessageBox.confirm
    // 路由守卫
router.beforeEach((to, from, next) => {
    store.commit('getToken')
    const token = store.state.user.token
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else {
        next()
    }
})
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')