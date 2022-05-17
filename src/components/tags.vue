<template>
  <div>
    <el-tag
      v-for="(tag,index) in tags"
      :key="tag.path"
      closable
      @close='handleClose(tag,index)'
      @click="change(tag,index)"
      :disable-transitions="false"
      size="mini"
      :effect="light (tag) "
    >
      {{tag.label}}
    </el-tag>
  </div>

</template>

<script>
export default {
  name: 'tags',
  data () {
    return {
    }
  },
  computed: {
    tags () {
      return this.$store.state.tab.tabsList
    },

  },

  methods: {
    handleClose (tag, index) {
      const taglist = this.$store.state.tab.tabsList
      if (index == 0) {
        this.$message.error('不可移除')
      } else {
        taglist.splice(index, 1)
        // 移除后转到上一级组件
        const current = taglist.length - 1
        this.$router.push({
          name: taglist[current].name
        })
        this.$store.commit('updateclose', tag)
      }
    },

    // 设置当前标签高亮
    light (tag) {
      return this.$route.name === tag.name ? 'dark' : 'plain'
    },
    // 点击标签跳转路由
    change (tag, index) {
      const taglist = this.$store.state.tab.tabsList
      const currentName = taglist[index].name
      this.$router.push({
        name: currentName
      }),
        this.$store.commit('headermenu', tag)
    }
  }



}
</script>

<style>
body {
  position: relative;
}
.el-tag {
  margin: 10px 0 0 0;
  text-align: center;
}
</style>