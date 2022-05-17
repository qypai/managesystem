<template>
  <div>
    <el-table
      :data="tableData"
      stripe
    >
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        width="180"
      >
        <template slot-scope="scope">
          <span>{{scope.row[item.prop]}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row,scope.$index)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row,scope.$index)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'commontable',
  props: {
    tableData: Array,
    tableLabel: Array
  },
  data () {
    return {

    }
  },
  methods: {
    handleDelete (row, index) {
      this.$confirm('此操作将永久删除该内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const num = row.id
        const ind = index
        // 自定义事件
        this.$emit('delete', { num, ind })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      })

    },
    handleEdit (row, index) {
      const ind = index
      this.$store.state.tab.editdata = row
      this.$store.state.tab.editindex = ind
      this.$emit('updateb')
    }
  }

}
</script>

<style>
</style>