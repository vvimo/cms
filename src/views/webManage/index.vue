<template>
  <div>
    <el-row :gutter="16">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header">
            <span>网站管理</span>
            <el-button style="float: right; padding: 3px 0" type="text">添加网站</el-button>
          </div>
          <div>
            <el-button style="float: right; padding: 3px 0" type="text">发布</el-button>
            <el-button style="float: right; padding: 3px 0" type="text">取消</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header">
            <span>网站内容管理</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {}
  },
  props: {},
  created () {},
  computed: {},
  methods: {},
  watch: {},
  mounted () {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
