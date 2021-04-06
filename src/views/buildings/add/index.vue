<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Promotion time">
        <el-col :span="11">
          <el-date-picker v-model="form.starttime" type="datetime" placeholder="Pick start date and time" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.endtime" type="datetime" placeholder="Pick end date and time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="Details">
        <el-input v-model="form.details" type="textarea" />
      </el-form-item>      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        abstracts: '',
        starttime: '',
        endtime: '',
        details: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

