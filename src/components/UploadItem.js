import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";

const Input = styled.input`
	display: none;
`;

export default function UploadItem({ title, img }) {
	// write state to extract the image url using usestate
	// display the image from url using useState

	const [image, setImage] = useState(null);

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	console.log(image);

	return (
		<label htmlFor="upload_car_photo_image">
			<Input accept="image/*" id="upload_car_photo_image" multiple type="file" onChange={handleChange} />
			<Button
				component="div"
				sx={{
					backgroundColor: "#626262",
					width: { xs: "220px", sm: "120px", md: "220px" },
					height: { xs: "200px", sm: "120px", md: "200px" },
					border: "2px solid #F97A00;",
					borderRadius: "8px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "1.3rem",
					"&:hover": {
						backgroundColor: "#626262",
					},
				}}
			>
				<Box component="img" src={(image && image) || img} />
				<Typography
					variant="body1"
					sx={{
						color: "#FFFF",
						position: "absolute",
						marginBottom: { xs: "-180px", sm: "-90px;", md: "-162px" },
						fontSize: { xs: ".9rem", sm: ".6rem", md: ".9rem" },
					}}
				>
					{title}
				</Typography>
			</Button>
		</label>
	);
}
