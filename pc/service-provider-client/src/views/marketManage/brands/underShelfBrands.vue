<template>
  <div id="underShelfBrands">
     <div class="actions_area">
                        <button class="dcm_so_btn" @click="putBrands">上架</button>
        </div>
      <Table border :loading="loading" @on-selection-change="selectBrands" :columns="underShelfcolumns" :data="data"></Table>
                <div class="pageBar">
                    <Page :current="current"  :total="total" simple></Page>
                </div>
     <!-- 改价内容弹窗 -->
    <div class="dcm_price_info" id="dcm_price_info">
        <div class="sanjiao"></div>
    </div>
    <!-- 上架提示框 -->
    <div class="dcanmou_modal_shade" id="dcanmou_modal_shade" v-if="changePriceModel">
        <!-- 上架是否改价提示 -->
        <div class="dcanmou_modal changeTips">
            <p class=" modal_title">改价提醒</p>
            <i class="iconfont icon-icon dcanmou_close" @click="changePriceModel=!changePriceModel"></i>
            <p>   亲！您要上架的品牌还没进行加价，</p>
            <p>为了避免您的损失，请及时改价</p>
            <p class="btns">
                                <button class="dcm_so_btn" @click="surechange=!surechange">去改价</button>
                                <button class="dcm_so_btn" @click="directPutShelf">直接上架</button>
                            </p>
        </div>
        <!-- 改价内容 -->
        <div class="dcanmou_modal" v-if="surechange">
                <p class=" modal_title">改价方式</p>
                <i class="iconfont icon-icon dcanmou_close" @click="surechange=!surechange"></i>
                <Tabs>
                    <TabPane label="按元改价" icon="checkmark-circled">
                        <div class="rmbchange">
                            <span>价格增加 </span>
                            <Button type="primary" shape="circle" icon="plus"></Button>
                            <div class="iptPrice">
                                <input/>
                                <span>元</span>
                            </div>
                            <Button type="primary" shape="circle" icon="minus"></Button>
                            <p class="btns">
                                <button class="dcm_so_btn">确定</button>
                                <button class="dcm_so_btn">取消</button>
                            </p>
                        </div>
                    </TabPane>
                    <TabPane label="按百分比改价" icon="checkmark-circled">
                        <div class="rmbchange">
                            <span>价格增加 </span>
                            <Button type="primary" shape="circle" icon="plus"></Button>
                            <div class="iptPrice">
                                <input/>
                                <span>%</span>
                            </div>
                            <Button type="primary" shape="circle" icon="minus"></Button>
                            <p class="btns">
                                <button class="dcm_so_btn">确定</button>
                                <button class="dcm_so_btn">取消</button>
                            </p>
                        </div>
                    </TabPane>
                    <TabPane label="按区间改价" icon="checkmark-circled">
                        <div class="section">
                            <p>价格修改为</p>
                            <div class="changePriceActionArea">
                                <p class="actionInfo" v-for="item in add" :key="item">
                                    <input/> <span class="jian">-</span><input/>
                                    <Select style="width:60px">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                    <Select style="width:60px">
                                        <Option v-for="item in cityLists" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                    <input/>
                                    <span>元</span>
                                    <Icon type="ios-trash-outline"></Icon>
                                </p>
                                <p class="btns">
                                <button class="dcm_so_btn add" @click="addRuler"><Icon type="plus-circled"></Icon>添加</button>
                                <button class="dcm_so_btn">确定</button>
                                <button class="dcm_so_btn">取消</button>
                            </p>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data (){
        return {
            newTime: '2012-12-12 00:00:00',
            add: [1,2],
            switch1: true,
            loading: true,
            selectedBrands: [],
            surechange: false,
            changePriceModel: false,
            params: {type: 'under'},
            underShelfcolumns: [
              {
                        type: 'selection',
                        align: 'center',
                        width: '20%',
                        title: '全选'
                    },
                    {
                        title: '品牌名',
                        width: '40%',
                        align: 'center',
                        key: 'name',
                        render: (h, params) =>{
                            return h('div', [
                                h('span', {
                                    on: {
                                        mouseover: (e) => {
                                            this.MouseHover (e, params.row.name)
                                        },
                                        mouseout: (e) => {
                                            this.MouseOut();
                                        }
                                    }
                                } ,params.row.name)
                            ])
                        }
                    },
                     {
                        title: '上架',
                        align: 'center',
                        key: 'address',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'primary'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        background: '#45c8dc',
                                        borderColor: '#45c8dc',
                                        fontSize: '14px'
                                    },
                                    on: {
                                        click: () => {
                                            this.pushOnShelf(params.index, params.row.id)
                                        }
                                    }
                                }, '上架')
                            ]);
                        }
                    }
          ],
          data: [],
          oneGood: {index:0, id:0}
    }
  },
  methods: {
      pushOnShelf (index, id) { //单一上架
        this.changePriceModel = true;
        this.oneGood.index = index;
        this.oneGood.id = id;
        // this.data.splice(index, 1);
        // console.log(index, id)
      },
      directPutShelf () { //直接上架
        this.data.splice(this.oneGood.index, 1);
        this.changePriceModel = false;
      },
      putBrands () { //多个上架
        var vm = this;
        vm.selectedBrands.forEach(function(selections){
            vm.data.forEach(function(element, index){
                if(selections == element.id) {
                        vm.data.splice(index, 1);
                        console.log('对应的index', index);
                    }
            })
        })
      },
      MouseHover (e,name) {
          var priceInfo = document.getElementById('dcm_price_info');
          priceInfo.style.display = 'block';
          priceInfo.style.top=e.clientY+10+ 'px';
          priceInfo.style.left=e.clientX-15+ 'px'
      },
      MouseOut () {
          var priceInfo = document.getElementById('dcm_price_info');
          priceInfo.style.display = 'none';
      },
      selectBrands (e) { //多选
          this. selectedBrands = [];
          e.forEach(function(element) {
               this. selectedBrands.push(element.id);
          }, this);
      },
      addRuler () {
                var num = 1;
                this.add.push(num);
            }
  },
  created () {
      this.getBrands ();
  }

}
</script>
<style lang="less" >
@checkcolor: #12b571; @bgcolor: #45c8dc;
  #underShelfBrands{
    padding-right: 50px;
    margin-left: 30px;margin-top: 12px;
    .cancel{width:70px}
    .dcm_so_btn{margin-right: 20px;}
    .txt{padding-right: 60px;padding-left: 20px;}
    .ivu-switch-checked { border-color: @checkcolor ; background-color: @checkcolor ;}
    .ivu-checkbox-checked .ivu-checkbox-inner {border-color: @bgcolor;background-color: @bgcolor;}
    .ivu-checkbox-inner{border-color: @bgcolor;}
    tr.ivu-table-row-hover td{background-color:#fff}
    .changeTips{
        .btns{margin-top: 30px;}
        .modal_title{font-size: 18px;margin: 22px 0;}
        p{font-size: 16px;text-align: center;line-height: 32px;}
    }
  }
</style>
