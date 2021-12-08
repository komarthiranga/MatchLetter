import "./App.css";
import React, { Fragment } from "react";

import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
const App = () => {
  return (
    <div>
      <Fragment>
        <Header />
        <main>
          <section>
            <Container />
          </section>
        </main>
      </Fragment>
    </div>
  );
};

export default App;
