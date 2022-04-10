import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "../components/Page";
import { Link } from "react-router-dom";

const RootStyle = styled(Page)(({ theme }) => ({
	paddingTop: theme.spacing(8),
	paddingBottom: theme.spacing(8),
}));

export default function GetStarted() {
	return (
		<RootStyle title="Get Started">
			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Box
					component="img"
					src="/images/logo/logo.png"
					sx={{
						height: 100,
						mx: "auto",
						mt: { xs: 5, sm: 10, md: 5 },
						mb: { xs: 2, sm: 4, md: 3 },
					}}
				/>

				<Box component="div">
					<Typography
						variant="h4"
						sx={{
							color: "#171E2B",
							fontWeight: "bold",

							textAlign: "center",
						}}
					>
						Welcome to carscan lite
					</Typography>

					<Typography
						variant="body1"
						sx={{
							color: "#171E2B",
							textAlign: "center",
							fontWeight: "500",
							mt: "10px",
						}}
					>
						Let's begin assessing your vehicle from the comfort of your home
					</Typography>
				</Box>

				<Button
					variant="contained"
					color="secondary"
					component={Link}
					to="/upload"
					sx={{
						width: { xs: "100%", sm: "350px", md: "400px" },
						py: 1,
						borderRadius: 1,
						mb: 3,
						mt: 15,
					}}
				>
					<Typography
						variant="button"
						sx={{
							color: "#FFFF",
							fontSize: "24px;",
							textTransform: "capitalize",
							fontWeight: "normal",
						}}
					>
						Let's Get Started
					</Typography>
				</Button>
			</Container>
		</RootStyle>
	);
}
