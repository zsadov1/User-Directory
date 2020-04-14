import React from "react";
import "./header.css";

function Header() {
	return (
		<>
			<header className='bg-dark'>
				<div className='container'>
					<div className='row'>
						<div className='col text-center text-white py-5'>
							<h1 className='mb-4'>Bowl Trollz</h1>
							<h3 className='text-center'>TROLL DIRECTORY</h3>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
