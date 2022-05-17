<template>
  <div ref="echart">

  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'echart',
  props: {
    isAxisChart: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      default () {
        return {
          xdata: [],//注意这里的属性名需要与组件定义的数据的属性名一样
          yAxis: [],
          legend: [],
          series: []
        }
      }


    }
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart()
      },
      deep: true
    }
  },
  methods: {
    initChart () {
      this.initChartData()
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)

      }
    },
    initChartData () {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xdata,
          console.log(this.chartData.xAxis);
        this.axisOption.legend.data = this.chartData.legend,
          console.log(this.axisOption.legend.data);

        this.axisOption.series = this.chartData.series
      } else {
        this.normalOption.series = this.chartData.series

      }
    }
  },

  data () {
    return {
      axisOption: {
        xAxis: {
          data: []
        },
        yAxis: {},
        legend: {
          data: []
        },
        series: []
      },
      normalOption: {
        tooltip: {
          trigger: 'item'
        },
        series: []
      },
      echart: null
    }
  },
  computed: {
    options () {
      return this.isAxisChart ? this.axisOption : this.normalOption
    }


  }
}
</script>

<style>
</style>