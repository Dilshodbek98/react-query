import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "60px",
          background: "#3d3d3d",
          alignItems: "center",
        }}
      >
        <Link
          style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          to={"/home"}
        >
          Home
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          to={"/superheroes"}
        >
          SuperHeroes
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          to={"/rqsuperheroes"}
        >
          RQSuperHeroes
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          to={"/pagination"}
        >
          pagination
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          to={"/infinitequery"}
        >
          Infinite Query
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
