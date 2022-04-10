import React from "react";
import { Box } from "@mui/material";

export default function Logo() {
	return (
		<Box
			component="img"
			src="/images/logo/logo.png"
			sx={{
				height: 100,
				mx: "auto",
				mt: { xs: 5, sm: 8, md: 12 },
				mb: { xs: 2, sm: 4, md: 4 },
			}}
		/>
	);
}
