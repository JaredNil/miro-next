import { Outlet } from "react-router-dom";
import {Providers} from "@/app/providers.tsx";

export function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Providers>
                <Outlet />
            </Providers>
        </div>
    );
}
