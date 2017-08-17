<template>
	<main class="">

		<div id="homeJumbo" class="jumbotron jumbotron-fluid p-3">
			<div class="container">


				<div class="row align-items-center">
					<div class="col-md-5 col-lg-4 order-md-12">


						<a href="#" class="btn btn-outline-secondary btn-lg btn-block mb-1">
							<i class="fa fa-clock-o fa-1x"></i>
							Time Card
						</a>

						<a href="#" class="btn btn-outline-secondary btn-lg btn-block mb-1">
							<i class="fa fa-users fa-1x"></i>
							Staff Directory
						</a>

						<a href="#" class="btn btn-outline-secondary btn-lg btn-block mb-1">
							<i class="fa fa-envelope-o fa-1x"></i>
							Web Mail
						</a>

						<a href="#" class="btn btn-outline-secondary btn-lg btn-block mb-1">
							<i class="fa fa-wrench fa-1x"></i>
							Technical Support
						</a>

						<a href="#" class="btn btn-outline-secondary btn-lg btn-block mb-1">
							<i class="fa fa-globe fa-1x"></i>
							County Website
						</a>


					</div>
					<div class="col-md-7 col-lg-8 mb-3 order-md-1">
						<h1 class="display-4 mt-3">
							Display Heading
						</h1>

						<p>
							Achieve and maintain good health and save Money through the Well4Life Rebate program.
						</p>
						<p>
							Watch the message from Mike Merrill about the program.
						</p>

						<a href="#" class="btn btn-secondary">
							<i class="fa fa-fw fa-play"></i>
							Watch Video
						</a>


					</div>
				</div>
			</div>
		</div>

		<section class="container">
			<div class="row">
				<div class="col-md-6 col-lg-4 mb-3">
					<div class="card">
						<header class="card-header p-2">
							News &amp; Alerts
						</header>
						<home-news></home-news>
						<footer class="card-footer p-2 text-right">
							<a href="#" class="btn btn-secondary btn-sm ">
								More...
							</a>
						</footer>
					</div>
				</div>
				<div class="col-md-6 col-lg-4 mb-3">
					<div class="card">
						<header class="card-header p-2">
							Events
						</header>
						<div class="card-body p-2">
							<div class="card bg-light p-2" style="height:250px;">
								Calendar
							</div>
						</div>
						<footer class="card-footer p-2 text-right">
							<a href="#" class="btn btn-secondary btn-sm ">
								More...
							</a>
						</footer>
					</div>
				</div>
				<div class="col-md-7 col-lg-4 mx-md-auto mb-3">
					<div class="card">
						<home-carousel></home-carousel>

						<div class="row mx-auto">
							<div v-for="n in 4" class="col-6 p-1">
								<img :src="`https://lorempixel.com//375/200/business/?${n}`" class="img-fluid mx-auto">
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>


	</main>
</template>

<script>
import HomeCarousel from '@/components/Home/Carousel'
import HomeNews from '@/components/Home/News'

export default {
	name: 'home',
	components: {
		HomeCarousel,
		HomeNews
	}
}
</script>

<style lang="scss">
#homeJumbo {
	// background-image: url('http://localhost/bg.png');
	//
	// text-shadow: 1px 1px 1px $gray-200;
	// font-weight: bold;
	//
	// @include media-breakpoint-up(md) {
	// 	background: -moz-linear-gradient(right, rgba($gray-200, 1) 50%, rgba($gray-200, 0.9) 75%, transparent 100%), url('http://localhost/bg.png');
	// 	background: -webkit-linear-gradient(right, rgba($gray-200, 1) 50%, rgba($gray-200, 0.9) 75%, transparent 100%), url('http://localhost/bg.png');
	// 	background: linear-gradient(to left, rgba($gray-200, 1) 50%, rgba($gray-200, 0.9) 75%, transparent 100%), url('http://localhost/bg.png');
	// }
	// @include media-breakpoint-down(sm) {
	// 	background: -moz-linear-gradient(top, rgba($gray-200, 1) 50%, rgba($gray-200, 0.9) 75%, transparent 100%), url('http://localhost/bg.png');
	// 	background: -webkit-linear-gradient(top, rgba($gray-200, 1) 50%, rgba($gray-200, 0.9) 75%, transparent 100%), url('http://localhost/bg.png');
	// 	background: linear-gradient(to bottom, rgba($gray-200, 1) 50%, rgba($gray-200, 0.9) 75%, transparent 100%), url('http://localhost/bg.png');
	// }

	-o-background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;

}
</style>
