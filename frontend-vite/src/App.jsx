import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
=======
import { Header } from "./components/Header";
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
<<<<<<< HEAD
      <ToastContainer />
=======
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4
    </React.Fragment>
  );
};
export default App;
