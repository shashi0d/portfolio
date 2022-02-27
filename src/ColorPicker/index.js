import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

function ColorPicker() {
	const [bgColor, setBgColor] = useState("#00d9ff");
	const handleBgChange = () => {
		document.documentElement.style.setProperty("--main-color", bgColor);
		let fontColor = hexToLuma(bgColor);
		document.documentElement.style.setProperty("--heading-font-color", fontColor);
	};
	const hexToLuma = (bgColor) => {
		const hex = bgColor.replace(/#/, "");
		const r = parseInt(hex.substr(0, 2), 16);
		const g = parseInt(hex.substr(2, 2), 16);
		const b = parseInt(hex.substr(4, 2), 16);

		if ([0.299 * r, 0.587 * g, 0.114 * b].reduce((a, b) => a + b) / 255 > 0.5) {
			return "black";
		} else {
			return "white";
		}
	};
	const handleFontChange = (e) => {
		console.log(e.target.value, "this is selected colour");
		if (e.target.value === "WorkSans") {
			document.documentElement.style.setProperty("--regular-font-family", "WorksansNormal");
			document.documentElement.style.setProperty("--medium-font-family", "WorksansBold");
			document.documentElement.style.setProperty("--bold-font-family", "WorksansMedium");
		}
		if (e.target.value === "Roboto") {
			document.documentElement.style.setProperty("--regular-font-family", "RobotoMedium");
			document.documentElement.style.setProperty("--medium-font-family", "RobotoRegular");
			document.documentElement.style.setProperty("--bold-font-family", "RobotoBold");
		}
		if (e.target.value === "OpenSans") {
			document.documentElement.style.setProperty("--regular-font-family", "OpenSansRegular");
			document.documentElement.style.setProperty("--medium-font-family", "OpenSansRegular");
			document.documentElement.style.setProperty("--bold-font-family", "OpenSansBold");
		}
		if (e.target.value === "Geomanist") {
			document.documentElement.style.setProperty("--regular-font-family", "Geomanist");
			document.documentElement.style.setProperty("--medium-font-family", "Geomanist");
			document.documentElement.style.setProperty("--bold-font-family", "Geomanist-Bold");
		}
	};
	return (
		<Row>
			<Col>
				<Row>
					<input type={"color"} id="color-picker" className="color-picker" value={bgColor} onInput={(e) => setBgColor(e.target.value)} />
				</Row>
				<Row>
					Choose colour to change bg
					<button onClick={(e) => handleBgChange(e)}>change color</button>
				</Row>
			</Col>
			<Col>
				<Form.Select aria-label="Default select example" onChange={(e) => handleFontChange(e)}>
					<option>Change Font</option>
					<option value="Roboto">Roboto</option>
					<option value="OpenSans">OpenSans</option>
					<option value="Geomanist">Geomanist</option>
					<option value="WorkSans">WorkSans</option>
				</Form.Select>
			</Col>
		</Row>
	);
}

export default ColorPicker;
