import React from "react";

function Home() {
	return (
		<div
			className="d-flex align-items-center justify-content-center text-center text-white"
			style={{
				height: "90vh",
				backgroundImage:
					"url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<div
				className="p-5 rounded"
				style={{
					backgroundColor: "rgba(0,0,0,0.6)",
				}}>
				<h1 className="display-4 fw-bold">Welcome to our website</h1>

				<p className="lead">
					Deserve amazing experience and create lasting memories.
				</p>
			</div>
		</div>
	);
}

export default Home;
