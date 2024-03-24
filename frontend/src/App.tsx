import React from 'react';
import './App.css';
import FormInput from "./components/FormInput"
import Layout from "./Layout";
import {Outlet} from "react-router-dom";

function App() {
  return (
      <Layout>
          <Outlet/>
      </Layout>
  );
}

export default App;