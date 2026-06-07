import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3000/login", { email, password })
			.then((result) => {
				console.log(result);
				if (result.data === "Success") {
					navigate("/home");
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className="container d-flex justify-content-center align-items-center vh-100">
				<div className="bg-white p-4 rounded shadow w-25">
					<h3 className="text-center mb-3">Login</h3>

					<form onSubmit={handleSubmit}>
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
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
export default Login;
