<template>
	<view class="buy">
		<view class="head">
			<view class="top">
				<view class="search" @click="gotoSearch">
					<uni-icons type="search" size="20" color="#b2b2b2"></uni-icons>
					<text>搜索单号</text>
				</view>
				<view class="kinds">
					<image src="https://cdn.poizon.com/node-common/R3JvdXAlMjA2QDN4MTU5MjIyMjY4OTE5Mw==.png" mode=""></image>
				</view>
			</view>
			<scroll-view class="bottom" scroll-x="true" show-scrollbar="true">
				<text class="tab" v-for="(item, index) in items" :key="index" :class="{ 'active': current == index }" @click="onTab(index)">
					{{ item }}
				</text>
			</scroll-view>
		</view>
		
		<uni-grid class="grid-hd" :showBorder="false" :square="false" :column="3">
			<uni-grid-item class="grid-hd-box">
				<view><image src="../../../static/c1.png"></image>正品保障</view>
			</uni-grid-item>
			<uni-grid-item class="grid-hd-box">
				<view><image src="../../../static/c2.png"></image>逐件查验</view>
			</uni-grid-item>
			<uni-grid-item class="grid-hd-box">
				<view><image src="../../../static/c3.png"></image>多重鉴别</view>
			</uni-grid-item>
		</uni-grid>
		
		<view class="content">
			<uni-grid :column="2" borderColor="#f5f5f9" @change="goDetail">
			    <uni-grid-item class="content-box" v-for="item in buyList" :key="item.index">
					<view class="image">
						<image :src="item.pic" style="width:300rpx;height:192rpx;"></image>
					</view>
			        <view class="title">{{ item.title }}</view>
					<view class="item-text">
						<text class="left">{{ item.price }}</text>
						<text class="right">{{ item.doh }}</text>
					</view>
			    </uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import buy from '@/static/json/buy.json'
	export default {
		data() {
			return {
				items: ['推荐','出行','女装','家电','美妆','潮服','鞋类','艺术','箱包','生活','手表','配饰','数码','潮玩','运动'],
				current: 0,
				buyList: buy.goods1
			}
		},
		onReachBottom() {
			var _this = this;
			uni.showNavigationBarLoading()
			setTimeout(function () {
				_this.buyList = _this.buyList.concat(buy.goods1);
				uni.hideNavigationBarLoading();
			}, 1000);
		},
		methods: {
			onTab(index){
				this.current = index
			},
			gotoSearch () {
				uni.navigateTo({
					url: '/pages/search/search',
				});

			},
			goDetail (e) {
				uni.navigateTo({
					url: '/pages/detail/detail'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import url("./buy.scss");
</style>
