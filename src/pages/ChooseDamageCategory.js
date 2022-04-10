import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";
import CarCrashOutlinedIcon from "@mui/icons-material/CarCrashOutlined";
import ButtonMui from "../components/ButtonMui";
import Logo from "../components/Logo";
import NextButton from "../components/NextButton";
import { Link } from "react-router-dom";

const CategoryStyles = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
}));
export default function Category() {
	return (
		<CategoryStyles>
			<Logo />

			<Box component="div">
				<Typography variant="h4" sx={{ color: "#171E2B", letterSpacing: "0" }}>
					Please choose your damage category
				</Typography>

				<Typography variant="body1" sx={{ color: "#171E2B", letterSpacing: "0" }}>
					You can choose multiple items at once and continue.
				</Typography>
			</Box>

			<Box
				component="div"
				sx={{
					display: "flex",
					justifyContent: "space-between",
					gap: "30px",
					flexDirection: { xs: "column", sm: "row", md: "row" },
					marginTop: { xs: 3, sm: 3, md: 5 },
				}}
			>
				<ButtonMui icon={<CarCrashOutlinedIcon />} text=" INSPECTION" color="secondary" />
				<ButtonMui icon={<CarCrashOutlinedIcon />} text=" Quote" color="white" />
			</Box>

			<Box
				component="div"
				sx={{
					mt: 8,
				}}
			>
				<Grid container spacing={2}>
					<Grid
						item
						xs={12}
						sm={12}
						md={12}
						sx={{
							a: {
								textDecoration: "none",
							},
						}}
					>
						<Link to="/inspection">
							<NextButton title="next" url="inspection" />
						</Link>
					</Grid>
				</Grid>
			</Box>
		</CategoryStyles>
	);
}
