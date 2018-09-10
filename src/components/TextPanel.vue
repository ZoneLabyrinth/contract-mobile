<template>
  <div class="text-wrapper">
      <div class="title">
          合同应收
      </div>
      <div class="content">
          <p v-for="(item,index) in data" :key="index">
             <span>{{item.amount | formatCash}}</span> 
             <span>{{item.name}}</span>
             <u></u>
          </p>
          <slot name="chart"></slot>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default: function() {
        let arr = [
          { name: "合同金额", amount: 888888 },
          { name: "合同金额", amount: 888888 },
        //   { name: "合同金额", amount: 888888 },
        ];
        return arr;
      }
    }
  },

  mounted() {},

  methods: {},

  components: {}
};
</script>
<style lang='less' scoped>
@import url("../assets/styles/mixin.less");
.text-wrapper {
  margin: 0.45rem;
  padding: 1rem 0;
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
      span:nth-child(2){
        padding-top: 0.75rem;
        font-weight: 100;
        font-size: 0.6rem;
      }
      u{
          position: absolute;
          height: 100%;
          width: 1px;
          background: #ccc;
          left: 140%;
      }
    }
    p:last-child{
        u{
            display: none;
        }
    }
  }
}
</style>