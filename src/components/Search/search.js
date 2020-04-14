import React from "react";
import Trolls from "../../trolls.json";
import SearchResults from "../SearchResults/searchresults";
import SearchForm from "../SearchForm/searchform";

class Search extends React.Component {
	state = {
		result: Trolls.sort((a, b) => {
			const lastNameA = a.lastName.toUpperCase();
			const lastNameB = b.lastName.toUpperCase();
			let comparison = 0;
			lastNameA > lastNameB
				? (comparison = 1)
				: lastNameB > lastNameA
				? (comparison = -1)
				: (comparison = 0);
			return comparison;
		}),
		search: "",
		sortMethod: "lastName Desc",
		sortStatus: true,
	};

	handleInputChange = (event) => {
		const value = event.target.value;
		this.setState({
			search: value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
	};

	handleSearch = (event) => {
		if (this.state.search.trim() === "") {
			return;
		}
		let troll = this.state.result.filter((Trolls) =>
			Trolls.lastName.toUpperCase().includes(this.state.search.toUpperCase())
		);
		this.setState({
			result: troll,
		});
	};

	handleClear = (event) => {
		this.setState({
			result: Trolls.sort((a, b) => {
				const lastNameA = a.lastName.toUpperCase();
				const lastNameB = b.lastName.toUpperCase();
				let comparison = 0;
				lastNameA > lastNameB
					? (comparison = 1)
					: lastNameB > lastNameA
					? (comparison = -1)
					: (comparison = 0);
				return comparison;
			}),
			search: "",
			sortMethod: "lastName Desc",
			sortStatus: true,
		});
	};

	handleSort = (event) => {
		const sortTarget = event.target.dataset.sort;
		if (sortTarget === "lastName") {
			switch (this.state.sortMethod) {
				case "lastName Desc":
					this.setState({
						result: this.state.result.sort((a, b) => {
							const lastNameA = a.lastName.toUpperCase();
							const lastNameB = b.lastName.toUpperCase();
							let comparison = 0;
							lastNameA > lastNameB
								? (comparison = -1)
								: lastNameB > lastNameA
								? (comparison = 1)
								: (comparison = 0);
							return comparison;
						}),
						sortMethod: "lastName Asc",
						sortStatus: true,
					});
					break;
				default:
					this.setState({
						result: this.state.result.sort((a, b) => {
							const lastNameA = a.lastName.toUpperCase();
							const lastNameB = b.lastName.toUpperCase();
							let comparison = 0;
							lastNameA > lastNameB
								? (comparison = 1)
								: lastNameB > lastNameA
								? (comparison = -1)
								: (comparison = 0);
							return comparison;
						}),
						sortMethod: "lastName Desc",
						sortStatus: true,
					});
			}
		} else if (sortTarget === "location") {
			switch (this.state.sortMethod) {
				case "location Desc":
					this.setState({
						result: this.state.result.sort((a, b) => {
							const locationA = a.location.toUpperCase();
							const locationB = b.location.toUpperCase();
							let comparison = 0;
							locationA > locationB
								? (comparison = -1)
								: locationB > locationA
								? (comparison = 1)
								: (comparison = 0);
							return comparison;
						}),
						sortMethod: "location Asc",
						sortStatus: false,
					});
					break;
				default:
					this.setState({
						result: this.state.result.sort((a, b) => {
							const locationA = a.location.toUpperCase();
							const locationB = b.location.toUpperCase();
							let comparison = 0;
							locationA > locationB
								? (comparison = 1)
								: locationB > locationA
								? (comparison = -1)
								: (comparison = 0);
							return comparison;
						}),
						sortMethod: "location Desc",
						sortStatus: false,
					});
			}
		}
	};

	render() {
		return (
			<>
				<section className='py-5'>
					<div className='container'>
						<div className='row'>
							<div className='col text-center'>
								<SearchForm
									handleInputChange={this.handleInputChange}
									handleSubmit={this.handleSubmit}
									handleSearch={this.handleSearch}
									handleClear={this.handleClear}
									search={this.state.search}
								/>
								<hr />
								<SearchResults
									employees={this.state.result}
									handleSort={this.handleSort}
									sortStatus={this.state.sortStatus}
								/>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Search;
