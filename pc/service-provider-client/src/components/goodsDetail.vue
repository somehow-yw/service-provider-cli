<template>
 <div class="dcanmou_modal_shade" v-if="$store.state.goodsDetailModal">
  <div id="goodsDetail">
      <span class="icon icon-cha" @click="close"></span>
      <p class="goodstitile"> 商品详情</p>
      <div class="goodsImgs">
          <img src="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"/>
          <img src="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"/>
          <img src="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"/>
          <img src="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"/>
      </div>
      <div class="goods_title">
          <p>奥卓鸡胸奥卓鸡胸奥卓鸡胸奥卓鸡胸奥卓鸡胸</p>
           <div class="putaway-price">
               <span>￥<input type="number">/件 <del>120</del></span>
               <span>已销售：32件</span>
               </div>
           <button class="dcm_so_btn">下架</button>
      </div>
      <div class="gray"></div>
      <!--TAB选项卡 -->
      <Tabs :animated="false">
        <TabPane label="商品详情">
            <span>
                货好，纯干，大鸡胸，去油修边质量棒修边质量棒棒哒；修边
                质量棒棒哒；修边质量棒棒哒；棒哒；货去油修边质量棒棒哒；，去
                油修边质量棒棒哒；纯干，去油修边质量棒棒哒；大鸡胸，去油修边质量棒棒哒货好，
                纯干，大鸡胸，去油修边质量棒棒哒
                </span>
            <p style="line-height:50px;font-size:16px;">商品图片</p>
            <div class="goodsImgs">
                <img src="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"/>
                <img src="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"/>
                <img src="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"/>
                <img src="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"/>
                <img src="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"/>
                <img src="https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"/>
            </div>
        </TabPane>
        <TabPane label="供应商">
            <ul class="shop_text">
                            <li><p><i class="iconfont icon-dianpu1"></i><span>店铺名称：<span class="inner_txt">123</span></span><i class="iconfont icon-shijian"></i><span>入驻时长：</span>一年</p></li>
                            <li style="border-bottom:10px solid #e8e8e8"><p><i class="iconfont icon-iconfont31quanbushangpin"></i><span>在售商品：<span class="inner_txt">123</span></span><span>近期已售：</span>111件</p></li>
                            <li><p><i class="iconfont icon-zuobiao"></i><span>发货地址：</span>郫县</p></li>
                            <li><p><i class="iconfont icon-dianpu1"></i><span>店铺地址：</span></p></li>
                            <li><p><i class="iconfont icon-star-outline"></i><span>主营业务：</span></p></li>
                            <li style="border-bottom:10px solid #e8e8e8">
                                <p><i class="iconfont icon-huangguan"></i><span>销售品牌</span></p>
                                <p class="brands"><span>海宁网</span><span>海宁网</span><span>海宁网</span></p>
                            </li>
                            <li><p><i class="iconfont icon-pingjia"></i><span>店铺评价：</span></p></li>
                            <li><p class="no_border"><span class="pd_rt_20">发货速度</span><span class="icon"><i class="iconfont icon-star-outline"></i></span><span>很好</span></p></li>
                            <li><p class="no_border"><span class="pd_rt_20">货品质量</span><span class="icon"><i class="iconfont icon-star-outline"></i></span><span>好</span></p></li>
                            <li><p class="no_border"><span class="pd_rt_20">卖家态度</span><span class="icon"><i class="iconfont icon-star-outline"></i></span><span>一般</span></p></li>
                        </ul>
        </TabPane>
        <TabPane label="型号规格">
            <ul class="size">
                <li><b>品名</b>去骨鸭脖</li>
                <li><b>品名</b>是</li>
                <li><b>品名</b>依法</li>
                <li><b>品名</b>东北</li>
                <li><b>品名</b>型号</li>
            </ul>
        </TabPane>
    </Tabs>
  </div>
 </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data (){
        return {

        }
    },
    methods: {
         ...mapMutations({close: 'closeGoodsDetail'})
    }
}
</script>
<style lang="less">
@bdColor:#e5e7e6;
#goodsDetail{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20%;
    margin-left: -380px;
    width: 775px;
    height: 76%;
    background: #fff;
    color: #333;
    overflow-y: auto;
    .goodstitile{
        font-size: 16px;text-align: center;line-height: 60px;
    }
     .icon-cha{position: absolute;right: 10px;height: 10px;color: #62d5d5;font-size: 17px;}
    .goodsImgs{
        padding: 0 30px;
        img{width: 158px;height: 140px;margin-right: 18px;border: 1px solid @bdColor;}
    }
    .goodsImgs img:last-child{margin-right: 0px;}
    
    .gray{width: 100%;height: 10px;background: #f6f5f5}
    .goods_title{ 
        padding: 0 30px;
        p{line-height: 40px;}
        .putaway-price {
            margin-bottom: 20px;
            del {padding: 0 30px 0 24px;}
            input{border: 1px solid @bdColor;width: 56px;margin: 0 5px;}
            span:last-child{color: #45c8dc}
            }
        .dcm_so_btn {position: absolute;right: 30px; top: 230px;width: 70px;height: 40px;}
    }
    .ivu-tabs-tabpane:first-child{padding: 0 30px;
        .goodsImgs{padding: 0;}
    }
    .ivu-tabs-nav{margin-left: 195px;}
    .ivu-tabs-tabpane:first-child {
        span {line-height: 40px;color: #5d5d5d}
        .goodsImgs img{margin-bottom: 15px;}
        .goodsImgs img:nth-child(4n){
            margin-right: 0px;
        }
    }
    .ivu-tabs-tabpane:last-child {
        .size{
            padding-left: 230px;
            padding-top: 35px;
            li{
                line-height: 35px;
                b{display: inline-block;width: 205px;font-weight: normal;color: #494949}
            }
        }
    }
}
</style>


