<template>
  <div class="detail-wrapper" ref="content" @scroll="handlerScroll()">
  <!-- <div class="detail-wrapper" ref="content"> -->
    <user-info :name="name"></user-info>
    <card-cell v-for="(item,index) in data" :key="index" :data="item" :name="items" ></card-cell>
    <load-more :show-loading="showLoad" :tip="tip" background-color="#fbf9fe"></load-more>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import CardCell from "@/components/CardCell";
import { LoadMore } from "vux";
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
      data: [],
      tip: "正在加载",
      showLoad: true,
      page: 1
    };
  },
  props: {
    keyword: {
      type: String,
      default: ""
    }
  },

  mounted() {
    this.getList();
  },

  methods: {
    handlerScroll() {
      let el = this.$el;
      const _this = this;
      console.log(el.scrollTop,el.clientHeight,el.scrollHeight)
      _.throttle(() => {
        if (el.scrollTop + el.clientHeight >= el.scrollHeight-1) {
          _this.page += 1;
          console.log(_this.page)
          _this.getList();
        }
      },1000)();
    },
    getList() {
      this.axios
        .get(
          `${this.api.getDetail}?ddate_td=${
            this.$route.meta.title
          }&push_name=徐丽霞&rows=1&size=${this.page * 10}&customer=${
            this.keyword
          }`
        )
        .then(result => {
          if (result.data.flag === 0) {
            if (this.page * 10 >= result.data.data.totalRecord) {
              this.showLoad = false;
              this.tip = "暂无更多数据";
              this.data = result.data.data.list;
            } else {
              this.showLoad = true;
              this.tip = "正在加载";
              this.data = result.data.data.list;
            }
          }
        })
        .catch(err => {});
    },
    //节流函数
    throttle(methods, duration) {
      let begin = new Date();
      return function() {
        let context = this,
          args = arguments,
          current = new Date();
        if (current - begin >= duration) {
          methods.apply(context, args);
          begin = current;
        }
      };
    }
  },
  watch: {
    keyword(val) {
      this.page = 1;
      this.getList();
    },
    //使用同一组件跳转不发生刷新，监听路由变化
    $route(to, from) {
      console.log(from);
      if (to.path !== from.path) {
        this.getList();
      }
    }
  },

  components: {
    UserInfo,
    CardCell,
    LoadMore
  }
};
</script>
<style lang='less' scoped>
.detail-wrapper {
  @diff: 4.2rem;
  height: calc(~"100vh - @{diff}");
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; //滚动回弹 用于出现滚动时；
}
</style>