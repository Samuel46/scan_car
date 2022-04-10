import React from "react";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import Dialog from "../components/Dialog";
import Page from "../components/Page";
import styled from "styled-components";

const RootStyle = styled(Page)`
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
`;
const Input = styled.input`
	height: 100px;
	border: 2px solid #aeb0bf;
	border-radius: 20px;
	width: 65%;
	margin-top: 3rem;
	margin-bottom: 2rem;
`;

export default function FeedBack() {
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

				<Input />

				<Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 2 }}>
					<Dialog />

					<Button
						variant="contained"
						color="secondary"
						sx={{
							color: "white",
							py: 2,
							width: { xs: "100%", sm: "250px", md: "320px;" },
						}}
					>
						RECEIVE
					</Button>
				</Stack>
			</Container>
		</RootStyle>
	);
}
