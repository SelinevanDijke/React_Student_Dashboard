import React from "react"
import "../styling/style.css"
import { NavItem } from "./NavItem"
import useDashBoard from "./useDashBoard"
import { NavLink } from "react-router-dom"
import DropdownButton from "react-bootstrap/DropdownButton"
import Button from "react-bootstrap/Button"
import { useMediaQuery } from "@material-ui/core"

const Navbar = () => {
	const { students, assignments } = useDashBoard()
	const isActive = useMediaQuery("(max-width:1028px)")

	const studentRoutes = students.map((person, index) => {
		return <NavItem name={person} id={"student"} key={index} />
	})

	const assignmentRoutes = assignments.map((assignment, index) => {
		return <NavItem name={assignment} id={"assignment"} key={index} />
	})

	return (
		<nav>
			{isActive ? (
				<div className="nav-container">
					<div className="students-overview-average">
						{}
						<NavLink exact className="nav-item" to="/">
							{" "}
							<Button
								href="/"
								variant="primary"
								id="dropdown-basic-button"
							>
								Average of all students
							</Button>
						</NavLink>

						{}
						<DropdownButton
							id="dropdown-basic-button"
							title="Students"
						>
							{studentRoutes}
						</DropdownButton>
						{}
						<DropdownButton
							id="dropdown-basic-button"
							title="Assignments"
						>
							{assignmentRoutes}
						</DropdownButton>
						{}
					</div>
				</div>
			) : (
				<div className="nav-container-desktop">
					<div className="nav-wrapper">
						<div className="nav-group">
							<div className="icon-wrapper">
								<h3>Menu</h3>
							</div>
							<ul className="all-students">
								<li>
									<NavLink
										exact
										className="nav-item"
										activeClassName="is-active"
										to="/"
									>
										All Students
									</NavLink>
								</li>
							</ul>
						</div>
						<div className="nav-group">
							<div className="icon-wrapper">
								<h3>Students</h3>
							</div>

							<ul>{studentRoutes}</ul>
						</div>
						<div className="nav-group">
							<div className="icon-wrapper">
								<h3>Assignments</h3>
							</div>
							<ul className="nav-assignments">
								{assignmentRoutes}
							</ul>
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}
export default Navbar
