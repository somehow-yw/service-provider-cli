import Vue from 'vue';
import Vuex from 'vuex';
import editor from './modules/editor';
import loader from './modules/loader';
import middleware from './modules/middleware';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        showPutaway: false,
        showType: false,
        shopDetailModal: false,
        goodsDetailModal: false,
        noticeShow: false
    },
    modules: {
      editor,
      loader,
      middleware
    },
    mutations: {
        closeGoodsDetail (state) {
            // 关闭商品详情
            state.goodsDetailModal = false;
            state.shopDetailModal = true;
        },
        openGoodsDetail (state) {
            // 打开商品详情
            state.goodsDetailModal = true;
            state.shopDetailModal = false;
        },
        openPriceChangeNocetice (state) {
            state.noticeShow = !state.noticeShow;
        }
    }
});

export default store;
