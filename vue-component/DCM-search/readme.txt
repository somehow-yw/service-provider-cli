作者：杨玉梅，邮箱：305883594@qq.com
引入此组件步骤
1、放入src中components文件夹中
2、在需要引入的vue文件中引入此组件 import dcmSearch from './../components/DCM-search/DCM-search.vue' //注意路径
3、components: {dcmSerach: dcmSearch}
4、<dcm-serach placeholder="  请输入搜索内容" v-model="iptVal" @click="sosoClick">搜索</dcm-serach>
5、后续样式更新将会继续