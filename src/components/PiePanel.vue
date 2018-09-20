<template>
  <div class="text-wrapper">
      <div class="title" v-if="title">
          {{title}}
      </div>
      <div class="content" ref="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    title: ""
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
    .echarts {
      width: 100%;
      max-height: 15rem;
    }
  }
}
</style>