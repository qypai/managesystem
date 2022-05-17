<template>

  <el-row
    class="home"
    :gutter="20"
  >
    <tags></tags>
    <el-col
      :span='8'
      style="margin-top:20px"
    >
      <!-- 个人信息 -->
      <el-card
        shadow='hover'
        body-style='padding: 10px'
      >
        <div class="user">
          <img :src="userImg">
          <div class="userinfo">
            <p class="name">QYPAI</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-3-5</span></p>
          <p>上次登录地点：<span>广州</span></p>
        </div>
      </el-card>
      <!-- 表格 -->
      <el-card
        style="height:100%;margin-top:20px"
        body-style='padding: 0px'
        shadow='hover'
      >
        <el-table
          :data="tableData"
          stripe
        >
          <el-table-column
            prop="name"
            label="品牌"
          >
          </el-table-column>
          <el-table-column
            prop="todayBuy"
            label="今日购买"
          >
          </el-table-column>
          <el-table-column
            prop="monthBuy"
            label="本月购买"
          >
          </el-table-column>
          <el-table-column
            prop="totalBuy"
            label="总购买"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右侧区域 -->
    <el-col
      :span='16'
      style="margin-top:20px"
    >
      <div class="num">
        <el-card
          shadow='hover'
          v-for="item in countData "
          :key='item.name'
          :body-style="{display:'flex',padding:0}"
        >
          <i
            class="icon"
            :class='`el-icon-${item.icon}`'
            :style="{background:item.color,width:'50px'}"
          ></i>
          <div class="datail">
            <p class="num">￥{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>

        </el-card>
      </div>
      <el-card
        style="height:180px "
        shadow='hover'
        :body-style="{padding:0}"
      >

        <Echarts
          :chartData="echartdata.order"
          style="height:180px"
        ></Echarts>
      </el-card>
      <div class="graph">

        <el-card
          style="height:160px"
          shadow='hover'
          :body-style="{padding:0}"
        >
          <Echarts
            :chartData="echartdata.video"
            :isAxisChart="false"
            style="height:150px"
          ></Echarts>

        </el-card>
        <el-card
          style="height:160px"
          shadow='hover'
          :body-style="{padding:0}"
        >
          <Echarts
            :chartData="echartdata.video"
            :isAxisChart="false"
            style="height:150px"
          ></Echarts>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from '../../api/data'
// import * as echarts from 'echarts'
import Echarts from '../../src/components/Echarts.vue'
// 引入标签
import tags from '../../src/components/tags.vue'
export default {
  name: 'home',
  components: {
    Echarts, tags
  },
  data () {
    return {
      userImg: require('../../src/assets/images/1.webp'),
      tableData: [],
      countData: [{
        name: '今日支付订单',
        value: 1234,
        icon: 'success',
        color: '#2ec7c9'
      }, {
        name: '今日收藏订单',
        value: 1234,
        icon: 'success',
        color: '#2ec7c9'
      }, {
        name: '今日未支付订单',
        value: 1234,
        icon: 'success',
        color: '#2ec7c9'
      }, {
        name: '本月支付订单',
        value: 1234,
        icon: 'success',
        color: '#2ec7c9'
      }, {
        name: '本月收藏订单',
        value: 1234,
        icon: 'success',
        color: '#2ec7c9'
      }, {
        name: '本月未支付订单',
        value: 1234,
        icon: 'success',
        color: '#2ec7c9'
      },],
      echartdata: {
        order: {
          xdata: [],
          legend: [],
          series: []
        },
        video: {
          series: []
        }
      }




    }
  },
  mounted () {
    // 发送获取数据请求
    getData().then(res => {
      console.log(res);
      const { code, data } = res.data
      if (code === 20000) {
        // 处理响应回来的数据
        this.tableData = data.tableData
        const order = data.orderData
        const xdata1 = order.date
        console.log(xdata1);
        const video = data.videoData
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach(key => {
          console.log(key);
          series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        // const option = {
        //   xAxis: {
        //     data: xdata
        //   },
        //   yAxis: {},
        //   legend: {
        //     data: keyArray
        //   },
        //   series
        // }
        // const E = echarts.init(this.$refs.echarts)
        // E.setOption(option)
        this.echartdata.order.xdata = xdata1
        console.log(this.echartdata.order.xdata);
        this.echartdata.order.legend = keyArray
        this.echartdata.order.series = series


        // const videoOptions = {
        //   tooltip: {
        //     trigger: 'item'
        //   },
        //   series: [
        //     {
        //       type: 'pie',
        //       data: video,
        //       emphasis: {
        //         itemStyle: {
        //           shadowBlur: 10,
        //           shadowOffsetX: 0,
        //           shadowColor: 'rgba(0, 0, 0, 0.5)'
        //         }
        //       }
        //     }
        //   ]
        // }
        // const E1 = echarts.init(this.$refs.videoecharts1)
        // const E2 = echarts.init(this.$refs.videoecharts2)
        // E1.setOption(videoOptions)
        // E2.setOption(videoOptions)
        this.echartdata.video.series = [
          {
            type: 'pie',
            data: video,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]

      }
    })
  },
}
</script>

<style scoped>
.user img {
  width: 70px;
  height: 70px;
  border-radius: 35px;
}
.user {
  display: flex;
  border-bottom: 2px solid #ccc;

  height: 70px;
  padding-bottom: 10px;
}
.userinfo {
  line-height: 30px;
  margin-left: 40px;
}
.name {
  font-size: 23px;
}
.login-info {
  margin-top: 10px;
}
.login-info span {
  margin-left: 20px;
}
.login-info p {
  margin-top: 5px;
}
.num {
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  /* 可以避免使用外边距隔开盒子造成的最后一个盒子有外边距 */
  justify-content: space-between;
}
.num .el-card {
  width: 32%;
  height: 60px;
}

.icon {
  text-align: center;
  line-height: 60px;
}
.txt {
  font-size: 12px;
}
.datail {
  margin: 7px 0 0 15px;
}
.graph {
  display: flex;
}
.graph .el-card {
  margin-top: 10px;
  width: 50%;
}
.echart {
  margin-top: 10px;
}
</style>