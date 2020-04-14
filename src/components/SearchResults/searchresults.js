import React from "react";
import "./searchresults.css";

function SearchResults(props) {
	return (
		<>
			<div className='table-responsive'>
				<table className='table table-sm table-striped text-nowrap'>
					<thead>
						<tr>
							<th
								scope='col'
								className={
									props.sortStatus === true
										? "px-3 sortHeading bg-dark text-white"
										: "px-3 sortHeading"
								}
								data-sort='lastName'
								onClick={props.handleSort}
							>
								Last Name <i className='fas fa-sort'></i>
							</th>
							<th scope='col' className='px-3'>
								First Name
							</th>
							<th scope='col' className='px-3'>
								Role
							</th>
							<th scope='col' className='px-3'>
								Insta
							</th>
							<th
								scope='col'
								className={
									props.sortStatus === false
										? "px-3 sortHeading bg-dark text-white"
										: "px-3 sortHeading"
								}
								data-sort='location'
								onClick={props.handleSort}
							>
								Location <i className='fas fa-sort'></i>
							</th>
						</tr>
					</thead>
					<tbody>
						{props.employees.map((trolls) => (
							<tr key={trolls.id}>
								<td className='px-3'>{trolls.lastName}</td>
								<td className='px-3'>{trolls.firstName}</td>
								<td className='px-3'>{trolls.role}</td>
								<td className='px-3'>{trolls.insta}</td>
								<td className='px-3'>{trolls.location}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default SearchResults;
