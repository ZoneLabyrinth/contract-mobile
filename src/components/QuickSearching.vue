<template>
  <div class="searching-wrapper">
    <div class="group">
      <div class="searching-box">
        <i class="iconfont icon-find"></i>
        <input class="searching" v-model="keyword" @input="handlerInput" placeholder="搜索" >
        <i class="iconfont icon-cancel" v-show="show" @click="clear"></i>
      </div>
      <!-- <span>取消</span> -->
    </div>
    <!-- 有数据且输入框中输入了 -->
    <ul v-if="showList">
      <li v-for="(item,index) in data" :key="index" @click="getList(item.name)">{{item.name}}</li>
      <li style="text-align:center" v-if="data.length === 0">暂无数据</li>
    </ul>
  </div>
</template>

<script>
import { Masker, XInput, Group } from "vux";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      show: false,
      keyword: "",
      data: [],
      list: [],
      showList: false
    };
  },

  mounted() {
    this.getList();
  },
  computed: {
    ...mapGetters(["getSearchDate", "getUserInfo"])
  },
  methods: {
    getList(name) {
      this.$emit("keyword", name);
      this.showList = false;
      this.keyword = name;
      this.data.length = 0;
    },

    //查找列表
    searchingList() {
      if (this.keyword === "") {
        this.data = [];
        this.showList = false;
      } else {
        this.showList = true;
        this.axios
          .get(
            `${this.api.searchingList}?ddate_td=${
              this.getSearchDate
            }&push_name=${this.getUserInfo.email}&customer=${this.keyword}`
          )
          .then(result => {
            if (result.data.flag === 0) {
              this.data = result.data.data.data;
            }
          })
          .catch(err => {});
      }
    },
    clear() {
      this.keyword = "";
      this.$emit("keyword", "");
      this.data.length = 0;
      this.showList = false;
    },
    handlerInput() {
      this.debounce(this.searchingList, 1000)();
    },
    debounce(method, delay) {
      var timer = null;
      return function() {
        var context = this,
          args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
          method.apply(context, args);
        }, delay);
      };
    }
  },

  watch: {
    keyword(val) {
      if (val) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },

  components: {
    Group,
    XInput,
    Masker
  }
};
</script>
<style lang='less' scoped>
@import url("../assets/styles/mixin.less");
.searching-wrapper {
  height: 2rem;
  .group {
    height: 2rem;
    .searching-box {
      width: 90%;
      display: inline-block;
      margin: 0.25rem 0.5rem;
      padding: 0 0.5rem;
      border: 1px solid #ccc;
      .borderRadios(0.25rem);
      .searching {
        @diff: 2rem;
        width: 80%;
        height: 1.5rem;
      }
      i {
        vertical-align: middle;
      }
      i:last-child {
        position: relative;
        right: -1rem;
      }
    }
  }
  ul {
    width: 100%;
    // border: 1px solid #ccc;]
    background: #fff;
    position: relative;
    z-index: 9999;
    opacity: 1;
    max-height: 8rem;
    overflow-y: auto;
    li {
      width: 90%;
      font-size: 0.7rem;
      margin-left: 0.5rem;
      line-height: 1.5rem;
      border: 1px solid #ccc;
      border-bottom: 0;
      padding-left: 1.5rem;
      &:last-child {
        border-bottom: 1px solid #ccc;
      }
    }
  }
  // .mask{
  //   // border-radius: 0.25rem;
  //   background: #fff;
  //   position: fixed;
  //   z-index: 999;
  //   opacity: 0.5;
  //   width: 100%;
  //   height: 100%;
  // }
}
</style>