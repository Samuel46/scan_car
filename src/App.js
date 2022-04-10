// routes
import Routes from "./routes";

// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Routes />
    </ThemeConfig>
  );
}

export default App;
