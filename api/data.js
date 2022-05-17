import axios from './axios'

function get(url, type, data) {
    if (type == 'get') {
        return axios.request({
            url: url,
            method: 'get',
            data: data,
        })
    } else {
        return axios.request({
            url: url,
            method: 'post',
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: [function(data) {
                // Do whatever you want to transform the data
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],

        })
    }

}
// 获取可视化图表数据
export const getData = () => {
        const url = '/home/getData'
        const type = 'get'
        return get(url, type)

    }
    // 获取文本请求
export const getbook = (params) => {
        return axios.request({
            url: 'http://127.0.0.1:3007/api/article/cates',
            method: 'get',
            data: params
        })
    }
    // 新增文本数据请求
export const addbook = (name, alias) => {
        const url = 'http://127.0.0.1:3007/api/article/addcates'
        const type = 'post'
        const data = {
            'name': name,
            'alias': alias
        }
        return get(url, type, data)

    }
    // 删除文章请求
export const deletebook = (num) => {
    return axios.request({
        url: `http://127.0.0.1:3007/api/article/deletecate/${num}`,
        method: 'get',
    })
}
const Url = 'http://127.0.0.1:3007/api/article'
    // 编辑更新文章请求
export const updatebook = (name, alias, id) => {
        return axios.request({
            url: `${Url}/updatecate`,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                'name': name,
                'alias': alias,
                'Id': id
            },
            transformRequest: [function(data) {
                // Do whatever you want to transform the data
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
        })
    }
    // 登录请求
export const loginget = (name, password) => {
    const url = 'http://127.0.0.1:3007/api/login'
    const type = 'post'
    const data = {
        'username': name,
        'password': password
    }
    return get(url, type, data)
}