<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column width="110" label="Title">
        <template slot-scope="scope">
          {{ scope.row.abstracts }}
        </template>
      </el-table-column>
      <el-table-column label="Details" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.details }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Building" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.building.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Starttime" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.starttime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Endtime" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.endtime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/promotions'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
