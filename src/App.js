import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";

const theme = {
    colors: {
        header: "#fff",
        body: "#fff",
        footer: "#F4F4F4",
    },
    mobile: "768px",
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
