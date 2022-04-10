import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import UploadItem from "../components/UploadItem";
import NextButton from "../components/NextButton";
import Page from "../components/Page";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const UploadScreenStyles = styled(Page)`
	display: flex;
`;

export default function UploadScreen() {
	return (
		<UploadScreenStyles title="CarScan | Upload">
			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<IconButton
					sx={{
						position: "absolute",
						left: "0",
						marginTop: "50px",
						marginLeft: "20px",
					}}
				>
					<img src="/images/icons/back.svg" alt="back" width="60px" />
				</IconButton>

				<Box
					component="img"
					src="/images/logo/logo.png"
					sx={{
						height: 100,
						mx: "auto",
						mt: { xs: 5, sm: 10, md: 5 },
						mb: { xs: 2, sm: 2, md: 3 },
					}}
				/>

				<Box component="header">
					<Typography
						variant="h3"
						sx={{
							color: "#171E2B",
							fontWeight: "600",
						}}
					>
						Get Ready
					</Typography>
				</Box>

				<Box
					component="div"
					sx={{
						mt: 3,
						display: "grid",
						gridTemplateColumns: { xs: "1fr", sm: "repeat(6, 1fr)", md: "repeat(6, 1fr)" },
						gap: { xs: 2, sm: "5px", md: "10px" },
					}}
				>
					<UploadItem title="VIN Number" img="/images/upload/vin.svg" />
					<UploadItem title="Front Side" img="/images/upload/Frontside.svg" />
					<UploadItem title="Front Passenger side" img="/images/upload/passenger_side_front.svg" />
					<UploadItem title="Passenger side front.." img="/images/upload/passager_side_front_half.svg" />
					<UploadItem title="Passenger side rear.." img="/images/upload/passager_front_rear_half.svg" />
					<UploadItem title="Rear Passenger side" img="/images/upload/rear_passager_side.svg" />
				</Box>

				<Box
					component="div"
					sx={{
						mt: "10px",
						display: "grid",
						gridTemplateColumns: { xs: "1fr", sm: "repeat(6, 1fr)", md: "repeat(6, 1fr)" },
						gap: { xs: 2, sm: "5px", md: "10px" },
						mb: 3,
					}}
				>
					<UploadItem title="Rear side" img="/images/upload/Rearside.svg" />
					<UploadItem title="Rear driver side" img="/images/upload/rear_driver_side.svg" />
					<UploadItem title="Driver side front.." img="/images/upload/driver_side_front_half.svg" />
					<UploadItem title="Driver side rear.." img="/images/upload/driver_side_rear_half.svg" />
					<UploadItem title="Front Driver Side" img="/images/upload/front_driver_side.svg" />
					<UploadItem title="Odometer" img="/images/upload/front_driver_side.svg" />
				</Box>
				<Link
					to="/uploaded_images"
					style={{
						textDecoration: "none",
					}}
				>
					<NextButton title="Next" />
				</Link>
			</Container>
		</UploadScreenStyles>
	);
}
