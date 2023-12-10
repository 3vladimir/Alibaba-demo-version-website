import * as React from "react"; 
import Header from "./Header of page/Header";
import Main from "./Main of page/Main";
import Footer from "./Footer of page/Footer";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
