import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Pages/LayoutPage/Layout";
import AboutPage from "./Pages/AboutPages/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import OrganizationalChart from "./Pages/AboutPages/OrganizationalChart";
import LeadershipPage from "./Pages/AboutPages/LeadershipPage";
import OurEquipments from "./Pages/AboutPages/OurEquipments";
import OurServicesPage from "./Pages/OurServicesPage/OurServicesPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import OurExperiencePage from "./Pages/OurExperiencePage/OurExperiencePage";

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "about",
          element: <AboutPage />,
          children: [
            { path: "our-equipments", element: <OurEquipments /> },
            { path: "leadership", element: <LeadershipPage /> },
            { path: "organizational-chart", element: <OrganizationalChart /> },
            { path: "our-experience", element: <OurExperiencePage /> },
            // { path: "/about/introduction", element: <GSPIntroduction /> },
            // { path: "/about/information", element: <GSPInformation /> },
            // { path: "/about/our-man-power", element: <OurManPower /> },
            // { path: "/about/owned-machines", element: <OwnedMachines /> },
            // { path: "/about/financial-status", element: <FinancialStatus /> },
          ],
        },
        { path: "projects", element: <ProjectsPage /> },
        { path: "our-services", element: <OurServicesPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
