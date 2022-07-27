import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Loader from "react-loader-spinner";
import Container from "../src/components/Container/Container";
import AppBar from "../src/components/AppBar/AppBar";

const HomePage = lazy(() => import("../src/views/HomePage/HomePage"));
const UserPage = lazy(() => import("../src/views/UserPage/UserPage"));

export default function App() {
  return (
    <>
      <Container>
        <Suspense>
          <Switch>
            <Route path="/user/:userId" exact>
              <UserPage />
            </Route>

            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
