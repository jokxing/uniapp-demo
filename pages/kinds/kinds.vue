<template>
	<view class="kinds_page">
		<view class="search">
			<uni-search-bar placeholder="搜索商品" v-model="searchVal"></uni-search-bar>
		</view>
		
		<view class="kinds">
			<view class="hd">
				<scroll-view 
					scroll-y="true"
					style="height:100%;width:100%;"
					class="scroll-view-left">
					<view 
						v-for="(item,index) in kindNav" 
						:key="item.type"
						class="scroll-view-left-item"
						:class="{ 'active': activeNavIndex == index }"
						@click="activeNavIndex = index">
							<text>{{ item.text }}</text>
					</view>
				</scroll-view>
			</view>
			<view class="bd">
				<scroll-view scroll-y class="scroll-view-right">
					<view
						class="kind-title"
						v-for="(item,index) in kindItem"
						:key="item.type">
							<uni-title type="h4" :title="item.title" align="center"></uni-title>
							<uni-grid :column="3" :showBorder="false" :highlight="false">
								<uni-grid-item class="scroll-view-item" v-for="(v,i) in item.list" :key="i">
									<view class="image">
										<image :src="v.kindimg" mode="aspectFit"></image>
									</view>
									<text class="text">{{ v.title }}</text>
								</uni-grid-item>
							</uni-grid>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import data from '@/static/json/kind.json'
	export default{
		data() {
			return{
				searchVal: '',
				kindNav: data.kindNav,
				kindTitle: data.kindTitle,
				kindItem: data.kindItem,
				activeNavIndex: 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./kinds.scss";
</style>
