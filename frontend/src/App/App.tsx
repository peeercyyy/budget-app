import {
  createBrowserRouter,
  Link,
} from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { LoginPage } from "./Pages/LoginPage";
import { NotFoundPage } from "./Pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: (
      <div>
        <LoginPage />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <NotFoundPage />
        <Link to="/">Перейти на главную страницу</Link>
      </div>
    ),
  },
]);

export default router;
