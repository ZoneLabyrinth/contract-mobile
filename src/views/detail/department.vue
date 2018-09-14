<template>
  <div class="detail-wrapper">
    <user-info :name="name"></user-info>
    <card-cell v-for="(item,index) in data" :key="index" :data="item" :name="items" ></card-cell>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import CardCell from "@/components/CardCell";
export default {
  data() {
    return {
      name: "王丽",
      items: [
        { name: "销售合同号", code: "num" },
        { name: "客户", code: "cutomer" },
        { name: "合同类型", code: "type", value: "" },
        { name: "合同签订日期", code: "date" },
        { name: "合同金额", code: "amount" },
        { name: "销售经理", code: "saleMan" },
        { name: "项目服务经理", code: "serviceMan" },
        { name: "累计收入确认含税金额", code: "income" },
        { name: "累计收款含税金额", code: "receipt" },
        { name: "累计开票含税金额", code: "invoice" },
        { name: "合同应收账款", code: "contractRec" },
        { name: "权责应收账款", code: "responsibilityRec" },
        { name: "开票应收账款", code: "invoiceRec" },
        { name: "权责预收账款", code: "responsibilityAdv" },
        { name: "异常合同状态", code: "abnormalState" }
      ],
      data: []
    };
  },

  created() {
    // this.getList();
  },

  mounted() {
    this.getList();
  },

  methods: {
    getList() {
      this.axios
        .get("/details/department?date=2018-09-11&name=徐丽霞")
        .then(result => {
          if (result.data.flag === 0) {
            this.data = result.data.data.data;
            console.log(this.data);
          }
        })
        .catch(err => {});
    }
  },

  components: {
    UserInfo,
    CardCell
  }
};
</script>
<style lang='less' scoped>
</style>