import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Grid, Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ButtonMui from "../components/ButtonMui";
import Logo from "../components/Logo";
import NextButton from "../components/NextButton";
import { Link } from "react-router-dom";

const InspectionStyles = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	color: "red",
}));
export default function InspectionMethod() {
	return (
		<InspectionStyles>
			<Logo />

			<Box component="div">
				<Typography variant="h4" sx={{ color: "#171E2B", letterSpacing: "0", fontWeight: "bold" }}>
					Please choose your damage category
				</Typography>

				<Typography
					variant="body1"
					sx={{
						color: "#171E2B",
						letterSpacing: "0",
						fontWeight: "500",
						mt: "10px",
					}}
				>
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
				<ButtonMui
					text="UPLOAD PHOTOS"
					color="secondary"
					component={
						<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon color="white" />} />
					}
				/>
				<ButtonMui
					text="TAKE FROM CAMERA"
					color="white"
					component={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />}
				/>
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
						<Link to="/start">
							<NextButton title="Next" />
						</Link>
					</Grid>
				</Grid>
			</Box>
		</InspectionStyles>
	);
}
