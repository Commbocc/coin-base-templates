<template>
	<header class="">

		<nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-0 mb-0">
			<div class="container-fluid">

				<a class="navbar-brand" href="#">
					<img src="../assets/logo-white.png" class="">
					<span class="ml-2 p-1 border">
						COIN
					</span>
				</a>

				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#">
								Departments
							</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#">
								Working Here
							</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#">
								Tools &amp; Resources
							</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#">
								Meetings &amp; Agendas
							</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#">
								Forms
							</a>
						</li>
					</ul>
				</div>

			</div>
		</nav>

		<form class="bg-light p-1" method="post">
			<div class="input-group input-group-lg ">
				<input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Search For...">
				<div class="input-group-btn">
					<button type="button" class="btn btn-light text-dark search-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Search
					</button>
					<div class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a>
						<div role="separator" class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Separated link</a>
					</div>
				</div>
			</div>
		</form>

	</header>
</template>

<script>
export default {
	name: 'hello',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>

<style scoped lang="scss">
	.navbar-brand img {
		height: 55px;
		width: auto;
		// text-shadow: 1px 1px 1px #fff;
	}

	.dropdown-toggle:after {
		vertical-align: 2px;
	}

	.search-btn {
		background: $gray-200;
	}
</style>
