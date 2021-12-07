export const sendRequest = (param,backpage, backtype) => {
	const baseUrl = ''
	var self = this, 
		url = param.url,
		method = param.method,
		header = {},
		data = param.data || {}, 
		token = "",
		hideLoading = param.hideLoading || false;
		
	//拼接完整请求地址
	var requestUrl = baseUrl + url;
	//固定参数:仅仅在小程序绑定页面通过code获取token的接口默认传递了参数token = login
	// if(!data.token){//其他业务接口传递过来的参数中无token
	// 	token = uni.getStorageSync(this.sessionKey);//参数中无token时在本地缓存中获取
	// 	console.log("当前token:" + token);
	// 	if(!token){//本地无token需重新登录(退出时清缓存token)
	// 		self.login(backpage, backtype);
	// 		return;
	// 	}else{
	// 		data.token = token;
	// 	}
	// }
	// var timestamp = Date.parse(new Date());//时间戳
	// data["timestamp"] = timestamp;
	// // #ifdef MP-WEIXIN
	// data["device"] = "wxapp";
	// data["ver"] = "1.1.30";
	// // #endif
	// // #ifdef APP-PLUS || H5
	// data["device"] = "iosapp";
	// data["ver"] = "1.0.0";
	// // #endif

	//请求方式:GET或POST(POST需配置header: {'content-type' : "application/x-www-form-urlencoded"},)
	if(method){
		method = method.toUpperCase();//小写改为大写
		if(method=="POST"){
			header = {'content-type' : "application/x-www-form-urlencoded"};
		}else{
			header = {'content-type' : "application/json"};
		}
	}else{
		method = "GET";
		header = {'content-type' : "application/json"};
	}

	console.log("网络请求start");
	//网络请求
	uni.request({
		url: requestUrl,
		method: method,
		header: header,
		data: data,
		success: res => {
			console.log("网络请求success:" + JSON.stringify(res));
			if (res.statusCode && res.statusCode != 200) {//api错误
				uni.showModal({
					content:"" + res.errMsg
				});
				return;
			}else{
				uni.showModal({
					showCancel:false,
					content:"" + res.data
				});
				return;
			}
			typeof param.success == "function" && param.success(res.data);
		},
		fail: (e) => {
			console.log("网络请求fail:" + JSON.stringify(e));
			uni.showModal({
				content:"" + e.errMsg
			});
			typeof param.fail == "function" && param.fail(e.data);
		},
		complete: () => {
			console.log("网络请求complete");
			typeof param.complete == "function" && param.complete();
			return;
		}
	});
}