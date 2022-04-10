import { Navigate, useRoutes } from "react-router-dom";
import { ChooseDamageCategory, InspectionMethod, Home, UploadScreen, NotFound } from "./pages";
import FeedBack from "./pages/FeedBack";
import GetStarted from "./pages/GetStarted";
import SelectedImages from "./pages/SelectedImaages";
import UploadedImages from "./pages/UploadedImages";

export default function Routes() {
	return useRoutes([
		{
			path: "/",
			element: <Home />,
		},
		{ path: "category", element: <ChooseDamageCategory /> },
		{ path: "inspection", element: <InspectionMethod /> },
		{ path: "upload", element: <UploadScreen /> },
		{ path: "start", element: <GetStarted /> },
		{ path: "uploaded_images", element: <UploadedImages /> },
		{ path: "selected", element: <SelectedImages /> },
		{ path: "feedback", element: <FeedBack /> },
		{ path: "404", element: <NotFound /> },
		{ path: "*", element: <Navigate to="/404" replace /> },
	]);
}
