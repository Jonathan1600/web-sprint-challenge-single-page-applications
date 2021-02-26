import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
        <Link to={`/pizza`}>
          <button className="getPizza"> Make Your Own PIZZA!</button>
        </Link>
    </div>
  );
}
