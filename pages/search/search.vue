<template>
	<view class="search">
		<view>
			<uni-search-bar placeholder="输入商品名称、货号" v-model="searchVal"></uni-search-bar>
		</view>
		<view class="host-search" v-if="searchVal.length <= 0">
			<view class="title">热门搜索</view>
			<view class="hostList">
				<text v-for="(item,index) in hostList" :key="index">{{ item }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				hostList: ["AJ11白蓝","TS270","冰淇淋","得物原创鞋盒2.0","人气新品潮服","AJ1蓝黑","YEEZY 350","AJ6兔八哥","卡西欧"],
				searchVal: ""
			}
		},
		methods: {
		}
	}
</script>

<style scoped lang="scss">
	@import './search.scss';
</style>
