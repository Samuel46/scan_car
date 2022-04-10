import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

const CheckBox = styled.div`
	background: rgba(0, 0, 0, 0.5);
	border-radius: 9999px;
	position: absolute;
	border: 2px solid #ffffff;
	width: 70px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function Selected({ title, img, width }) {
	return (
		<Box
			sx={{
				backgroundColor: "#EBEBEB",
				width: { xs: "220px", sm: "120px", md: "220px" },
				height: { xs: "220px", sm: "120px", md: "220px" },
				border: "2px solid #F97A00;",
				borderRadius: "8px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "1.3rem",
			}}
		>
			<Box
				component="div"
				sx={{
					marginTop: { xs: "-182px;", sm: "-93px;", md: "-182px;" },
					position: "absolute",
					backgroundColor: "#626262",
					textAlign: "center",
					padding: "0.4rem",
					borderRadius: "0px 0px 8px 8px",
					width: { xs: "143px", sm: "80px", md: "143px" },
					height: { xs: "35px", sm: "25px", md: "35px" },
				}}
			>
				<Typography
					variant="body1"
					sx={{
						color: "#FFFF",
						fontWeight: "bold",
						fontSize: { xs: "14px;", sm: ".4rem", md: "14px;" },
					}}
				>
					Uploaded{" "}
				</Typography>{" "}
			</Box>{" "}
			<Box
				component="img"
				src={img}
				sx={{
					paddingTop: "20px",
					paddingBottom: "30px",
					width: {
						width,
					},
				}}
			/>{" "}
			<CheckBox>
				<DoneRoundedIcon
					sx={{
						fontSize: "2.5rem",
						color: "scan_colors.green",
						fontWeight: "bold",
					}}
				/>{" "}
			</CheckBox>
			<Box
				component="div"
				sx={{
					marginBottom: { xs: "-180px", sm: "-90px;", md: "-180px" },
					position: "absolute",
					backgroundColor: "#626262",
					padding: { xs: "0.4rem", sm: "0.35rem", md: "0.4rem" },
					textAlign: "center",
					borderRadius: "0px 0px 8px 8px",
					width: { xs: "215px", sm: "115px", md: "215px" },
				}}
			>
				<Typography
					variant="body1"
					sx={{
						color: "#FFFF",
						fontWeight: "bold",
						fontSize: { xs: ".9rem", sm: ".6rem", md: ".9rem" },
					}}
				>
					{" "}
					{title}{" "}
				</Typography>{" "}
			</Box>{" "}
		</Box>
	);
}
