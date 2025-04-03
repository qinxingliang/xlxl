<!-- <template>
    <div>
        <el-container>
            <-- 菜单栏 --
            <el-aside class="aside" width="200px">
                <common-aside/>
            </el-aside>
            <el-container>
                <el-header>
                    <common-header></common-header>
                </el-header>
                <el-main>
                    <-- 路由入口 --
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template> -->

<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
            <common-aside/>
        </el-aside>
        <el-container style="height:100vh">
          <el-header>
            <common-header></common-header>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>

<style>
.aside{
   overflow-x: hidden; 
}
.el-header{
    padding: 0;
}

</style>

<script scoped>
    import CommonAside from '../components/CommonAside.vue'
    import CommonHeader from '../components/CommonHeader.vue'
    export default{
        data(){
            return {}
        },
        components : {
            CommonAside,
            CommonHeader
        }
    }
</script>