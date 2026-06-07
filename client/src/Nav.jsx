import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="Container">
					<div>
						<NavLink to="/register" className="btn btn-success  me-2">
							Register
						</NavLink>
						<NavLink to="/login" className="btn btn-primary flex-right">
							Login
						</NavLink>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Nav;
