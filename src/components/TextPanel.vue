<template>
  <div class="text-wrapper">
      <div class="title" v-if="data.title">
          合同应收
      </div>
      <div class="content" ref="content">
          <p v-for="(item,index) in data.arr" :key="index">
             <span>{{item.amount | formatCash}}</span> 
             <span>{{item.name}}</span>
             <span>
               <e-charts :options="chart[index]"></e-charts>
             </span>
             <span>
               {{item.percent}}
             </span>
             <u :style="{'left':left}"></u>
          </p>
          <slot name="chart"></slot>
      </div>
  </div>
</template>

<script>
import { pie } from "@/assets/js/pie.js";
// console.log(pie0)
export default {
  data() {
    return {
      isMounted: false,
      chart:[pie]
    };
  },
  props: {
    data: {
      type: Object,
      default: function() {
        let arr = [
          { name: "合同金额", amount: 888888 }
          // { name: "合同金额", amount: 888888 },
          // { name: "合同金额", amount: 888888 },
        ];
        let obj = {
          title: "",
          arr,
        };
        return obj;
      }
    }
  },

  computed: {
    left() {
      // let arr = this.$refs;
      if (this.isMounted) {
        switch (this.$refs.content.children.length) {
          case 2:
            return "5.5rem";
          case 3:
            return "4rem";
        }
      }
    },
  },

  mounted() {
    this.isMounted = true;
  },

  methods: {
  },

  components: {}
};
</script>
<style lang='less' scoped>
@import url("../assets/styles/mixin.less");
.text-wrapper {
  margin: 0.45rem;
  padding: 0.7rem 0;
  background: #fff;
  .borderRadios();
  .title {
    height: 1.5rem;
    font-size: 0.7rem;
    font-weight: bold;
    // line-height: 1.5rem;
    padding-left: 0.5rem;
    &::before {
      display: inline-block;
      content: "";
      vertical-align: middle;
      .wh(0.3rem,0.3rem);
      border-radius: 50%;
      background: @theme-color;
    }
  }
  .content {
    margin: 0.45rem;
    .flex(@justify:space-around);
    p {
      .flex(@dir:column);
      position: relative;
      span:first-child {
        font-size: 0.9rem;
      }
      span:nth-child(2) {
        padding-top: 0.75rem;
        font-weight: 100;
        font-size: 0.6rem;
      }
      u {
        position: absolute;
        height: 100%;
        width: 1px;
        background: #ccc;
        left: 140%;
      }
    }
    p:last-child {
      u {
        display: none;
      }
    }
    .echarts {
      width: 5rem;
      height: 5rem;
    }
  }
}
</style>