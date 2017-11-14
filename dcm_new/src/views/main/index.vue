<template>
  <div class="body-index">
    <div class="search">
      <div class="search-content" @click="$tool.common.jump('search')">
        <img class="search-icon"
             src="data:image/png;base64,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"/>
        <div class="search-placeholder">
          点此输入要找的货
        </div>
      </div>
    </div>
    <div class="hot-category" :style="hot_category_style">
      <div class="title">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAZCAYAAAD9ovZ9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAw9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTVBOENCMkY3ODIwMTFFN0I5NzVGNkZBQUFFMzdBRUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTVBOENCMkU3ODIwMTFFN0I5NzVGNkZBQUFFMzdBRUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMkUyMkZCMkZDQzVDREFFNkIyNjlGMzk1QTRDMTA1REYiIHN0UmVmOmRvY3VtZW50SUQ9IjJFMjJGQjJGQ0M1Q0RBRTZCMjY5RjM5NUE0QzEwNURGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cVljpQAAC5ZJREFUeNrEW2+IHEkVr7eZvWwwqK1+8Q+ok8+K0Lnz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"
          alt="">
      </div>
      <div class="list">
        <div class="item" v-for="(item , idx) in hot_category" v-if="idx < 4"
             @click="$tool.common.jump('search',{c_id:item.id})">
          <div class="item-mask">{{ item.name ? item.name : '' }}</div>
          <img v-if="item.pic_url" :src="ali_oss_cdn + item.pic_url+'@200w_90Q.jpg'">
        </div>
      </div>
      <div class="list" v-if="hot_category.length > 4">
        <div class="item" v-for="(item , idx) in hot_category" v-if="idx >= 4 && idx < 8"
             @click="$tool.common.jump('search',{c_id:item.id})">
          <div class="item-mask">{{ item.name ? item.name : '' }}</div>
          <img v-if="item.name" :src="ali_oss_cdn + item.pic_url+'@200w_90Q.jpg'" :alt="item.name">
        </div>
      </div>
    </div>
    <div class="hot-brand" :style="hot_brand_style">
      <div class="title">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAZCAYAAAD9ovZ9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAw9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEVEODdGOTA3ODIxMTFFN0I3RjNCQzA4NERFRTMwM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEVEODdGOEY3ODIxMTFFN0I3RjNCQzA4NERFRTMwM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMkUyMkZCMkZDQzVDREFFNkIyNjlGMzk1QTRDMTA1REYiIHN0UmVmOmRvY3VtZW50SUQ9IjJFMjJGQjJGQ0M1Q0RBRTZCMjY5RjM5NUE0QzEwNURGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0FY2iwAACflJREFUeNrsWk2oZMUVrnMdA+LGFiUogUhrFtFFAh0huxjoRxQVNdD+LAyKsd+IINm9txDGuIjdoiiIDNMqiILgdIKIAZV3zSZEkNi7kI1JJxB/kBEaReOMr989nlN1qupUvdv9uqffzLyFF07fn657+3adr75zzlcFiGi+277bDnWe/3DRtpeR/ZzsNX1x+NsfrPQCv7nnwS39OLJBTbMG2XF1PiLbXPKnNsT4WX11/8aSz5nodzx85En6hDYAfRpnBlD2EK+5U3sG4Xtu6m4sTGwIrm0ZLtkm0KVrHWP4Xnt1jc57dNSSm4bA78XPQvuALn123G/Z9iXw//bnfIna/fDiQw4IS3TAL8lelntwBce3s0v6fKzOW+p6M2tX58D+nJ/lZ/Wye8fi0N6Sf6HUQDi1jdypW6HDY8fTJxoPEIEAnVcCEBRgGNudhTgHIiAgAsu2b9BvtCOALOBawCB010r3fNyywDRVeBj/Fn1wu54cy/3G/OvEdnnVpeevLQOEXxgHXAbEX1Ygga0533XF6eUeDmrXAKO/R/t8a+4HpZ7cQedU2+vOyYXtbHY0KBA4hwfm8KMfUL6vwkhNwSMM453HrQr3m8HJxt/jwYUBilDQOyHE35PnFSZ5saUY4VrZX7ciEPbahkLf+7mVNdfGst8rxLRnAMkBYRuDExwIKu7dER1OvEPCKAZN9f4e6y7+vy0fMtI2ih4SlkHFIKCAlrINE1AERnwHFXKWBsJnsv/vik7JO76XOWwoVL6paL2TtSkVe8wLB43sd304GSh67y/wzjOBcGrbyAjl7kfPBpvAMRkg6fxwjA40PpwQG9DzYcuHFfDfoco3fG7hn6mZQjNOBBeHIXoP6HskFP4x1A+cXzimqJYCwiNk18jxA2SfkL15Oih46cVn+1nOkANhopzN27EaII3EOfOA0MscyPddvN/0dXJaRTqG2NNhxMfkT4UDNbqNd64a6f44CRGowJABS4WHmBP4vANVKNKhxINgcUa4muyIOv8Z2Qtkl5+BsNAVJ3fVaG5ldD46SGXXyWnsaBfjJdabWBkUJnouOCckldpRcq2gEIOR+rUT01ivQKZZQ8IU7dtpOwuCDTpuh8rFzM4RGlIdPEf2Otn/1Xdfk11AdsJfoPLzKO2+R2XkfftQQYyFCZo1TODzhwO1SdUQnWpHckzQdId7ZwQGUABIEz4U0NjHpCM73kOVCrQUM3Q9kGJ5ykBwpa1iJi45xzmbMBBuJvurAOA/ZFeQ3Uj2bwEC5wS3kv2a7AaJszpZPCz7+wQYLCx8RXYngePoHBA0apxdqhjeqYnN5UEDwtdTTOnZ0S6XaRMjcR7A5wRpwmcwAKWR5RPrMc77sINBcxCHtpOKAaBJ59Q/kQUK0HlD0DRs2VzQOypNwgKBaf9HAoKfkv1DGOGP6v8yIC5l/5E9k/XFw4odLqTd/8i+JHuL7OicPjy2R4znmP7+QQfCqakCgB+dBba47ws1FLWmoLSBoDvY8tFlkuvk8EFaGUA8BszykJA4smA0ysDGCastxRVouF+bsUKJjMDS2Ctkf5D/QXmweYLsUWEK3tjBj8kxK4u3yTErjT+hkX+77xdxFo/kO+awQTerBJZRB/sHCQgntzNnxRFqneuDBqiAbAEScgk+t+2YQTap6ghiFajYnpahNqFcA/VsT/dRrLLfERCw7yszxxAUXsFsFCqUeSC8SvY42Qfq//Hov4XsnwKGNbJL5DsOE2+QferDgZKbp8QKfM8XdFzNAEFzQTWvMwMIQ6UBHJRkEXRWnyZxmKiHTi5MR6MJuUSNIrmr7kfPHGWBivLBZRqFVixteMBEqrSvV6ShzAOhksSQafi8rNb/sVi+3ZR47PkPf0eOf5r2rDo+RDZvAuL4goJRZ0Yie0yAeVCSxSb1ZlMrh270YZIw8oinJJIqHpvgNWIpqdRHYQlx7NgDvgj5Q6VKSZa1QSejQxrxAxRnS37QDbmE/x2Ww6ccGty8CT1jU1cNHAZ+T/ae1PHtJfvjKQLBdcIi7xAoPprBBi0Z0cMZgpKWf5tzxJ3OAWKEDmv4UTmEmJxhFZJEQGSaXjPg9A1Qer8DTcoMwIMRTB90cqnLUSkBk0kqP+ID69gEsunLWikw/QQZhSKzduT6i0Z5+ciscP8KfXKL7I/MEZP4R0cCiMYSbNDP9ITODICc9WTy1BRnzB3EagLVLKROAEM1YCDRFfTEVZHoBp4tglOzXKJGaIJcdLL7Ed27DkqT0UB4cUUg8HaC2OBvC7Tr1bDOWDmyDgiTPSavOGRceU6AoOt0pfZE3SC2h1o1MK//+RLuUiOz+QSwM40IbT2NDTw97W5oUJv3bdhy4lRJoOrHcGTDVK2g9K7MJ1yyQr/86TTvG0ncn0hIaGXfTRZ4xjmpJr6ZYiIbU9/yPEPfqXqwFUZhpv4FhyCHC6CwUVEibPUHr0VkTCBMIcleAIoxu6oSOT5Gjm/KQya8VgE4PxAwubwVZyqLfya7Z4V+GS7RTtP4QDl7kiWD4zk6QyMDzNlPFnd09h1Hda0UHCTobM4hn2DKBKpQMvoksNIMpIAYFqVwdWVzFy9P3w6109uzJeZ7OZR7dXOJ/uD2n1NY+PuC7Sc19D+qYYIym3fwIz9fqDJekDX2nxF2nOLnR3lwrJeFUcnEIT/Qi1jiaqbU8X71Eu5em6AnjlLNoc2yM/1OL04sUd8gtkDYoYjO5xlIc/fLPFuAgxwIv5LSEJbsD27/DVUOHxEYPl6wNGzXMEKvhjUa2fWxfLehADI+V/MQ21NM1cPgsXRSye4LCJVCmGUMK5MwYQ+jEss4Mwnpcja5ByPjkMOrXlQeLXU07ZSzD0l+kQrPObhp6PL4vd/v50DgsHDnCv3yNtnHe0w0NTI2mCgnjlXZ2BFHDzMgtFUJ2lXlZmsfwkNd2dqsYa4IhMrFa1UJNGUNYyvo/M4xQ6jQ5Koh1RQtGaVNLR2jlYv9XIX3fv0CEzSpAhnaisoUc5I6wFnl0RzKFp/eJXYmt86c+QM/0nXbQRY2OpIflAoIHiCjfXi3earnuskW127vGNXZtsO7wO+VLg0bgNznJ5sitWPPJOsT7KBdL/j/+XAhiSGq0FFoOvbJpIGRS1ZRhSh0vAOsJ7j+cu8Am7yM7a3Dl5V1OcLZ2ObNKJYZENrS8UMFhIYCSO7EM1U5TAQEu8LPdAfTAOnXDYSwAAOeSApVvxaP9LpDPzuJvNLYDPLwACbJByZGy8oEFCy8aBX7M0s8uYrphnPAPlSzk8UzuklYaNSwgAZCmUnKvk275nouNDVqksZSgel0QbA2i22mFfoVVWoBa6Bd/m7TDeywGmjkigeME0QeIDyiETch0Iaerra3j8H952EECQxsuVqZMealZLLuER2AEAfuHkxqzm8FGAAFajtjTve5PgAAAABJRU5ErkJggg=="
          alt="">
      </div>
      <div class="list">
        <div class="item" v-for="(item , idx) in hot_brands" v-if="idx < 4"
             @click="$tool.common.jump('search',{b_id:item.id})">{{ item.name ? item.name : '' }}
        </div>
      </div>
      <div class="list" v-if="hot_brands.length > 4">
        <div class="item" v-for="(item , idx) in hot_brands" v-if="idx >= 4 && idx < 8"
             @click="$tool.common.jump('search',{b_id:item.id})">{{ item.name ? item.name : '' }}
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="title">
        <div class="title-img">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAZCAYAAAD9ovZ9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAw9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkM4MTc0QjA3ODIxMTFFN0IyOEJENEE1ODlDQzkyRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkM4MTc0QUY3ODIxMTFFN0IyOEJENEE1ODlDQzkyRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMkUyMkZCMkZDQzVDREFFNkIyNjlGMzk1QTRDMTA1REYiIHN0UmVmOmRvY3VtZW50SUQ9IjJFMjJGQjJGQ0M1Q0RBRTZCMjY5RjM5NUE0QzEwNURGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GBkjQwAACkFJREFUeNrsW02IJEkVjheRKOq2UoKIXsSeVVwWT+We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"
            alt="">
        </div>
        <div class="line"></div>
      </div>
      <div class="list">
        <div class="item" v-for="item in hot_goods" @click="$tool.common.jump('search',{g_id: item.id})">
          <div class="item-thumb">
            <img :src="ali_oss_cdn + item.pic_url+'@200w_90Q.jpg'" v-if="item.pic_url" :alt="item.name">
          </div>
          <div class="item-title">{{ item.title }}</div>
          <div class="item-price" v-if="item.price">
            <span style="color: #ff4700;">￥{{ parseFloat(item.price).toFixed(2) }}</span>/{{item.unit}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        hot_category_style: {
          height: '170px'
        },
        hot_brand_style: {
          height: '120px'
        },
        hot_category: [1, 2, 3, 4, 5, 6, 7, 8],
        hot_brands: [1, 2, 3, 4, 5, 6, 7, 8],
        hot_goods: [1, 2, 3, 4],
        ali_oss_cdn: this.$tool.common.getConfig('AliOssPictureCdn'),
        tencent_picture_cdn: this.$tool.common.getConfig('TencentPictureCdn')
      }
    },
    methods: {},
    created () {
      this.$model.main.get_home_data().then(r => {
        if (parseInt(r.code) === 0) {
          this.hot_category = r.data.hot_categories;
          this.hot_brands = r.data.hot_brands;
          this.hot_goods = r.data.hot_goods;

          if (this.hot_category.length > 0 && this.hot_category.length <= 4) {
            this.hot_category_style = {
              height: 'calc(170px - 4rem)'
            }
          }
          if (this.hot_brands.length > 0 && this.hot_brands.length <= 4) {
            this.hot_brand_style = {
              height: '80px'
            }
          }
        }
      });
    },
    mounted () {

    }
  }
