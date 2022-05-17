<template>
  <header>
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="Collapse"
      ></el-button>
      <h3 style="color:#fff">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="item in tags"
            :key="item.path"
            :to="{ path:item.path }"
            @click="udated(item)"
          >{{item.label}}</el-breadcrumb-item>

        </el-breadcrumb>
      </h3>
    </div>
    <div class="r-content">
      <el-dropdown
        trigger="click"
        szie="mini"
      >
        <span class="el-dropdown-link">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"><span
              @click="returnlogin"
            >退出</span></el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
// import store from 'store';
// import { mapState } from "vuex";
export default {
  name: 'commonHeader',
  data () {
    return {

    }
  },
  methods: {
    // 触发左导航的伸缩
    Collapse () {
      this.$store.commit('collapsemenu')
    },
    // 触发头部导航更新
    udated (item) {
      this.$store.commit('headermenu', item)
    },
    // 退出登录
    returnlogin () {
      this.$router.push({ name: 'login' })
      this.$store.commit('clearToken')
    }
  },
  computed: {
    // ...mapState({
    //   tags: state => state.tab.tabsList
    // })
    tags () {
      return this.$store.state.tab.headerList

    }

  },

}
</script>

<style scoped>
header {
  display: flex;
  height: 100%;
  /* 宽度要100%右边才可以过去 */
  width: 100%;
  text-align: center;
  justify-content: space-between;
}
.l-content {
  display: flex;
  align-items: center;
}
.l-content h3 {
  margin-left: 15px;
}

.r-content {
  display: flex;
  align-items: center;
}
.el-breadcrumb >>> .el-breadcrumb__inner {
  color: #ccc;
}
</style>