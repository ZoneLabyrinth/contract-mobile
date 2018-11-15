<template>
  <div class="receivable-wrapper" v-if="authority">
      <div class="title">
        <span>订阅号推送</span>
      </div>
      <div class="content-wrapper">
         <group>          
           <selector title="推送内容" :options="option" v-model="data.title"></selector>
           <!-- <x-input title="推送标题" text-align='right' v-model="data.title"></x-input> -->
           <!-- <x-input title="推送说明" text-align='right' v-model="data.desc"></x-input> -->
          <selector title="推送公司" :options="list" v-model="data.pkorg"></selector>
          <selector title="推送职位" :options="dutys" v-model="data.duty"></selector>
          <!-- <selector title="推送人员" :options="list" v-model="defaultValue"></selector> -->
           <!-- <x-input title="推送间隔" placeholder="天" direction='rtl' text-align='right' v-model="value"></x-input> -->
        <!-- </group>
         <group :title="'Default format: YYYY-MM-DD'"> -->
          <datetime
            v-model="data.date"
            title="推送时间"></datetime>
        </group>
      </div>
      <x-button class="submit" :disabled='!disabled' :show-loading='load' @click.native="submit">推送</x-button>
  </div>
</template>

<script>
import { Selector, Group, XInput, Datetime, XButton } from "vux";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      load: false,
      list: [],
      value: "",
      dutys: [],
      option: ["应收账款-个人汇总", "应收账款-部门汇总", "应收账款-明细"],
      data: {
        title: "应收账款-个人汇总",
        desc: "",
        detailUrl: "",
        pkorg: "",
        duty: "",
        date: ""
      }
    };
  },

  computed: {
    ...mapGetters(['getUserInfo']),
    disabled() {
      return (
        this.data.title !== "" &&
        this.data.pkorg !== "" &&
        this.data.duty !== "" &&
        this.data.date !== ""
      );
    },
    authority(){
      return this.getUserInfo.email==='sunpanc@yonyou.com' || this.getUserInfo.email === 'wangxrc@yonyou.com';
    }
  },

  mounted() {
    this.getOrg();
  },

  methods: {
    getOrg() {
      this.axios
        .get(`${this.api.getOrg}?tabName=${this.data.title}`)
        .then(result => {
          if (result.data.flag === 0) {
            this.list = result.data.data;
          }
        })
        .catch(err => {});
    },
    getDuty() {
      this.axios
        .get(
          `${this.api.getDuty}?tabName=${this.data.title}&pkorg=${
            this.data.pkorg
          }`
        )
        .then(result => {
          if (result.data.flag === 0) {
            console.log(result.data);
            this.dutys = result.data.data;
          }
        })
        .catch(err => {});
    },
    submit() {
      const _this = this;
      this.$vux.confirm.show({
        // 组件除show外的属性
        title: "确定推送吗",
        onCancel() {
          _this.$vux.toast.show({
            text: "已取消",
            type: "warn"
          });
        },
        onConfirm() {
          _this.load = true;
          _this.axios
            .post(`${_this.api.receivable}`, _this.data)
            .then(result => {
              _this.load = false;
              _this.$vux.toast.show({
                text: `推送成功,已推送${result.data.data}条信息`,
                type: "success"
              });
            })
            .catch(err => {
              _this.load = false;
              _this.$vux.toast.show({
                text: "推送失败",
                type: "warn"
              });
            });
        }
      });
    }
  },

  watch: {
    "data.title": {
      handler(val, oldVal) {
        this.getOrg();
      }
    },
    "data.pkorg": {
      handler(val, oldVal) {
        this.getDuty();
      }
    }
  },

  components: {
    Group,
    Selector,
    XInput,
    Datetime,
    XButton
  }
};
</script>
<style lang='less' scoped>
.receivable-wrapper {
  width: 100%;
  height: 100%;
  .title {
    line-height: 2rem;
    text-align: center;
  }
  .content-wrapper {
    // margin-bottom: 3rem;
  }
  .submit {
    position: absolute;
    bottom: 10%;
    // width: 80%;
    // left: 10%;
  }
}
</style>