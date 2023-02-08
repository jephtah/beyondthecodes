import { Navigation } from "@/component/Navigation";
import { Footer } from "@/component/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "@/utils";
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: "relative",
        }}
      >
        <Navigation />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
