<template>
  <div class="department-wrapper">
    <app-header :nav="contract"></app-header>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/nav";
export default {
  name: "App",
  data() {
    return {
      isContract: true,
      contract: [
        { url: "/personal/normal", name: "正常合同" },
        { url: "/personal/termination", name: "合同终止" },
        { url: "/personal/pause", name: "合同暂停" },
        { url: "/personal/total", name: "合计" }
      ],
    };
  },
  components: {
    AppHeader
  },
  mounted() {
    this.isContract = false;
  }
};
</script>

<style lang="less" scoped>
.view {
  @diff: 2.2rem;
  height: calc(~"100vh - @{diff}");
  background: #f5f5f5;
  overflow-y: auto;
}
</style>
