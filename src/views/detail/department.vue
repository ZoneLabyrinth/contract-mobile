<template>
  <div class="detail-wrapper">
    <user-info :name="name"></user-info>
    <card-cell></card-cell>
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo'
import CardCell from '@/components/CardCell'
export default {
  data () {
    return {
      name:'王丽'
    };
  },

  mounted(){},

  methods: {},

  components: {
    UserInfo,
    CardCell
  },
}

</script>
<style lang='less' scoped>
</style>