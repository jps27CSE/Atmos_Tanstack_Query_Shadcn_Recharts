import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout.tsx";
import { ThemeProvider } from "@/context/theme-provider.tsx";
import WeatherDashboard from "@/pages/weather-dashboard.tsx";
import CityPage from "@/pages/city-page.tsx";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
