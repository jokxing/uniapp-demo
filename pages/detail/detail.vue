<template>
	<view class="detail">
		<view class="detail_hd">
			<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" :dots-styles="dotsStyles">
			    <swiper class="swiper-box" @change="change">
			        <swiper-item v-for="(item ,index) in info" :key="index">
			            <image :src="item.pic" mode="aspectFit"></image>
			        </swiper-item>
			    </swiper>
			</uni-swiper-dot>
		</view>
		
		<view class="detail_hd_infor detail_box uni-row">
			<view class="top uni-row">
				<text class="price">￥{{ infor.price }}</text>
				<text class="don">{{ infor.doh }}</text>
			</view>
			<view class="detail_hd_infor_title uni-row">
				<text>{{ infor.title }}</text>
			</view>
		</view>
		
		<view class="detail_recommend detail_box">
			<view class="tip">
				<text class="left">相关推荐</text>
				<text class="right">全部</uni-icons></text>
			</view>
			<view class="r_swiper">
				<uni-swiper-dot :info="recInfo" :current="recCurrent" field="content" :mode="recMode" :dots-styles="recDotsStyles">
				    <swiper class="swiper-box" @change="recChange">
				        <swiper-item v-for="(item ,index) in recInfo" :key="index">
							<view class="pro">
								<image style="width:150rpx;height:96rpx;" :src="item.pic1" mode="aspectFit"></image>
								<view class="title"><text>{{ item.title1 }}</text></view>
								<view class="price">
									<text>{{ item.price1 }}</text>
								</view>
							</view>
							<view class="pro">
								<image style="width:150rpx;height:96rpx;" :src="item.pic2" mode="aspectFit"></image>
								<view class="title"><text>{{ item.title2 }}</text></view>
								<view class="price">
									<text>{{ item.price2 }}</text>
								</view>
							</view>
							<view class="pro">
								<image style="width:150rpx;height:96rpx;" :src="item.pic3" mode="aspectFit"></image>
								<view class="title"><text>{{ item.title3 }}</text></view>
								<view class="price">
									<text>{{ item.price3 }}</text>
								</view>
							</view>
				        </swiper-item>
				    </swiper>
				</uni-swiper-dot>
			</view>
		</view>
		
		<view class="detail_box">
			<text>商品展示</text>
			<view class="img">
				<image v-for="(item,index) in data.headimg" :key="index" :src="item.pic" mode="aspectFit"></image>
			</view>
		</view>
		
		<view class="detail_buy">
			<button type="primary" @click="open">立即购买</button>
		</view>
		
		<!-- 尺码弹出层 -->
		<uni-popup class="detail_size" ref="popup" type="bottom" background-color="#fafafd">
			<uni-icons class="close" type="closeempty" size="20" @click="close"></uni-icons>
			<view class="hd">
				<view class="img">
					<image :src="infor.pic" mode="aspectFit"></image>
				</view>
				<view class="word">
					<text class="price">￥{{ infor.price }}</text>
					<text class="selectd_size">已选 {{ selectSize }}</text>
				</view>
			</view>
			<view class="select_size">
				<view class="title">
					<text>尺码</text>
				</view>
				<view class="size" v-for="(item, index) in size" :key="index" :class="{ 'active': item.size == selectSize }" @click="selectSizeClick(item.size)">
					<text>{{ item.size }}</text>
				</view>
			</view>
			<view class="size_btn">
				<button type="primary">￥{{ infor.price }}</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import detail from '@/static/json/detail'
	export default {
	    data() {
	        return {
				data: detail,
				infor: detail.infor,
	            info: detail.headimg,
	            current: 0,
	            mode: 'round',
				dotsStyles: {
					backgroundColor: 'rgba(0,0,0,0.3)',
					border: '0px rgba(83, 200, 249,0.3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(0, 0, 0,0.5)',
					selectedBorder: '0px rgba(83, 200, 249,0.9) solid',
				},
				// 推荐
	            recInfo: detail.produceimg,
	            recCurrent: 0,
	            recMode: 'dot',
				recDotsStyles: {
					backgroundColor: 'rgba(0,0,0,0.3)',
					border: '0px rgba(83, 200, 249,0.3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(0, 0, 0,0.5)',
					selectedBorder: '0px rgba(83, 200, 249,0.9) solid',
				},
				// 已选尺码
				selectSize: detail.size[0].size,
				// 尺码
				size: detail.size
	        }
	    },
		onLoad() {
			console.log(this.data)
		},
	    methods: {
	        change(e) {
	            this.current = e.detail.current;
	        },
	        recChange(e) {
	            this.recCurrent = e.detail.current;
	        },
			open(){
				this.$refs.popup.open('bottom')
			},
			close() {
				this.$refs.popup.close()
			},
			selectSizeClick (index) {
				console.log(index)
				this.selectSize = index
			}
	    }
	}
</script>

<style scoped lang="scss">
	@import "./detail.scss";
</style>
