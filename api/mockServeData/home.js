import Mock from 'mockjs'
let list = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            list.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                videoData: [{
                    name: '小米',
                    value: 2999
                }, {
                    name: '苹果',
                    value: 5999
                }, {
                    name: 'vivo',
                    value: 1500
                }, {
                    name: 'oppo',
                    value: 1999
                }, {
                    name: '魅族',
                    value: 2200
                }, {
                    name: '三星',
                    value: 2600
                }, ],
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007', ],
                    data: list
                },
                tableData: [{
                    name: '苹果',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }, {
                    name: '小米',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }, {
                    name: '魅族',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }, {
                    name: '华为',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }, {
                    name: '红米',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }]


            }
        }
    }
}