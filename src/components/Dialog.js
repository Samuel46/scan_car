import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

export default function AlertDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant="contained"
				onClick={handleClickOpen}
				color="info"
				sx={{
					color: "white",
					py: 2,
					width: { xs: "100%", sm: "250px", md: "320px;" },
				}}
			>
				NO, THANKS
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				sx={{
					backgroundColor: "rgba(0, 0, 0, .7);",
				}}
			>
				<Box
					component="div"
					sx={{
						height: { xs: "100%", sm: "100%", md: "200px" },
					}}
				>
					<DialogTitle
						id="alert-dialog-title"
						sx={{
							color: "#597393",
							fontSize: ".6rem",
						}}
					>
						{"Are you sure you don't want to receive report?"}
					</DialogTitle>
					<DialogContent>
						<DialogContentText
							id="alert-dialog-description"
							sx={{
								color: "#597393",
								textAlign: "center",
							}}
						>
							Your all progress will be lost
						</DialogContentText>
					</DialogContent>
					<DialogActions
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							mt: 3,
						}}
					>
						<Button
							variant="contained"
							onClick={handleClose}
							color="white"
							sx={{
								border: "2px solid #00000080",
								borderRadius: "10px",
								color: "#00000080",
								width: "150px",
								fontSize: "1rem",
							}}
						>
							No
						</Button>
						<Button
							variant="contained"
							onClick={handleClose}
							autoFocus
							color="secondary"
							sx={{
								width: "150px",
								fontSize: "1rem",
								color: "white",
							}}
						>
							Yes
						</Button>
					</DialogActions>
				</Box>
			</Dialog>
		</div>
	);
}
