import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Pages/LayoutPage/Layout";
import AboutPage from "./Pages/AboutPages/AboutPage";
import Loading from "./Components/Loading/Loading";

const LeadershipPage = lazy(() => import("./Pages/AboutPages/LeadershipPage"));
const OurEquipments = lazy(() => import("./Pages/AboutPages/OurEquipments"));
const OrganizationalChart = lazy(() =>
  import("./Pages/AboutPages/OrganizationalChart.jsx")
);
const OurExperiencePage = lazy(() =>
  import("./Pages/OurExperiencePage/OurExperiencePage")
);
const OurClientsPage = lazy(() =>
  import("./Pages/OurClientsPage/OurClientsPage")
);
const ProjectsPage = lazy(() => import("./Pages/ProjectsPage/ProjectsPage"));

const OurServicesPage = lazy(() =>
  import("./Pages/OurServicesPage/OurServicesPage")
);
const ContactPage = lazy(() => import("./Pages/ContactPage/ContactPage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));

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
            {
              path: "our-equipments",
              element: (
                <Suspense fallback={<Loading />}>
                  {" "}
                  <OurEquipments />{" "}
                </Suspense>
              ),
            },
            {
              path: "leadership",
              element: (
                <Suspense fallback={<Loading />}>
                  {" "}
                  <LeadershipPage />{" "}
                </Suspense>
              ),
            },
            {
              path: "organizational-chart",
              element: (
                <Suspense fallback={<Loading />}>
                  {" "}
                  <OrganizationalChart />{" "}
                </Suspense>
              ),
            },
            {
              path: "our-experience",
              element: (
                <Suspense fallback={<Loading />}>
                  {" "}
                  <OurExperiencePage />{" "}
                </Suspense>
              ),
            },
            {
              path: "our-clients",
              element: (
                <Suspense fallback={<Loading />}>
                  {" "}
                  <OurClientsPage />{" "}
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "projects",
          element: (
            <Suspense fallback={<Loading />}>
              {" "}
              <ProjectsPage />{" "}
            </Suspense>
          ),
        },
        {
          path: "our-services",
          element: (
            <Suspense fallback={<Loading />}>
              {" "}
              <OurServicesPage />{" "}
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<Loading />}>
              {" "}
              <ContactPage />{" "}
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<Loading />}>
              {" "}
              <NotFoundPage />{" "}
            </Suspense>
          ),
        },
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
