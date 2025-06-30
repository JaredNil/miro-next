import { Outlet } from "react-router-dom";
import {AppHeader} from "@/features/header";
import {Providers} from "@/app/providers.tsx";

export function App() {
  return (
      <Providers>
          <div>
              <AppHeader />
              <Outlet />
          </div>
      </Providers>
  );
}
