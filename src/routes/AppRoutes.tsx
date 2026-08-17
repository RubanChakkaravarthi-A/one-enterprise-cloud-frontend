import { useRoutes } from "react-router-dom";

import { routeConfig } from "./routeConfig";


function AppRoutes() {

  const routes = useRoutes(routeConfig);

  return routes;

}


export default AppRoutes;