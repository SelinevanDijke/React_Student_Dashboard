import React from "react"
import "../styling/style.css"
import useDashBoard from "./useDashBoard"

const Sort = ({ state, data, name, condition }) => {
	const { setRadio } = useDashBoard()
	const checked = name ? state[data][name] : state[data]

	return (
		<form
			className="sort-form"
			onChange={(event) => {
				const value = event.target.value
				setRadio(value, state, data, name)
			}}
		>
			<label>
				<input
					readOnly
					checked={checked.radioBox.enjoymentRating}
					type="radio"
					name="radio"
					value="enjoymentRating"
				/>
				Sort by enjoyment
			</label>
			<label>
				<input
					readOnly
					checked={checked.radioBox.difficultyRating}
					type="radio"
					name="radio"
					value="difficultyRating"
				/>
				Sort by difficulty
			</label>
			<label>
				<input
					readOnly
					checked={checked.radioBox.assignment}
					type="radio"
					name="radio"
					value="assignment"
				/>
				Sort by {condition === "name" ? "name" : "assignment"}
			</label>
		</form>
	)
}

export default Sort
