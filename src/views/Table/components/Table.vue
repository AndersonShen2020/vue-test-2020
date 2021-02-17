<script>
import {
  ref,
  reactive,
  nextTick,
  onMounted,
} from "vue";
import {getTableData , getTableDataLength} from "@/api/Table.js"
export default {
  setup() {
    let tableData = [];
    let tableLength = ref(0)

    const currentPage = reactive(1);
    let newTableData = reactive([]);

    /** 設定從newTableData抓取資料
     * @param {Number} num 現在pagination在第幾頁
     */
    const getNewTableData = (num) => {
      console.log("getTableData , num =" , num);
      while (newTableData.length) {
        newTableData.pop();
      }
      for(let i=0 ; i<=4 ; i++){
        newTableData.push(tableData[i + (5 * (num -1))]);
      }
    };

    /** currentPage 改变时会触发 */
    const handleTableChange = (currentPage) => {
      console.log("變換頁面時觸發 , currentPage = ", currentPage);
      getNewTableData(currentPage);
      console.log("變換頁面時觸發 , newTableData = ", newTableData);
      // nextTick會在每次handleTableChange結束時執行
      nextTick(() => {
        console.log("nextTick");
        console.log("==========");
      });
    };

    const init = () =>{
      tableData = getTableData;
      tableLength.value = getTableDataLength
      console.log("tableLength" , tableLength.value);
    }

    onMounted(() => {
      init();
      handleTableChange(1);
    });

    return {
      tableLength,
      newTableData,
      handleTableChange,
      currentPage,
    };
  },
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <el-table :data="newTableData" style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
          ></el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <el-pagination
          layout="total, prev, pager, next"
          :page-size="2"
          :total="tableLength"
          v-model:currentPage="currentPage"
          @current-change="handleTableChange(currentPage)"
        >
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>
// .el-header,
// .el-footer {
//   background-color: #b3c0d1;
//   color: #333;
//   text-align: center;
//   line-height: 60px;
// }
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
  }

h1 {
  color: blue;
}
.testcolor {
  color: purple;
}
.about {
  border-style: solid;
  .timer {
    color: red;
  }
}
img {
  height: 100vh;
  width: 80vh;
}
</style>
