import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/pages/HomePage";
import { CandidatesPage } from "./components/pages/CandidatesPage";
import { CandidateDetailPage } from "./components/pages/CandidateDetailPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { ComparePage } from "./components/pages/ComparePage";
import { NewsPage } from "./components/pages/NewsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "adaylar", Component: CandidatesPage },
      { path: "adaylar/:id", Component: CandidateDetailPage },
      { path: "projeler", Component: ProjectsPage },
      { path: "karsilastir", Component: ComparePage },
      { path: "haberler", Component: NewsPage },
    ],
  },
]);
