import { ReactNode } from "react";
import PrivateRoute from "../shared/PrivateRoute";



export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (

    <PrivateRoute>

      {children}

    </PrivateRoute>

  );

}