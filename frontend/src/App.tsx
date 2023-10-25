import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import client from "./services/apolloClient";
import Routing from "./layout/routing";
import { ThemeProvider } from "@mui/material/styles";
import ThemeStyle from "./themeStyle";

const App = () => {
  const theme = ThemeStyle();
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