</script>
<!-- 引入CSS文件 -->
<style src="../../assets/css/common.css"></style>
<style lang="css">
  body {
    background-color: #f1f1f1;
  }

  .search {
    width: 100%;
    height: 50px;
    background-color: #f2582a;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-content {
    width: calc(100% - 40px);
    height: 35px;
    border-radius: 5px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .search-icon {
    width: 20px;
    height: 20px;
    color: #999999;
    margin-left: 7.5px;
  }

  .search-placeholder {
    flex: 1;
    height: 35px;
    font-size: 16px;
    color: #999999;
    line-height: 35px;
    padding-left: 7.5px;
  }

  /*
  ** 热门分类
  */
  .hot-category {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    width: calc(100% - 40px);
    height: 40px;
    display: flex;
    align-items: center;
  }

  .title > img {
    width: 65px;
    height: 12.5px;
  }

  .hot-category > .list {
    width: calc(100% - 40px);
    height: 62px;
    display: flex;
    flex-direction: row;
  }

  .hot-category > .list > .item {
    flex: 1;
    height: 3rem;
    margin-left: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
  }

  .hot-category > .list > .item > img {
    width: 100%;
  }

  .hot-category > .list > .item:first-child {
    margin-left: 0;
  }

  .hot-category > .list > .item > .item-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    line-height: 3rem;
    font-size: 0.8rem;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 5px;
  }

  /*
  ** 热门品牌
  */
  .hot-brand {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .title {
    width: calc(100% - 40px);
    height: 40px;
    display: flex;
    align-items: center;
  }

  .title > img {
    width: 65px;
    height: 12.5px;
  }

  .hot-brand > .list {
    width: calc(100% - 40px);
    height: 60px;
    display: flex;
    flex-direction: row;
  }

  .hot-brand > .list > .item {
    flex: 1;
    height: 30px;
    background-color: #ededed;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.7rem;
    color: #5d5f6a;
    margin-left: 10px;
  }

  .hot-brand > .list > .item:first-child {
    margin-left: 0;
  }

  /*
  **  推荐单品
  */
  .recommend {
    background-color: #ffffff;
    width: 100%;
  }

  .recommend > .title {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    position: relative;
  }

  .recommend > .title > .line {
    width: calc(100% - 40px);
    height: 1px;
    background-color: #f1f1f1;
  }

  .recommend > .title > .title-img {
    position: absolute;
    height: 40px;
    width: calc(100% - 40px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .recommend > .title > .title-img > img {
    width: 65px;
    height: 12.5px;
    background-color: #f8f8f8;
  }

  .recommend > .list {
    width: calc(100% - 40px);
    margin-left: 20px;
    overflow: hidden;
  }

  .recommend > .list > .item {
    width: calc(48% - 2px);
    height: 12rem;
    border: 1px solid #f1f1f1;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    background-color: #fefefe;
  }

  .recommend > .list > .item:nth-child(2n - 1) {
    float: left;
  }

  .recommend > .list > .item:nth-child(2n) {
    float: right;
  }

  .recommend > .list > .item > .item-thumb {
    width: 100%;
    height: 8rem;
  }

  .recommend > .list > .item > .item-thumb {
    width: 100%;
    height: 8rem;
    background-color: #f8f8f8;
    overflow: hidden;
  }

  .recommend > .list > .item > .item-thumb > img {
    width: 100%;
    height: 100%;
  }

  .recommend > .list > .item > .item-title {
    width: calc(100% - 10px);
    margin-left: 5px;
    height: 2rem;
    font-size: 0.8rem;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #999999;
    margin-top: 0.25rem;
  }

  .recommend > .list > .item > .item-price {
    width: 100%;
    height: 1.75rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.8rem;
    color: #999999;
  }

</style>
