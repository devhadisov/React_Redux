import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import HotelDetail from "./Hotel";

const styles = {
  app: {
    height: "100%",
    width: "100%"
    // backgroundImage: "url(" + ./assets/background.png + ")"
  }
};

const theme = createMuiTheme({
  typography: {
    fontfamily: "Lucida Grande",
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app" style={styles.app}>
          <HotelDetail />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
