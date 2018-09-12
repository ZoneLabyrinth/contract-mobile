<template>
  <div class="detail-wrapper">
    <user-info :name="name"></user-info>
    <card-cell v-for="i in 10" :data="data"></card-cell>
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo'
import CardCell from '@/components/CardCell'
export default {
  data () {
    return {
      name:'王丽',
      data:[
        {
          name:'合同编号',
          value:"S0000001"
        },
        {
          name:'合同编号',
          value:"S0000001"
        },
        {
          name:'合同编号',
          value:"S0000001"
        },
        {
          name:'合同编号',
          value:"S0000001"
        },
        {
          name:'合同编号',
          value:"S0000001"
        },
        {
          name:'合同编号',
          value:"S0000001"
        },
        {
          name:'合同编号',
          value:"S0000001"
        },
        {
          name:'合同编号',
          value:"S0000001"
        },
        {
          name:'合同编号',
          value:"S0000001"
        },
      ]
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