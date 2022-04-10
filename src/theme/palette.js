import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
	0: "#FFFFFF",
	100: "#F9FAFB",
	200: "#F4F6F8",
	300: "#DFE3E8",
	400: "#C4CDD5",
	500: "#919EAB",
	600: "#637381",
	700: "#454F5B",
	800: "#212B36",
	900: "#161C24",
	500_8: alpha("#919EAB", 0.08),
	500_12: alpha("#919EAB", 0.12),
	500_16: alpha("#919EAB", 0.16),
	500_24: alpha("#919EAB", 0.24),
	500_32: alpha("#919EAB", 0.32),
	500_48: alpha("#919EAB", 0.48),
	500_56: alpha("#919EAB", 0.56),
	500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
	main: "#31D98A",
};
const SECONDARY = {
	main: "#F97A00",
};
const INFO = {
	main: "#A4A4A5",
};
const SUCCESS = {
	lighter: "#E9FCD4",
	light: "#AAF27F",
	main: "#54D62C",
	dark: "#229A16",
	darker: "#08660D",
	contrastText: GREY[800],
};
const WARNING = {
	lighter: "#FFF7CD",
	light: "#FFE16A",
	main: "#FFC107",
	dark: "#B78103",
	darker: "#7A4F01",
	contrastText: GREY[800],
};
const ERROR = {
	lighter: "#FFE7D9",
	light: "#FFA48D",
	main: "#FF4842",
	dark: "#B72136",
	darker: "#00000",
	contrastText: "#fff",
};

const GRADIENTS = {
	primary: createGradient(PRIMARY.light, PRIMARY.main),
	info: createGradient(INFO.light, INFO.main),
	success: createGradient(SUCCESS.light, SUCCESS.main),
	warning: createGradient(WARNING.light, WARNING.main),
	error: createGradient(ERROR.light, ERROR.main),
};

const SCAN_COLORS = {
	green: "#31D98A",
	grey_dark: "#626262",
	grey_light: "#999999",
	grey_lighter: "#00000034",
	darker: "#000000",
	dark: "#171E2B",
	pure_white: "#FFFFFF",
	white: "#31D98A00",
	orange: "#F97A00",
};

const palette = {
	common: { green: "#31D98A", orange: "#F97A00" },
	primary: { ...PRIMARY },
	secondary: { ...SECONDARY },
	info: { ...INFO },
	success: { ...SUCCESS },
	warning: { ...WARNING },
	error: { ...ERROR },
	white: "#FFFFFF",

	grey: GREY,
	gradients: GRADIENTS,
	scan_colors: SCAN_COLORS,
	divider: GREY[500_24],
	text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
	background: { paper: "#fff", default: GREY[100], neutral: GREY[200] },
	action: {
		active: GREY[600],
		hover: GREY[500_8],
		selected: GREY[500_16],
		disabled: GREY[500_80],
		disabledBackground: GREY[500_24],
		focus: GREY[500_24],
		hoverOpacity: 0.08,
		disabledOpacity: 0.48,
	},
};

export default palette;
