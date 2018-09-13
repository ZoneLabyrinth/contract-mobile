<template>
  <div class="department-wrapper">
    <quick-searching></quick-searching>
    <app-header :nav="contract" show></app-header>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/nav";
import QuickSearching from '@/components/QuickSearching' 
export default {
  name: "App",
  data() {
    return {
      contract: [
        { url: "/detail/before", name: "2016年以前" },
        { url: "/detail/after", name: "2016年" },
        { url: "/detail/last", name: "2017年" },
        { url: "/detail/date", name: "2018年" }
      ],
    };
  },
  components: {
    AppHeader,
    QuickSearching
  },
};
</script>

<style lang="less" scoped>
.view {
  @diff: 4.2rem;
  height: calc(~"100vh - @{diff}");
  overflow-y: auto;
}
</style>
