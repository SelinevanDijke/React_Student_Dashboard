import React from "react"
import "../styling/style.css"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<header>
			<div className="header-container">
				<Link className="header-home" to="/">
					<div className="logo-students">
						<>
							<span>Student Dashboard</span>
						</>
					</div>
				</Link>
			</div>
		</header>
	)
}
export default Header
