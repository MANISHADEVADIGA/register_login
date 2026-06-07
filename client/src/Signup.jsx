import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3000/register", { name, email, password })
			.then((result) => {
				console.log(result);
				navigate("/login");
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<div className="container d-flex justify-content-center align-items-center vh-100">
				<div className="bg-white p-4 rounded shadow w-25">
					<h3 className="text-center mb-3">Register</h3>

					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label className="form-label">
								<strong>Name</strong>
							</label>

							<input
								type="text"
								className="form-control"
								placeholder="Enter Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className="mb-3">
							<label className="form-label">
								<strong>Email</strong>
							</label>

							<input
								type="email"
								className="form-control"
								placeholder="Enter Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="mb-3">
							<label className="form-label">
								<strong>Password</strong>
							</label>

							<input
								type="password"
								className="form-control"
								placeholder="Enter Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<button type="submit" className="btn btn-success w-100 mb-2">
							Sign Up
						</button>

						<p className="text-center">Already Have an Account?</p>

						<Link to="/login">
							<button className="btn btn-primary w-100">Login</button>
						</Link>
					</form>
				</div>
			</div>
		</>
	);
}

export default Signup;
