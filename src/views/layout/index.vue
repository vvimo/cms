<template>
  <el-container class="v-wrapper">
    <el-header class="v-header">Header</el-header>
    <el-container>
      <el-aside class="v-aside" width="200px">
        <el-scrollbar class="v-main" style="height: 100%">
          <el-menu
            class="el-menu-vertical-demo"
            default-active="dashboard"
            @select="handleSelect">
            <el-menu-item
              v-for="(item, index) in menuData" :key="index"
              :index="item.serf">
              {{ item.title }}
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-scrollbar class="v-main">
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-scrollbar>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'layout',
  components: {},
  data () {
    return {
      menuData: [{
        title: '首页',
        serf: 'dashboard'
      }, {
        title: '系统管理',
        serf: 'settingManage'
      }, {
        title: '网站管理',
        serf: 'webManage'
      }, {
        title: '频道管理',
        serf: 'channelManage'
      }, {
        title: '目录管理',
        serf: 'menuManage'
      }, {
        title: '信息管理',
        serf: 'newsManage'
      }, {
        title: '关键字管理',
        serf: 'keywordManage'
      }]
    }
  },
  props: {},
  created () {},
  computed: {},
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({ path: '/' + key })
    }
  },
  watch: {},
  mounted () {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
