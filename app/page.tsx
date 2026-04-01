
import "./globals.css";
import { Suspense } from "react";
import Homepage from "./components/homepage";

export default function Home() {

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Homepage />
    </Suspense>
  );
}
