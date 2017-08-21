<template>
	<header class="">

		<nav id="coin-navbar" class="navbar navbar-expand-lg navbar-dark bg-dark mt-0 mb-0">
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
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Departments
							</a>

							<div class="dropdown-menu my-0 py-0" aria-labelledby="navbarDropdownMenuLink">
								<div class="container-fluid">

									<div class="row">
										<div class="col-md-8 p-3">

											<h4 class="">Departments</h4>
											<div id="departments" class="list-group-flush">
												<a v-for="dept in departments" href="#" class="list-group-item p-1">
													{{ dept }}
												</a>
											</div>

										</div>
										<div class="col-md-4 bg-light p-3">
											<h5 class="">Departmental Related Topics...</h5>

											<ul>
												<li v-for="n in 5">
													<a href="#">
														Lorem uipdkjsf sdlfnjjaond
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

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
			departments: [
				"Aging Services",
				"Board of County Commissioners",
				"Budget (BSS)",
				"Civil Service",
				"Clerk's Office",
				"Communications & Digital Media Services",
				"County Administration",
				"County Facility Security",
				"Customer Service & Support",
				"Emergency Management",
				"Enterprise Solutions and Quality Assurance",
				"Fire Rescue",
				"Fleet Management",
				"Head Start",
				"HIPAA",
				"HTV (Digital Media Services)",
				"Human Resources",
				"Information & Innovation Office (IIO)",
				"Managed Document Services (Ricoh)",
				"Operations & Legislative Affairs",
				"Procurement Services",
				"Project 1",
				"Public Works",
				"Public Utilities",
				"Real Estate & Facilities Services",
				"Risk Management",
				"Social Services",
				"Web Services (Digital Media Services)",
				"United Way Campaign",
			]
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

// dropdowns
#coin-navbar {
	.dropdown {
		position: static;
	}
	.dropdown-menu {
		position: absolute;
		width: 100%;
	}
}

#departments {
	@include media-breakpoint-up(lg) {
		-webkit-column-count: 2; /* Chrome, Safari, Opera */
		-moz-column-count: 2; /* Firefox */
		column-count: 2;
	}
	& > a {
		-webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
		page-break-inside: avoid; /* Firefox */
		break-inside: avoid; /* IE 10+ */
	}
}
</style>
