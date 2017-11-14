export default {
	data () {
		return {
			current: 2, //当前页
			total: 50//总条数
		};
	},
	methods: {
		getBrands () {
			window.req.getbrands(this, this.params, res => {
				if (res.code == 0) this.loading = false;
				this.data =  res.data.brands;
			});
		},
		selectBrands (item) { //单选
			this.params.ids = [];
			for(var i in item) {
				this.params.ids.push(item[i].id);
			}
		},
		requestSuccess(str) { //请求成功
			this.$Message.success({
				content: str,
				duration: 2
			});
		},
		requestError (str, reason) { //请求失败
			this.$Message.error({
				content: str+'失败，原因：'+reason,
				duration: 2
			});
		}
		
	}
};