<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color='#fff'
    active-text-color='#409EFF'
    style="height:100vh"
  >
    <!-- 通用后台管理系统 -->
    <div class="title">
      <h3>{{title}}</h3>
    </div>
    <!-- 一级菜单 -->
    <el-menu-item
      v-for="item in nochildren"
      :key='item.path'
      :index="item.path+''"
      @click="clickmenu(item)"
    >
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in haschildren"
      :index="item.path+''"
      :key='item.path'
    >
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span
          slot="title"
          class="left"
        >{{item.label}}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem,subIndex) in item.children"
        :key="item.path"
      >
        <!-- 二级菜单 -->
        <el-menu-item
          @click="clickmenu(subItem)"
          :index="subIndex+''"
        >{{subItem.label}}</el-menu-item>

      </el-menu-item-group>

    </el-submenu>
    </el-submenu>

  </el-menu>

</template>

<script>

export default {
  name: 'commonAside',
  data () {
    return {
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/home'
        }, {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        }, {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: "其他",
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    clickmenu (item) {
      this.$router.push({
        name: item.name
      }),
        this.$store.commit('selectmenu', item),
        this.$store.commit('headermenu', item)
    }
  },
  computed: {
    nochildren () {
      return this.menu.filter(item => !item.children)
    },
    haschildren () {
      return this.menu.filter(item => item.children)
    },
    isCollapse () {
      return this.$store.state.tab.isCollapse
    },
    title () {
      return this.isCollapse ? '后台' : '通用后台管理系统'
    }



  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.title {
  color: aliceblue;
  line-height: 48px;
  text-align: center;
}
</style>