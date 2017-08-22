<template lang="html">
	<div class="list-group list-group-flush small" style="max-height: 350px; overflow-y: scroll;">
		<a href="#" class="list-group-item list-group-item-action p-2">
			Complete “Bundle of Three” to Get $100 Well4Life Incentive, Health Insights
			<br>
			<em class="text-muted small">{{ new Date }}</em>
		</a>
		<a href="#" class="list-group-item list-group-item-action p-2">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit
			<br>
			<em class="text-muted small">{{ new Date }}</em>
		</a>
		<a href="#" class="list-group-item list-group-item-action p-2">
			Complete “Bundle of Three” to Get $100 Well4Life Incentive, Health Insights
			<br>
			<em class="text-muted small">{{ new Date }}</em>
		</a>
		<a href="#" class="list-group-item list-group-item-action p-2">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit
			<br>
			<em class="text-muted small">{{ new Date }}</em>
		</a>
		<a v-for="n in 10" href="#" class="list-group-item list-group-item-action p-2">
			Complete “Bundle of Three” to Get $100 Well4Life Incentive, Health Insights
			<br>
			<em class="text-muted small">{{ new Date }}</em>
		</a>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.list-group {
	@include media-breakpoint-up(lg) {
		border-right: solid 1px $gray-200;
	}
	@include media-breakpoint-down(md) {
		border-bottom: solid 1px $gray-200;
	}
}
</style>
