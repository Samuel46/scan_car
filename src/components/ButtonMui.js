import React from "react";
import { Typography, Button } from "@mui/material";

export default function ButtonMui({ text, icon, color, component }) {
	return (
		<Button
			variant="contained"
			color={color}
			sx={{
				width: { xs: "100%", sm: "350px", md: "400px;" },
				py: 3,
				borderRadius: 1,
				border: color === "white" ? " 2px solid #AEB0BF" : null,
				display: "flex",
				justifyContent: "space-around",
			}}
		>
			{component && component ? component : icon && icon}

			<Typography variant="button" sx={{ color: color === "white" ? "#363841" : "white" }}>
				{text}
			</Typography>
		</Button>
	);
}
