<template>
  <div>
    <tags></tags>
    <div class="manage-header">
      <el-button
        type="button"
        size="mini"
        @click="adduser"
      >+新增</el-button>
      <div class="search">
        <commonform
          :form="searchform"
          :formLabel="sformlabel"
          :inline="true"
        ></commonform>
        <el-button
          type="button"
          size="mini"
          @click="search"
        >搜索</el-button>
      </div>

    </div>

    <el-dialog
      :title="add===true?'新增书本':'编辑书本'"
      :visible.sync="dialogVisible"
      width="45%"
    >
      <commonform
        :form="operateform"
        :formLabel="operateFormLabel"
        :inline="true"
      ></commonform>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="confirm"
        >确 定</el-button>
      </span>
    </el-dialog>
    <commontable
      :tableData="tablebookData"
      :tableLabel="tablelabel"
      @delete='Delete'
      @updateb='upDateb'
    ></commontable>
  </div>
</template>

<script>
// 引入获取书本信息请求
import { getbook, addbook, deletebook, updatebook } from '../../api/data'
// 引入标签
import tags from '../../src/components/tags.vue'
// 引入表单
import commonform from '../../src/components/commonForm.vue'
// 引入表格
import commontable from '../../src/components/commontable.vue'
export default {
  name: 'User',
  components: {
    tags, commonform, commontable
  },
  mounted () {
    // 发送获取书本信息的请求
    this.getdata()


  },


  data () {
    return {
      operateFormLabel: [
        {
          model: 'name',
          label: '书名',
          type: 'input'

        }, {
          model: 'alias',
          label: '英文书名',
          type: 'input'

        },
      ],
      operateform: {
        name: '',
        alias: '',
      },
      add: true,
      // 控制对话框的显示隐藏
      dialogVisible: false,
      sformlabel: [
        {
          model: 'keyword',
          label: "",
          type: 'input'
        }
      ],
      searchform: {
        keyword: ''
      },
      tablebookData: [],
      tablelabel: [
        {
          prop: 'name',
          label: '书名'
        }, {
          prop: 'alias',
          label: '英文书名'
        },

      ]




    }
  },
  methods: {
    // 封装请求书本数据函数 
    getdata () {
      getbook().then(res => {
        const { data, status } = res.data
        if (status == 0) {
          // 更新数据从而更新视图
          this.tablebookData = data
        }
      })
    },
    // 点击确认后发起新增书本请求
    confirm () {
      if (this.add) {
        addbook(this.operateform.name, this.operateform.alias).then(() => {
          // 必须新增书本请求后再执行获取书本信息请求才可以获得新增后的数据 才能响应式
          this.getdata()
          this.dialogVisible = false

        })
      } else {
        const id = this.$store.state.tab.editdata.id
        const index = this.$store.state.tab.editindex
        const data = this.tablebookData
        const newname = this.operateform.name
        const newalias = this.operateform.alias
        updatebook(newname, newalias, id).then(
          this.$set(data, index, { name: newname, alias: newalias })
        )
        // 点击确认后关闭对话框并且
        this.dialogVisible = false
      }



    },
    // 自定义删除文章事件
    Delete (data) {
      deletebook(data.num).then(
        // 先移除文本信息中删除的元素才可以更新视图
        this.tablebookData.splice(data.ind, 1),
      )
    },
    // 触发编辑事件
    upDateb () {
      this.dialogVisible = true
      this.add = false
      // 让文本输入框为空
      this.operateform = {
        name: this.$store.state.tab.editdata.name,
        alias: this.$store.state.tab.editdata.alias,
      }
    },


    search () { },
    adduser () {
      this.dialogVisible = true
      this.add = true
      // 让文本输入框为空
      this.operateform = {
        name: '',
        alias: '',
      }
    }

  }
}




</script>

<style scoped>
.manage-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.manage-header .el-button {
  width: 55px;
  height: 30px;
}
.search {
  display: flex;
}
</style>