import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Pages/LayoutPage/Layout";
import AboutPage from "./Pages/AboutPages/AboutPage";
// import OurExperiencePage from "./Pages/OurExperiencePages/OurExperiencePage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
// import GSPInformation from "./Pages/AboutPages/GSPInformation";
import OrganizationalChart from "./Pages/AboutPages/OrganizationalChart";
// import OurManPower from "./Pages/AboutPages/OurManPower";
// import OwnedMachines from "./Pages/AboutPages/OwnedMachines";
// import FinancialStatus from "./Pages/AboutPages/FinancialStatus";
import LeadershipPage from "./Pages/AboutPages/LeadershipPage";
// import GalleryContextProvider from "./Context/GalleryContext";
import OurEquipments from "./Pages/AboutPages/OurEquipments";
// import GSPIntroduction from "./Pages/AboutPages/GSPIntroduction/GSPIntroduction";
import OurServicesPage from "./Pages/OurServicesPage/OurServicesPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";

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
            // { path: "/about/introduction", element: <GSPIntroduction /> },
            // { path: "/about/information", element: <GSPInformation /> },
            // { path: "/about/our-man-power", element: <OurManPower /> },
            // { path: "/about/owned-machines", element: <OwnedMachines /> },
            // { path: "/about/financial-status", element: <FinancialStatus /> },
          ],
        },
        { path: "projects", element: <ProjectsPage /> },
        { path: "ourServices", element: <OurServicesPage /> },
        // { path: "ourExperience", element: <OurExperiencePage /> },
        // {
        //   path: "gallery",
        //   element: (
        //     <GalleryContextProvider>
        //       <GalleryPage />
        //     </GalleryContextProvider>
        //   ),
        // },
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
