import { number } from 'echarts'

export default {
    state: {
        isCollapse: false,
        tabsList: [{
            path: '/home',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/home'
        }, ],
        headerList: [{
            path: '/home',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/home'
        }, ],
        currentMenu: null,
        editdata: null,
        editindex: null


    },
    mutations: {
        collapsemenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectmenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result == -1) {
                    state.tabsList.push(val)
                }
            } else {
                state.currentMenu = null
            }
        },
        // 更新头部导航
        headermenu(state, val) {
            const result = state.headerList.findIndex(item => item.name === val.name)
            let long = state.headerList.length - 1 - result
            if (result == -1) {
                state.headerList.push(val)
            } else if (result !== state.headerList.length - 1) {
                state.headerList.splice(result + 1, long)
            }
        },
        // 关闭标签后更新标签
        updateclose(state, val) {
            const result = state.headerList.findIndex(item => item.name === val.name)
            state.headerList.splice(result, 1)
        }
    }
}