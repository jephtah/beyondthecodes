import { Navigation } from "@/component/Navigation";
import { Footer } from "@/component/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "@/utils";
const Layout = ({ children, podcast }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: "relative",
        }}
      >
        <Navigation />
        {children}
        <Footer podcast={podcast} />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
