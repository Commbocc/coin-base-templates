<template>
	<main class="">

		<div id="homeJumbo" class="card mb-3">

			<div class="container text-white text-center my-4 my-sm-5">
				<h1 class="display-4">Lorem Ipsum Dolor</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>

			<footer>
				<div class="container py-1 px-4">
					<div class="row">
						<div class="col p-1 text-center">
							<a href="#" class="btn btn-outline-primary btn-md btn-block mb-1">
								<i class="fa fa-clock-o fa-2x"></i><br>
								Time Card
							</a>
						</div>
						<div class="col p-1 text-center">
							<a href="#" class="btn btn-outline-primary btn-md btn-block mb-1">
								<i class="fa fa-users fa-2x"></i><br>
								Staff Directory
							</a>
						</div>
						<div class="col p-1 text-center">
							<a href="#" class="btn btn-outline-primary btn-md btn-block mb-1">
								<i class="fa fa-envelope-o fa-2x"></i><br>
								Web Mail
							</a>
						</div>
						<div class="col p-1 text-center">
							<a href="#" class="btn btn-outline-primary btn-md btn-block mb-1">
								<i class="fa fa-wrench fa-2x"></i><br>
								Technical Support
							</a>
						</div>
						<div class="col p-1 text-center">
							<a href="#" class="btn btn-outline-primary btn-md btn-block mb-1">
								<i class="fa fa-globe fa-2x"></i><br>
								County Website
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>

		<section class="container">
			<div class="row">
				<div class="col-md-7">

					<div class="jumbotron p-4 mb-1">

						<h1 class="">
							Jumbocard Heading
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
									<a class="nav-link active" href="#">News &amp; Alerts</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">Events</a>
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

					<home-carousel class="p-1"></home-carousel>

					<div class="row mx-auto">
						<div v-for="n in 4" class="col-6 p-1">
							<img :src="`https://lorempixel.com//375/200/business/?${n}`" class="img-fluid mx-auto">
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

			<!-- <a href="#" class="btn btn-lg btn-outline-primary">Button</a> -->
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
	border: 0;
	border-radius: 0;
	/*background: url('http://localhost/bg.png') center center no-repeat;*/

	background-image: url('http://localhost/bg.png');
	background: -moz-linear-gradient(left, rgba(theme-color("dark"), 0.85) 0%, rgba(theme-color("dark"), 0.35) 40%, transparent 100%), url('http://localhost/bg.png');
	background: -webkit-linear-gradient(left, rgba(theme-color("dark"), 0.85) 0%, rgba(theme-color("dark"), 0.35) 40%, transparent 100%), url('http://localhost/bg.png');
	background: linear-gradient(to right, rgba(theme-color("dark"), 0.85) 0%, rgba(theme-color("dark"), 0.35) 40%, transparent 100%), url('http://localhost/bg.png');

	-o-background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	position: relative;
}
#homeJumbo > footer {
	/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0.5+0,1+65,1+100 */
	background: -moz-linear-gradient(top, rgba($white,0.5) 0%, rgba($white,1) 65%, rgba($white,1) 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, rgba($white,0.5) 0%,rgba($white,1) 65%,rgba($white,1) 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, rgba($white,0.5) 0%,rgba($white,1) 65%,rgba($white,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
}
#homeJumbo .text-white {
	text-shadow: 2px 2px 1px theme-color("dark");
	font-size: 1.5em;
}
</style>
