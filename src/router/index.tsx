import React, {lazy, Suspense} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {routes} from "./routes";

const Home = lazy(()=> import("../pages/home"))
const Review = lazy(()=> import("../pages/review"))

export default function Router() {
  return (
    <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.reviews()} element={<Review/>}/>
        <Route path="*" element={<div>404</div>}/>
        </Routes>
        </Suspense>
    </BrowserRouter>
  );
}
