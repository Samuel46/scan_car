import React from "react";
import { Box, Typography, Container, Button, IconButton } from "@mui/material";
import Page from "../components/Page";
import NextButton from "../components/NextButton";
import Selected from "../components/Selected";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";

export default function SelectedImages() {
	return (
		<Page title="Uploaded Images:)">
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
						color="white"
						variant="contained"
						startIcon={<CancelOutlinedIcon />}
						sx={{
							border: "1px solid #000000B3",
							backgroundColor: "scan_colors.white",
							padding: "1rem",
							width: "251px",
						}}
					>
						cancle
					</Button>
					<Typography variant="h4">Uploaded Images</Typography>
					<Button
						variant="contained"
						color="white"
						startIcon={<DeleteOutlineOutlinedIcon />}
						sx={{
							border: "1px solid #000000B3",
							backgroundColor: "scan_colors.white",
							padding: "1rem",
							width: "251px",
						}}
					>
						Delete
					</Button>
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
					<Selected title="VIN Number" img="/images/upload/vin.svg" />

					<Selected title="Front Side" img="/images/upload/Frontside.svg" width="130px" />

					<Selected title="Front Passenger side" img="/images/upload/passenger_side_front.svg" />

					<Selected title="Passenger side front half" img="/images/upload/passager_side_front_half.svg" />
					<Selected title="Passenger side rear half" img="/images/upload/passager_front_rear_half.svg" />
					<Selected title="Rear Passenger side" img="/images/upload/rear_passager_side.svg" />
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
					<Selected title="Rear side" img="/images/upload/Rearside.svg" width="130px" />
					<Selected title="Rear driver side" img="/images/upload/rear_driver_side.svg" />
					<Selected title="Driver side front half" img="/images/upload/driver_side_front_half.svg" />
					<Selected title="Driver side rear half" img="/images/upload/driver_side_rear_half.svg" />
					<Selected title="Front Driver Side" img="/images/upload/front_driver_side.svg" />
					<Selected title="Odometer" img="/images/upload/front_driver_side.svg" />
				</Box>
				<Link
					to="/feedback"
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
