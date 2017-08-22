<template>
	<main class="">
		<section id="homeJumbo" class="jumbotron jumbotron-fluid p-3">
			<div class="container my-5">
				<div class="row text-center">
					<a href="#" class="col-3 p-3 border border-secondary border-top-0 border-left-0">
						<i class="fa fa-clock-o fa-3x"></i><br>
						Time Card
					</a>
					<a href="#" class="col-3 p-3 border border-secondary border-top-0">
						<i class="fa fa-users fa-3x"></i><br>
						Staff Directory
					</a>
					<a href="#" class="col-3 p-3 border border-secondary border-top-0">
						<i class="fa fa-envelope-o fa-3x"></i><br>
						Web Mail
					</a>
					<a href="#" class="col-3 p-3 border border-secondary border-top-0 border-right-0">
						<i class="fa fa-wrench fa-3x"></i><br>
						Technical Support
					</a>
					<a href="#" class="col-3 p-3 border border-secondary border-bottom-0 border-left-0">
						<i class="fa fa-globe fa-3x"></i><br>
						County Website
					</a>
					<a href="#" class="col-3 p-3 border border-secondary border-bottom-0">
						<i class="fa fa-pencil fa-3x"></i><br>
						Lorem
					</a>
					<a href="#" class="col-3 p-3 border border-secondary border-bottom-0">
						<i class="fa fa-pencil fa-3x"></i><br>
						Lorem
					</a>
					<a href="#" class="col-3 p-3 border border-secondary border-bottom-0 border-right-0">
						<i class="fa fa-pencil fa-3x"></i><br>
						Lorem
					</a>
				</div>
			</div>
		</section>

		<!--  -->

		<section class="container">
			<div class="row">
				<div class="col-md-7">

					<!--  -->
					<!-- <alerts></alerts> -->
					<!--  -->

					<div class="jumbotron p-4 mb-1">

						<h1 class="">
							From the Administrator
						</h1>

						<p>
							Achieve and maintain good health and save Money through the Well4Life Rebate program.
						</p>
						<p>
							Watch the message from Mike Merrill about the program.
						</p>
						<a href="#" class="btn btn-outline-primary">
							<i class="fa fa-fw fa-play"></i>
							Watch Video
						</a>

					</div>

					<div class="card my-3">
						<div class="card-header pt-1">

							<ul class="nav nav-tabs card-header-tabs">
								<li class="nav-item">
									<a class="nav-link active" data-toggle="tab" href="#news" role="tab">
										<i class="fa fa-fw fa-newspaper-o"></i>
										News &amp; Alerts
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#events" role="tab">
										<i class="fa fa-fw fa-calendar"></i>
										Events
									</a>
								</li>
							</ul>
						</div>

						<div class="row align-items-center">
							<div class="col-lg-6 pull-lg-6 col-xl-7 pull-xl-5 pr-lg-0">
								<home-news></home-news>
							</div>
							<div class="col-lg-6 push-lg-6 col-xl-5 push-xl-7 pl-lg-0">
								<div class="card-body">
									<h4 class="card-title">Latest Internal Happenings</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
									</p>
									<a href="#" class="btn btn-sm btn-outline-primary btn-block">View All News...</a>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div class="col-md-5 mb-3">
					<div class="card mb-2">
						<home-carousel></home-carousel>

						<div class="row mx-auto">
							<div v-for="n in 4" class="col-6 p-1">
								<img :src="`https://lorempixel.com//375/200/business/?${n}`" class="img-fluid mx-auto">
							</div>
						</div>

					</div>

					<div class="list-group list-group-flush small">
						<a href="#" class="list-group-item list-group-item-action p-1">Dapibus ac facilisis in</a>
						<a href="#" class="list-group-item list-group-item-action p-1">Morbi leo risus</a>
						<a href="#" class="list-group-item list-group-item-action p-1">Porta ac consectetur ac</a>
						<a href="#" class="list-group-item list-group-item-action p-1">Vestibulum at eros</a>
					</div>

				</div>
			</div>
		</section>

	</main>
</template>

<script>
import HomeCarousel from '@/components/Home/Carousel'
import HomeNews from '@/components/Home/News'
import Alerts from '@/components/Home/Alerts'

export default {
	name: 'home',
	components: {
		HomeCarousel,
		HomeNews,
		Alerts
	}
}
</script>

<style lang="scss">
#homeJumbo {
	// background: $gray-200;
	// background-image: url('http://localhost/bg.png');
	// background: -moz-linear-gradient(left, rgba($gray-200, 0.90) 0%, rgba($gray-200, 0.95) 50%, $gray-200 100%), url('http://localhost/bg.png');
	// background: -webkit-linear-gradient(left, rgba($gray-200, 0.90) 0%, rgba($gray-200, 0.95) 50%, $gray-200 100%), url('http://localhost/bg.png');
	// background: linear-gradient(to right, rgba($gray-200, 0.90) 0%, rgba($gray-200, 0.95) 50%, $gray-200 100%), url('http://localhost/bg.png');
	//
	// -o-background-size: cover;
	// -webkit-background-size: cover;
	// -moz-background-size: cover;
	// background-size: cover;
}
</style>
