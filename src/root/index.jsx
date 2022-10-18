import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import RQSuperHeroesy from "../components/RQSuperHeroesy";
import SuperHeroes from "../components/SuperHeroes";
import { ReactQueryDevtools } from "react-query/devtools";
import Superhero from "../components/superhero";
import Pagination from "../components/pagination";
import InfiniteQuery from "../components/InfiniteQuery";
const Root = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/superheroes" element={<SuperHeroes />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/infinitequery" element={<InfiniteQuery />} />
            <Route path="/superhero/:id" element={<Superhero />} />
            <Route path="/rqsuperheroes" element={<RQSuperHeroesy />} />
            <Route path="/*" element={<h1>page not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default Root;
