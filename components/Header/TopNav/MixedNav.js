import React from "react";
import Link from "next/link";

function NavBar() {
  const navData = ["Home", "Services", "About", "Contact", "News"];

  return (
    <ul>
      {navData.map((item, index) => (
        <li key={index}>
          <Link
            href={`/${item.toLowerCase()}`}
            style={{
              textDecoration: "none",
              color: "white",
              borderBottom: "2px solid transparent",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.borderBottomColor = "#FFF")}
            onMouseLeave={(e) =>
              (e.target.style.borderBottomColor = "transparent")
            }
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
