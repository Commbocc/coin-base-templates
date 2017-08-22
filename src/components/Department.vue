<template>
	<main class="">

		<div id="departmentJumbo" class="jumbotron jumbotron-fluid p-3">
			<div class="container">

				<div class="row align-items-center">
					<div class="col-md-7 col-lg-8 mb-3">
						<h1 class="mt-3">
							Human Resources
							<em class="small text-muted">
								<br>
								(Sub) Creating Community Prosperity
							</em>
						</h1>

						<p class="lead">
							(Description)
							We are committed to providing our employees a stable work environment with equal opportunity for learning and personal growth. Creativity and innovation are encouraged for improving the effectiveness of Hillsborough County. Above all, employees will be provided the same concern, respect and caring attitude within the organization that they are expected to share externally with every Hillsborough County customer.
						</p>
					</div>
					<div class="col-md-5 col-lg-4">

						<a href="#" class="btn btn-outline-secondary btn-lg btn-block mb-1">
							<i class="fa fa-pencil fa-1x"></i>
							Department Action
						</a>

						<a href="#" class="btn btn-outline-secondary btn-lg btn-block mb-1">
							<i class="fa fa-envelope-o fa-1x"></i>
							Something Else
						</a>

						<a href="#" class="btn btn-outline-secondary btn-lg btn-block mb-1">
							<i class="fa fa-wrench fa-1x"></i>
							Support
						</a>

					</div>
				</div>
			</div>
		</div>

		<section class="container">
			<div class="row">
				<div class="col-md-7 col-lg-8">

					<div class="">
						<p class="lead">
							Optional Wysiwyg lead text... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>

					<hr>

					<section class="">
						<div v-for="n in 5" class="media mb-4">
							<img class="d-flex mr-3" :src="`https://lorempixel.com//100/100/business/?${n}`" alt="Generic placeholder image">
							<div class="media-body">
								<h5 class="mt-0">
									News Article Heading {{ n }}
									<em class="small text-muted">
										<br>
										Date Posted
									</em>
								</h5>
								Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							</div>
						</div>

						<p class="text-right">
							<a href="#" class="btn btn-outline-secondary">
								More Department News...
							</a>
						</p>
					</section>

					<hr>

					<section>
						<h3>Wysiwyg Heading</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
							<li>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
							<li>Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
						</ul>
					</section>

				</div>
				<div class="col-md-5 col-lg-4">

					<section id="sidebar" class="">

						<aside class="card mb-3">
							<header class="card-header p-2">
								Helpful Links
							</header>
							<div class="list-group list-group-flush small">
								<a v-for="n in 5" href="#" class="list-group-item list-group-item-action p-2">
									Lorem Ipsum
								</a>
							</div>
						</aside>

						<aside class="card mb-3">
							<header class="card-header p-2">
								Departmnet's Events
							</header>
							<div class="card-body p-0">
								<img src="../assets/calendar-ph.png" class="img-fluid">
							</div>
							<footer class="card-footer p-2 text-right">
								<a href="#" class="btn btn-secondary btn-sm ">
									More...
								</a>
							</footer>
						</aside>

					</section>

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
#sidebar {
	position: sticky;
	top: $spacer;
	margin-bottom: $spacer;
}

#departmentJumbo {
	background: $gray-200;
	background-image: url('../../static/bg.png');
	background: -moz-linear-gradient(left, rgba($gray-200, 0.85) 0%, rgba($gray-200, 0.90) 50%, $gray-200 100%), url('../../static/bg.png');
	background: -webkit-linear-gradient(left, rgba($gray-200, 0.85) 0%, rgba($gray-200, 0.90) 50%, $gray-200 100%), url('../../static/bg.png');
	background: linear-gradient(to right, rgba($gray-200, 0.85) 0%, rgba($gray-200, 0.90) 50%, $gray-200 100%), url('../../static/bg.png');

	-o-background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
}
</style>
