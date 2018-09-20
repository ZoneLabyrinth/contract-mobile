<template>
  <card class="card-wrapper">
    <div slot="content" class="card-demo">
        <div class="card-demo-flex">
          <p>
              <span>{{name[0].name}}：</span>
              <span>{{data[name[0].code]}}</span>
          </p>
          <p>
              <span>{{name[1].name}}： </span>
              <span>{{data[name[1].code]}}</span>
          </p>
        </div>
        <transition name="fade"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave">
          <div class="card-demo-flex" v-if="show">
              <p v-for="(item,index) in name" :key="index" v-if="index!==0&&index!==1">
                <span>{{item.name}}： </span>
                <span>{{data[item.code]}}</span>
              </p>
              <p></p>
          </div>
        </transition>
          <!-- <transition name="fade">
          <div class="card-demo-flex" v-if="show">
              <p v-for="(item,index) in name" :key="index" v-if="index!==0&&index!==1">
                <span>{{item.name}}： </span>
                <span>{{data[item.code]}}</span>
              </p>
              <p></p>
          </div>
        </transition> -->
    </div>
    <div slot="footer" class="card-footer"  @click="handlerMore()">
      <p>
          <i class="iconfont icon-z044" :style="rotate"></i>
          <span>{{show?'收起':'查看更多'}}</span>
      </p>
    </div>
  </card>
</template>

<script>
import { Card } from "vux";
export default {
  data() {
    return {
      show: false,
      more: "查看更多"
    };
  },

  props: {
    data: {
      type: Object,
      required: true
    },
    name: {
      type: Array,
      required: true
    }
  },
  computed: {
    rotate() {
      return this.show ? "transform:rotate(180deg)" : "transform:rotate(0deg)";
    }
  },

  mounted() {},

  methods: {
    handlerMore() {
      this.show = !this.show;
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = "0rem";
    },
    enter: function(el, done) {
      Velocity(el, { opacity: 1, height: "8.25rem" }, { duration: 300 });
      Velocity(el, { complete: done });
    },
    leave: function(el, done) {
      Velocity(
        el,
        { opacity: 0, height: "0rem" },
        { duration: 300 },
        { complete: done }
      );
      Velocity(el, { complete: done });
    }
  },

  components: {
    Card
  }
};
</script>
<style lang='less' scoped>
@import url("../assets/styles/mixin.less");

.card-wrapper {
  @diff: 0.45rem;
  margin: 0.5rem 0.45rem;
  width: calc(~"100vw-@{diff}");
  .borderRadios(0.25rem);
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.03);
  font-size: 0.6rem;
  touch-action: none;
  .card-demo {
    padding: 0.6rem;
    .card-demo-flex {
      .flex(@justify:space-around,@wrap:wrap);
      p {
        .flex(@justify:flex-start,@wrap:nowrap);
        width: 7rem;
        font-size: 0.6rem;
        position: relative;
        padding: 0.1rem 0;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:hover {
            overflow: visible;
          }
        }
      }
      p:nth-child(odd) {
        &::after {
          content: "";
          height: 0.5rem;
          width: 1px;
          background: #ccc;
          position: absolute;
          left: 7.5rem;
        }
      }
      &:last-child {
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #edeef0;
      }
    }
    // .fade-enter-active,
    // .fade-leave-active {
    //   height: 8rem;
    //   transition: all 0.3s ease;
    // }
    // .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    //   height: 0rem;
    //   opacity: 0;
    // }
  }
  .card-footer {
    text-align: center;
    padding: 0 0.6rem 0.55rem;
    p {
      position: relative;
      i {
        font-size: 0.4rem;
        color: #fa7070;
        transform: scale(0.5);
        -webkit-transform: scale(0.5);
        display: inline-block;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>