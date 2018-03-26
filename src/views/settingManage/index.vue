<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span>个人信息</span>
        <el-button
          class="f-r"
          style="padding: 0"
          icon="el-icon-edit"
          type="text"
          v-show="!userData.isEdit"
          @click="userData.isEdit = true">编辑</el-button>
      </div>
      <div class="p-sm">
        <el-form :class="!userData.isEdit ? 'v-form-read' : ''" :model="userInfo" :rules="userData.rules" ref="userInfoForm" label-width="100px">
          <el-form-item label="姓名" prop="admin_name">
            <el-input v-model="userInfo.admin_name" :disabled="!userData.isEdit"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="admin_sex">
            <el-select v-model="userInfo.admin_sex" value-key="value" placeholder="请选择活动区域" :disabled="!userData.isEdit">
              <el-option
                v-for="(item, index) in sex" :key="index"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年龄" prop="admin_age">
            <el-input v-model="userInfo.admin_age" :disabled="!userData.isEdit"></el-input>
          </el-form-item>
          <el-form-item label="E-mail" prop="admin_email">
            <el-input v-model="userInfo.admin_email" :disabled="!userData.isEdit"></el-input>
          </el-form-item>
          <el-form-item label="移动电话" prop="cell_phone">
            <el-input v-model="userInfo.cell_phone" :disabled="!userData.isEdit"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="userInfo.address" :disabled="!userData.isEdit"></el-input>
          </el-form-item>
          <el-form-item v-show="userData.isEdit">
            <el-button @click="userInfoResetForm('userInfoForm')">取消</el-button>
            <el-button type="primary" @click="userInfoSubmitForm('userInfoForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-row class="m-t-sm" :gutter="16">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header">
            <span>管理员管理</span>
            <el-button
              class="f-r"
              style="padding: 0"
              icon="el-icon-plus"
              type="text"
              @click="addUserDialog.visible = true">添加管理员</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header">
            <span>字典管理</span>
            <el-button
              class="f-r"
              style="padding: 0"
              icon="el-icon-plus"
              type="text"
              @click="dictDialog.visible = true">添加字典</el-button>
          </div>
          <el-table
            :data="dictDialog.list"
            highlight-current-row
            style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="dict_code" label="编号"></el-table-column>
            <el-table-column property="dict_name" label="名称"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  icon="el-icon-view"
                  type="text"
                  @click="dictDialog.visible = true">查看</el-button>
                <el-button
                  icon="el-icon-edit-outline"
                  type="text"
                  @click="dictDialog.visible = true">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <!-- 添加管理员 -->
    <el-dialog
      title="添加管理员"
      :visible.sync="addUserDialog.visible"
      width="75%"
      :before-close="handleClose">
      <div class="p-sm">
        <el-form :model="addUserDialog.form" :rules="addUserDialog.rules" ref="addUserForm" label-width="100px">
          <el-form-item label="姓名" prop="admin_name">
            <el-input v-model="userInfo.admin_name" :disabled="!userData.isEdit"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="admin_sex">
            <el-select v-model="userInfo.admin_sex" value-key="value" placeholder="请选择活动区域" :disabled="!userData.isEdit">
              <el-option
                v-for="(item, index) in sex" :key="index"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年龄" prop="admin_age">
            <el-input v-model="userInfo.admin_age" :disabled="!userData.isEdit"></el-input>
          </el-form-item>
          <el-form-item label="E-mail" prop="admin_email">
            <el-input v-model="userInfo.admin_email" :disabled="!userData.isEdit"></el-input>
          </el-form-item>
          <el-form-item label="移动电话" prop="cell_phone">
            <el-input v-model="userInfo.cell_phone" :disabled="!userData.isEdit"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="userInfo.address" :disabled="!userData.isEdit"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="adduserResetForm('addUserForm')">取 消</el-button>
        <el-button type="primary" @click="addUserSubmitForm('addUserForm')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加字典 -->
    <el-dialog
      title="添加字典"
      :visible.sync="dictDialog.visible"
      width="75%"
      :before-close="handleClose">
      <div class="p-sm">
        <el-form :model="dictDialog.form" :rules="dictDialog.rules" ref="addDictForm" label-width="50px">
          <el-row :gutter="16">
            <el-col :span="12">
              <el-form-item label="编号" prop="dict_code">
                <el-input v-model="dictDialog.form.dict_code"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="名称" prop="dict_name">
                <el-input v-model="dictDialog.form.dict_name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="描述" prop="dict_describe">
            <el-input
              type="textarea"
              v-model="dictDialog.form.dict_describe"
              :autosize="{ minRows: 3, maxRows: 6 }"
              placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDictResetForm('addDictForm')">取 消</el-button>
        <el-button type="primary" @click="addDictSubmitForm('addDictForm')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加字典明细 -->
    <el-dialog
      title="添加字典明细"
      :visible.sync="dictItemDialog.visible"
      width="75%"
      :before-close="handleClose">
      <div class="p-sm">
        <el-form :model="dictItemDialog.form" :rules="dictItemDialog.rules" ref="addDictItemForm" label-width="100px">
          <el-form-item label="所属字典" prop="dict_code">
            <el-input v-model="dictItemDialog.form.dict_code"></el-input>
          </el-form-item>
          <el-form-item label="编号" prop="dict_code">
            <el-input v-model="dictItemDialog.form.dict_code"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="dict_name">
            <el-input v-model="dictItemDialog.form.dict_name"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="adduserResetForm('addDictItemForm')">取 消</el-button>
        <el-button type="primary" @click="addUserSubmitForm('addDictItemForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import $api from '@/api'
