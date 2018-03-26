<template>
  <div>
    <el-row :gutter="16">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header">
            <span>草稿管理</span>
            <el-button style="float: right; padding: 3px 0" type="text">添加目录</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header">
            <span>信息管理</span>
          </div>
          <div>
            <el-button style="float: right; padding: 3px 0" type="text">发布</el-button>
            <el-button style="float: right; padding: 3px 0" type="text">取消</el-button>
            <el-button style="float: right; padding: 3px 0" type="text">未审批</el-button>
            <el-button style="float: right; padding: 3px 0" type="text">已审批</el-button>
            <el-button style="float: right; padding: 3px 0" type="text">审批未通过</el-button>
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
