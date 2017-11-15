作者：杨玉梅，邮箱：305883594@qq.com
引入此组件步骤
1、放入src中components文件夹中
2、在需要引入的vue文件中引入此组件 import simple from  'components/my-btn/dcmbtn.vue' //注意路径
3、components: {myBtn: simple}
4、<my-btn @click="clickFun"></my-btn>
5、后续样式更新将会继续