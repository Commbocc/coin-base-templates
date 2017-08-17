<template>
	<div id="app">

		<coin-header></coin-header>

		<router-view></router-view>

		<footer class="jumbotron jumbotron-fluid mb-0">
			<div class="container">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
		</footer>

	</div>
</template>

<script>
import CoinHeader from '@/components/CoinHeader'

export default {
	name: 'app',
	components: {
		CoinHeader
	}
}
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/*text-align: center;
	color: #2c3e50;
	margin-top: 60px;*/
}
</style>