export default {
  name: '',
  components: {},
  data () {
    return {
      sex: [{
        label: '男',
        value: 0
      }, {
        label: '女',
        value: 1
      }],
      userData: {
        isEdit: false,
        rules: {
          'admin_name': [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          'admin_sex': [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          'admin_age': [
            { required: true, message: '请输入年龄', trigger: 'blur' }
          ],
          'admin_email': [
            { required: true, message: '请输入E-mail', trigger: 'blur' }
          ],
          'cell_phone': [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          'address': [
            { required: true, message: '请输入地址', trigger: 'blur' }
          ]
        }
      },
      addUserDialog: {
        visible: false,
        form: {},
        rules: {}
      },
      dictDialog: {
        visible: false,
        form: {},
        rules: {},
        list: []
      },
      dictItemDialog: {
        visible: false,
        form: {},
        rules: {}
      }
    }
  },
  props: {},
  created () {},
  computed: {
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  methods: {
    // 修改个人信息
    userInfoSubmitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          $api.user.updateUserInfo(this.userInfo).then((res) => {
            this.$message.success('修改成功')
            this.userData.isEdit = false
          }).catch((err) => {
            this.$message.error(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 取消个人信息
    userInfoResetForm (formName) {
      this.$refs[formName].resetFields()
      this.userData.isEdit = false
    },
    // 新增用户
    addUserSubmitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          $api.user.updateUserInfo(this.addUserDialog.form).then((res) => {
            this.$message.success('添加成功')
            this.addUserDialog.visible = false
          }).catch((err) => {
            this.$message.error(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 取消新增用户
    adduserResetForm (formName) {
      this.$refs[formName].resetFields()
      this.addUserDialog.visible = false
    },
    // 查询字典
    findDictFun () {
      $api.dict.findDict().then((res) => {
        this.dictDialog.list = res
      }).catch((err) => {
        this.$message.error(err)
      })
    },
    // 新增字典
    addDictSubmitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          $api.dict.addDict(this.dictDialog.form).then((res) => {
            this.$message.success('添加成功')
            this.dictDialog.visible = false
            this.findDictFun()
          }).catch((err) => {
            this.$message.error(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 取消新增字典
    addDictResetForm (formName) {
      this.$refs[formName].resetFields()
      this.dictDialog.visible = false
    },
    // 关闭对话框
    handleClose (done) {
      this.$confirm('确认关闭？').then(_ => {
        done()
      }).catch(_ => {})
    }
  },
  watch: {},
  mounted () {
    this.findDictFun()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
