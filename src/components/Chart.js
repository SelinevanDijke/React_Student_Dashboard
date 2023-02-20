import React from "react"
import "../styling/globals.css"

import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTooltip,
	VictoryLine,
	VictoryGroup,
	VictoryLabel,
	VictoryLegend,
} from "victory"

const Chart = ({ data }) => {
	const conditionData = data
	return (
		<>
			<VictoryChart height={180} padding={20} width={400}>
				<VictoryLine
					y={() => 1}
					style={{
						data: {
							stroke: "white",
							strokeWidth: 0.2,
						},
					}}
				/>
				<VictoryLine
					y={() => 2}
					style={{
						data: {
							stroke: "white",
							strokeWidth: 0.2,
						},
					}}
				/>
				<VictoryLine
					y={() => 3}
					style={{
						data: {
							stroke: "white",
							strokeWidth: 0.2,
						},
					}}
				/>
				<VictoryLine
					y={() => 4}
					style={{
						data: {
							stroke: "white",
							strokeWidth: 0.2,
						},
					}}
				/>
				<VictoryLine
					y={() => 5}
					style={{
						data: {
							stroke: "white",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryLine
					y={() => 4.5}
					style={{
						data: {
							stroke: "white",
							strokeWidth: 0.1,
						},
					}}
				/>
				<VictoryLine
					y={() => 0.5}
					style={{
						data: {
							stroke: "white",
							strokeWidth: 0.1,
						},
					}}
				/>
				<VictoryLine
					y={() => 1.5}
					style={{
						data: {
							stroke: "white",
							strokeWidth: 0.1,
						},
					}}
				/>
				<VictoryLine
					y={() => 2.5}
					style={{
						data: {
							stroke: "white",
							strokeWidth: 0.1,
						},
					}}
				/>
				<VictoryLine
					y={() => 3.5}
					style={{
						data: {
							stroke: "white",
							strokeWidth: 0.1,
						},
					}}
				/>
				<VictoryGroup offset={160 / conditionData.length}>
					<VictoryBar
						data={conditionData}
						x={"assignment"}
						y={"difficultyRating"}
						labels={({ datum }) => {
							if (datum.labels) {
								let label = ""
								datum.labels.forEach((name) => {
									let labelItem = `${name.name}: ${name.difficultyRating} \n`
									label += labelItem
								})

								return `Average Difficulty: ${datum.difficultyRating}\n  \n${label}`
							}
							return `Difficulty Rating:${datum.difficultyRating}`
						}}
						style={{ data: { fill: "#810CA8" } }}
						barWidth={130 / conditionData.length}
						animate={{
							duration: 700,
							onLoad: { duration: 700 },
						}}
						labelComponent={
							<VictoryTooltip
								flyoutWidth={50}
								pointerLength={9}
								pointerWidth={2}
								flyoutStyle={{
									stroke: "#810CA8",
									strokeWidth: 0.2,
									fill: "white",
								}}
								style={{
									fontSize: 4,
									fill: "#810CA8",
								}}
							/>
						}
						events={[
							{
								target: "data",
								eventHandlers: {
									onMouseOver: () => {
										return [
											{
												target:
													"data",
												mutation: () => ({
													style: {
														fill:
															"#810CA8",
														stroke:
															"#810CA8",
														strokeWidth:
															"0.1",
													},
												}),
											},
											{
												target:
													"labels",
												mutation: () => ({
													active: true,
												}),
											},
										]
									},
									onMouseOut: () => {
										return [
											{
												target:
													"data",
												mutation: () => {},
											},
											{
												target:
													"labels",
												mutation: () => ({
													active: false,
												}),
											},
										]
									},
								},
							},
						]}
					/>
					<VictoryBar
						data={conditionData}
						x={"assignment"}
						y={"enjoymentRating"}
						style={{ data: { fill: "#E5B8F4" } }}
						barWidth={130 / conditionData.length}
						animate={{
							duration: 700,
							onLoad: { duration: 700 },
						}}
						labels={({ datum }) => {
							if (datum.labels) {
								let label = ""
								datum.labels.forEach((name) => {
									let labelItem = `${name.name}: ${name.enjoymentRating} \n`
									label += labelItem
								})
								return `Average Enjoyment: ${datum.enjoymentRating}\n \n${label}`
							}
							return `Enjoyment Rating : ${datum.enjoymentRating}`
						}}
						labelComponent={
							<VictoryTooltip
								flyoutWidth={50}
								pointerLength={9}
								pointerWidth={1}
								flyoutStyle={{
									stroke: "#C147E9",
									strokeWidth: 0.2,
									fill: "white",
								}}
								style={{
									fontSize: 4,
									fill: "#C147E9",
								}}
							/>
						}
						events={[
							{
								target: "data",
								eventHandlers: {
									onMouseOver: () => {
										return [
											{
												target:
													"data",
												mutation: () => ({
													style: {
														fill:
															"#f24377",
														stroke:
															"black",
														strokeWidth:
															"0.1",
													},
												}),
											},
											{
												target:
													"labels",
												mutation: () => ({
													active: true,
												}),
											},
										]
									},
									onMouseOut: () => {
										return [
											{
												target:
													"data",
												mutation: () => {},
											},
											{
												target:
													"labels",
												mutation: () => ({
													active: false,
												}),
											},
										]
									},
								},
							},
						]}
					/>
				</VictoryGroup>
				<VictoryAxis
					style={{
						ticks: {
							fill: "transparent",
							size: 2,
							stroke: "black",
							strokeWidth: 1,
							strokeLinecap: "round",
							strokeLinejoin: "round",
						},
					}}
					tickLabelComponent={
						<VictoryLabel
							angle={() => {
								return conditionData.length < 16
									? 0
									: 60
							}}
							dx={-8.5}
							dy={-6}
							style={{
								fontSize: 4,
								fill: "#223243",
							}}
							textAnchor={"start"}
						/>
					}
				/>

				<VictoryAxis
					dependentAxis
					domain={[0, 5]}
					style={{
						tickLabels: {
							fontSize: 4,
							fill: "#000",
						},
					}}
				/>
				<VictoryLegend
					x={165}
					y={10}
					orientation="horizontal"
					data={[
						{
							name: "Difficulty",
							symbol: { fill: "#810CA8", type: "round" },
						},
						{
							name: "Enjoyment",
							symbol: { fill: "#E5B8F4", type: "round" },
						},
					]}
					style={{
						labels: {
							fontSize: 4,
							fill: "#120faa",
						},
					}}
				/>
			</VictoryChart>
		</>
	)
}
export default Chart
