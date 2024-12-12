import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "@/components/layout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>Hello</Layout>
    </BrowserRouter>
  );
}

export default App;
