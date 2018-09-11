<template>
  <div class="card-wrapper">
      
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  mounted(){},

  methods: {},

  components: {},
}

</script>
<style lang='less' scoped>
@import url('../assets/styles/mixin.less');

.card-wrapper{
    @diff: 0.45rem;
    margin: 0.5rem 0.45rem;
    width: calc(~'100vw-@{diff}');
    height: 2rem;
    border: 1px solid #ccc;

}

</style>