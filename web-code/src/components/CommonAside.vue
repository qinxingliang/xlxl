<template>
  <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
    :default-active="activerouter" background-color="#006400" text-color="#fff" :router="true">
    <h3>智能垃圾分类系统后台管理</h3>

    <template v-for="item in menuData">
      <template v-if="item.children">
        <el-submenu :index="item.lable" :key="item.lable">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.lable }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="item2 in item.children" :index="item2.path" :key="item2.path">
              {{ item2.lable }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>

      <template v-else>
        <el-menu-item :index="item.path" :key="item.path">
          <!-- <el-menu-item :index="item.name" :key="item.name" @click="clickMenu(item)"> -->
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.lable }}</span>
        </el-menu-item>
      </template>
    </template>

  </el-menu>
</template>
<style >
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
  border-right: 0px;
}

.el-menu h3 {
  color: #FFF;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 0px;
}
</style>

<script scoped>
export default {
  data() {
    return {
      activerouter: '',
      isCollapse: false,
      menuData: [
        {
          path: '/lunbotu',
          name: 'lunbotu',
          lable: '轮播图管理',
          icon: '',
          url: '/lunbotu'
        },
        {
          path: '/shangpin',
          name: 'shangpin',
          lable: '积分商品管理',
          icon: '',
          url: '/shangpin'
        },
        {
          path: '/wupin',
          name: 'wupin',
          lable: '物品分类管理',
          icon: '',
          url: '/wupin'
        },
        {
          path: '/wenti',
          name: 'wenti',
          lable: '答题问题管理',
          icon: '',
          url: '/wenti'
        },
        {
          path: '/faxian',
          name: 'faxian',
          lable: '新闻文章管理',
          icon: '',
          url: '/faxian'
        },
        {
          path: '/video',
          name: 'video',
          lable: '视频管理',
          icon: '',
          url: '/video'
        },
        
        {
          path: '/jichuxinxi',
          name: 'jichuxinxi',
          lable: '基础信息管理',
          icon: '',
          url: '/jichuxinxi'
        },
        {
          path: '/huishou',
          name: 'huishou',
          lable: '回收商管理',
          icon: '',
          url: '/huishou'
        },
        // {
        //   path: '/geshou',
        //   name: 'geshou',
        //   lable: '歌手管理',
        //   icon: '',
        //   url: '/geshou'
        // },
        // {
        //   path: '/fenlei',
        //   name: 'fenlei',
        //   lable: '音乐分类管理',
        //   icon: '',
        //   url: '/fenlei'
        // },
        // {
        //   path: '/music',
        //   name: 'music',
        //   lable: '音乐管理',
        //   icon: '',
        //   url: '/music'
        // },
        
        {
          path: '/user',
          name: 'user',
          lable: '微信用户管理',
          icon: '',
          url: '/user'
        },
      ]
    };
  },
  created() {
    //获取地址栏中的路由，设置elementui中的导航栏选中状态
    this.activerouter = this.$route.path;
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    // 点击菜单事件(el-menu的 router属性设置为true 就会自动跳转到for 的index 绑定的地址)
    // clickMenu(item){
    //   //
    //   if(this.$route.path != item.path &&
    //     !(this.$route.path === '/home' && item.path === '/')){

    //   }
    //   this.$router.push(item.path);
    // }
  },

}
</script>