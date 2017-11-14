<template>
  <div class="dcanmou_modal_shade">
      <div id="shopDetail">
          <span class="icon icon-cha" @click="close"></span>
          <div class="shopHead">
              <p class="shop_img"></p>
              <p class="shop_name">豪杰食品 <i class="iconfont icon-unfavourite"></i></p>
              <p class="shop_level"><i class="iconfont icon-medal"></i></p>
              <div class="btns">
                <div class="dcm_so_btn">上架</div>
                <div class="dcm_so_btn">下架</div>
                <div class="dcm_so_btn">改价</div>
              </div>
          </div>
          <div class="tabBar">
               <Tabs :animated="false">
                    <!-- 店铺商品 -->
                    <TabPane label="店铺商品">
                        <div class="shop_goods">
                            <div class="btns" style="margin-left:30px;margin-top:15px;display:inline-block" @click="checkType">
                                <p class="dcm_so_btn  checked">全部</p>
                                <p class="dcm_so_btn" >毛肚</p>
                                <p class="dcm_so_btn"  >牛筋</p>
                                <p class="dcm_so_btn" >鸭肠</p>
                            </div>
                            <Checkbox @on-change="checkAll">全选</Checkbox>
                            <div class="shop_goods_info">
                                <ul class="product-list">
                                    <li class="product-item">
                                        <div class="item-info">
                                            <div class="item-img"><img src="http://img1.imgtn.bdimg.com/it/u=421905016,4050374065&fm=27&gp=0.jpg"></div>
                                            <div class="item-des">
                                                <p>奥卓鸡胸200g-300g，散装rrr，颜色偏黄，仔是几十块</p>
                                                <div class="putaway-price"><span>￥<input type="number">/件 <span>销量: 120</span></span></div>
                                            </div>
                                        </div>
                                        <div name="btnChecked" @click="showGoodsDeatail" class="checked"><i class="icon icon-checked" @click="checkGood"></i></div>
                                    </li>
                                    <li class="product-item">
                                        <div class="item-info">
                                            <div class="item-img"><img src="http://img1.imgtn.bdimg.com/it/u=421905016,4050374065&fm=27&gp=0.jpg"></div>
                                            <div class="item-des">
                                                <p>奥卓鸡胸200g-300g，散装，颜色偏黄，仔是几十块</p>
                                                <div class="putaway-price"><span>￥<input type="number">/件 <span>销量: 120</span></span></div>
                                            </div>
                                        </div>
                                        <div name="btnChecked" class="checked"><i class="icon icon-checked" @click="checkGood"></i></div>
                                    </li>
                                    <li class="product-item">
                                        <div class="item-info">
                                            <div class="item-img"><img src="http://img1.imgtn.bdimg.com/it/u=421905016,4050374065&fm=27&gp=0.jpg"></div>
                                            <div class="item-des">
                                                <p>奥卓鸡胸200g-300g，散装，颜色偏黄，仔是几十块</p>
                                                <div class="putaway-price"><span>￥<input type="number">/件 <span>销量: 120</span></span></div>
                                            </div>
                                        </div>
                                        <div name="btnChecked" class="checked"><i class="icon icon-checked" @click="checkGood"></i></div>
                                    </li>
                                    <li class="product-item">
                                        <div class="item-info">
                                            <div class="item-img"><img src="http://img1.imgtn.bdimg.com/it/u=421905016,4050374065&fm=27&gp=0.jpg"></div>
                                            <div class="item-des">
                                                <p>奥卓鸡胸200g-300g，散装，颜色偏黄，仔是几十块</p>
                                                <div class="putaway-price"><span>￥<input type="number">/件 <span>销量: 120</span></span></div>
                                            </div>
                                        </div>
                                        <div name="btnChecked" class="checked"><i class="icon icon-checked" @click="checkGood"></i></div>
                                    </li>
                                    <li class="product-item">
                                        <div class="item-info">
                                            <div class="item-img"><img src="http://img1.imgtn.bdimg.com/it/u=421905016,4050374065&fm=27&gp=0.jpg"></div>
                                            <div class="item-des">
                                                <p>奥卓鸡胸200g-300g，散装，颜色偏黄，仔是几十块</p>
                                                <div class="putaway-price"><span>￥<input type="number">/件 <span>销量: 120</span></span></div>
                                            </div>
                                        </div>
                                        <div name="btnChecked" class="checked"><i class="icon icon-checked" @click="checkGood"></i></div>
                                    </li>
                                    <li class="product-item">
                                        <div class="item-info">
                                            <div class="item-img"><img src="http://img1.imgtn.bdimg.com/it/u=421905016,4050374065&fm=27&gp=0.jpg"></div>
                                            <div class="item-des">
                                                <p>奥卓鸡胸200g-300g，散装，颜色偏黄，仔是几十块</p>
                                                <div class="putaway-price"><span>￥<input type="number">/件 <span>销量: 120</span></span></div>
                                            </div>
                                        </div>
                                        <div name="btnChecked" class="checked"><i class="icon icon-checked" @click="checkGood"></i></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabPane>
                     <!-- 店铺商品end -->
                    <TabPane label="店铺详情">
                        <ul class="shop_text">
                            <li><p><i class="iconfont icon-shijian"></i><span>入驻时长：</span>一年</p></li>
                            <li style="border-bottom:10px solid #e8e8e8">
                                <p><i class="iconfont icon-iconfont31quanbushangpin"></i><span>在售商品：<span class="inner_txt">123</span></span>
                                <span>近期已售：</span>111件</p></li>
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
                </Tabs>
             
            
          </div>
      </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data () {
      return {
          checkedBtns: true
      };
  },
  methods: {
      checkType (e){
          let node = e.target,
                    html = e.target.innerText;
                    if (node.nodeName != 'P') {
                    return;
                }
                if (html == '全部') {
                    if (e.target.className.indexOf('checked') == -1) {
                        for (let i = 0; i < e.target.parentNode.children.length; i++) {
                            if (e.target.parentNode.children[i].innerText != '全部') {
                                e.target.parentNode.children[i].className = 'dcm_so_btn';
                            }
                            e.target.className = 'dcm_so_btn checked';
                        }
                    } else {
                        return;
                    }
                } else {
                        for (let i = 0; i < e.target.parentNode.children.length; i++) {
                            if (e.target.parentNode.children[i].innerText == '全部') {
                                e.target.parentNode.children[i].className = 'dcm_so_btn';
                            }
                        }

                        if (e.target.className.indexOf('checked') == -1) {
                            e.target.className = 'dcm_so_btn checked';
                        } else {
                            e.target.className = 'dcm_so_btn';
                        }
                }
      },
      ...mapMutations({showGoodsDeatail: 'openGoodsDetail'}),
      close () {
          this.$store.state.shopDetailModal = false;
      },
      checkGood: function (e) {
                let target = e.target.parentNode;

                if (target.className.indexOf('active') != -1) {
                    target.className = 'checked'
                    e.target.className = 'icon icon-checked';
                } else {
                    target.className = 'checked active';
                    e.target.className = 'icon icon-checked active';
                }
        },
        checkAll: function (status) {
                let nodes = document.getElementsByName('btnChecked');

                if(status){
                    for(let i = 0; i<nodes.length; i++){
                        nodes[i].className = 'checked active';
                        nodes[i].children[0].className = 'icon icon-checked active'
                    }
                }else{
                    for(let i = 0; i<nodes.length; i++){
                        nodes[i].className = 'checked';
                        nodes[i].children[0].className = 'icon icon-checked'
                    }
                }
        }
      
            
        
  }
}
</script>
<style lang="less" >
#shopDetail{width: 920px;
    height: 830px;
    position: absolute;
    overflow-y: auto;
    left: 50%;
    margin-left: -460px;
    line-height: 30px;
    background: #ffffff;
    top: 50%;
    margin-top: -415px;
    .shop_goods{
        .btns{
            
            .dcm_so_btn{
                background: #fff;
                color: #45c8dc;
                border: 1px solid #45c8dc;
            }
            .checked{
                background: #45c8dc;
                color: #fff;
            }
        }
    }
    .icon-cha{position: absolute;right: 10px;height: 10px;color: #62d5d5;font-size: 17px;}
    .shopHead{
        .btns{position: absolute;right: 30px;top: 50px;
            .dcm_so_btn{width: 70px;height: 30px;border: none;line-height: 30px;}
        }
        background-color: #eeeeee;
        .shop_img{
            width: 90px;
            height: 90px;
            border-radius: 90px;
            border: 1px solid red;
            background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1885148145,725800906&fm=15&gp=0.jpg);
            position: absolute;
            top: 22px;
            left: 30px;
        }
        .shop_name{font-size: 20px; color: #333333; margin-left: 140px;padding-top:35px;
            .icon-unfavourite{padding-left: 20px;font-size: 26px;color: #f2582a;}
        }
        .shop_level{padding-bottom: 35px;}
       .icon-medal{font-size: 20px; color: #333333;font-size: 26px; color: #ff8400;margin-left: 140px;}
    }

    .shop_goods_info{
        padding: 0 30px;padding-right: 1px;
        .product-list {
            .product-item{margin: 20px 18px 0 0;height: 250px;}
        }
    }
   .ivu-tabs .ivu-tabs-bar{margin-bottom: 0px;}
   .tabBar{
       line-height: 1
   }
}
</style>
