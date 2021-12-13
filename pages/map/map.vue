<template>
	<view class="">
		<map style="width:100%;height:85vh;":latitude="latitude":longitude="longitude"></map>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				agentId:0,
				title: 'map',
				latitude: 30.3,
				longitude: 120.2,

			}
		}
	}
</script>

<style>
</style>
