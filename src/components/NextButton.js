import React from "react";
import { Typography, Button } from "@mui/material";

export default function NextButton({ title, url }) {
	return (
		<Button
			variant="contained"
			color="secondary"
			sx={{
				width: { xs: "100%", sm: "350px", md: "400px" },
				py: 1,
				borderRadius: 1,
				mb: 3,
			}}
		>
			<Typography variant="button" sx={{ color: "#FFFF", fontSize: "30px;", textTransform: "capitalize" }}>
				{title}
			</Typography>
		</Button>
	);
}
