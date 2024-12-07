<script setup lang="ts">
</script>

<template>
	<div class="web_view">
		<router-link :to="{name: 'win_jh'}">晶核PC</router-link>
		<router-link :to="{name: 'jh'}">晶核手机</router-link>
		<router-link :to="{name: 'slwz'}">神陵武装</router-link>
		<router-link :to="{name: 'blhx'}">碧蓝航线</router-link>
	</div>
</template>

<style scoped lang="scss">
.web_view {
	/* 设置为竖直排列 */
	display: flex;
	flex-direction: column;

	a {
		text-decoration: none; // 去掉a标签下划线
		color: var(--color_text_1);
		font-size: 25px;

		padding-left: 10px;
		padding-right: 10px;
		border-radius: 4px;
		display: inline-block !important;
		overflow: hidden;
	}
}

</style>