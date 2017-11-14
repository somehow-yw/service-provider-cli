<template>
  <div id="providersMain">
    <v-search></v-search>
    <!--------------------------👆搜索条----------------------------------->
    <searchShow></searchShow>
    <!--------------------------👆搜索弹出层----------------------------------->
    <v-nav></v-nav>
    <!--------------------------👆导航条----------------------------------->
    <div class="tabbar">
      <div class="tabbar-item border-1px">
      <router-link to="/grounding">上架供应商</router-link>
      </div>
      <div class="tabbar-item border-1px">
      <router-link to="/undercarriage">下架供应商</router-link>
      </div>
    </div>
    <router-view/>
    <!--------------------------👆上架、下架供应商选项卡----------------------------------->
  </div>

</template>

<script type="text/ecmascript-6">
  import search from './search/search.vue'
  import nav from './nav/nav.vue'
  import searchShow from './searchShow/searchShow.vue'
  export default {
    name: 'app',
    components: {
      'v-search': search,
      'v-nav': nav,
      searchShow
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
