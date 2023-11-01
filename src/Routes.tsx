import { Routes as RRRoutes, Route } from "react-router-dom";
import Events from "./pages/Events";

export default function Routes() {
  return (
    <>
      <RRRoutes>
        <Route path={"/"} element={<Events />} />
      </RRRoutes>
    </>
  );
}
