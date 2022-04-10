import React from "react";
import { Box, Typography, Container, Button, Checkbox, IconButton } from "@mui/material";
import Page from "../components/Page";
import NextButton from "../components/NextButton";
import UploadedItem from "../components/UploadedItem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Link } from "react-router-dom";

export default function UploadedImages() {
	return (
		<Page title="Uploaded Images:)">
			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
				maxWidth="lg"
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
						mb: { xs: 2, sm: 4, md: 3 },
					}}
				/>

				<Box
					component="header"
					sx={{
						display: "flex",
						gap: "10px",
						width: "100%",
						alignItems: "center",
						justifyContent: { xs: "center", sm: "space-evenly", md: "space-between" },
						flexDirection: { xs: "column", sm: "row", md: "row" },
						mb: 2,
					}}
				>
					<Button
						variant="contained"
						color="white"
						sx={{
							width: { xs: "40%", sm: "200px", md: "200px;" },
							borderRadius: 1,
							border: " 2px solid #AEB0BF",
							display: "flex",
							justifyContent: "space-around",
						}}
					>
						<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon color="white" />} />

						<Typography variant="button" sx={{ color: "#171E2B" }}>
							Select all
						</Typography>
					</Button>
					<Typography
						variant="h4"
						sx={{
							color: "#171E2B",
							fontWeight: "600",
							order: { xs: "1", sm: "1", md: "2" },
						}}
					>
						Images Uploaded
					</Typography>
				</Box>

				<Box
					component="div"
					sx={{
						mt: "10px",
						display: "grid",
						gridTemplateColumns: { xs: "1fr", sm: "repeat(6, 1fr)", md: "repeat(6, 1fr)" },
						gap: { xs: 2, sm: "5px", md: "10px" },
					}}
				>
					<UploadedItem title="VIN Number" img="/images/upload/vin.svg" />

					<UploadedItem title="Front Side" img="/images/upload/Frontside.svg" width="130px" />

					<UploadedItem title="Front Passenger side" img="/images/upload/passenger_side_front.svg" />

					<UploadedItem title="Passenger side front" img="/images/upload/passager_side_front_half.svg" />
					<UploadedItem title="Passenger side rear" img="/images/upload/passager_front_rear_half.svg" />
					<UploadedItem title="Rear Passenger side" img="/images/upload/rear_passager_side.svg" />
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
					<UploadedItem title="Rear side" img="/images/upload/Rearside.svg" width="130px" />
					<UploadedItem title="Rear driver side" img="/images/upload/rear_driver_side.svg" />
					<UploadedItem title="Driver side front" img="/images/upload/driver_side_front_half.svg" />
					<UploadedItem title="Driver side rear" img="/images/upload/driver_side_rear_half.svg" />
					<UploadedItem title="Front Driver Side" img="/images/upload/front_driver_side.svg" />
					<UploadedItem title="Odometer" img="/images/upload/front_driver_side.svg" />
				</Box>
				<Link
					to="/selected"
					style={{
						textDecoration: "none",
					}}
				>
					<NextButton title="Next" />
				</Link>
			</Container>
		</Page>
	);
}
