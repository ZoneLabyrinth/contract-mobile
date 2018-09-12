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
        { url: "/department/normal", name: "正常合同" },
        { url: "/department/termination", name: "合同终止" },
        { url: "/department/pause", name: "合同暂停" },
        { url: "/department/total", name: "合计" }
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
  overflow-y: auto;
}
</style>
