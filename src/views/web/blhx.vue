<script setup lang="ts">
import "md-editor-v3/lib/style.css"
import {MdPreview} from "md-editor-v3";
import md from '../md/blhx.md?raw';

</script>

<template>
	<div class="article_view">
		<md-preview :model-value="md"/>
	</div>
</template>

<style lang="scss">
@use "@/assets/mixin.scss" as *;

.article_view {
	@include md-editor(true);
}
</style>