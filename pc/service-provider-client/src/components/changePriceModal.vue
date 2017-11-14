<template>
  <div class="dcanmou_modal_shade" id="dcanmou_modal_shade" v-if="changePriceModel">
            <div class="dcanmou_modal" >
                <p class=" modal_title">改价方式</p>
                <i class="iconfont icon-icon dcanmou_close" @click="changePriceModel=!changePriceModel"></i>
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
</template>
<script>
export default {
    data () {
        return{
            changePriceModel: true,
            add: [1,2]
        };
    },
    methods:{
        addRuler () {
                var num = 1;
                this.add.push(num);
            }
    }
}
</script>
