<template>
     <div class="user-info">
       <p>
         <i class="iconfont icon-user"></i>
         <span>{{name}}</span>
       </p>
     </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },

  mounted() {},

  methods: {},

  components: {}
};
</script>
<style lang='less' scoped>
.user-info {
  height: 2rem;
  // line-height: 2rem;
  p {
    height: 2rem;
    line-height: 2rem;
    padding-left: 0.9rem;
    i {
      font-size: 0.9rem;
      vertical-align: middle;
      color: @theme-color;
    }
    span {
      font-size: 0.7rem;
      font-weight: bold;
    }
  }
}
</style>