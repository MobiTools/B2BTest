import React from "react";
import Link from "next/link";
import DropdownMenu from "./dropdownMenu";
import useStyles from "../header-style";

function NavBar({ fixed }) {
  const { classes } = useStyles();
  const navData = ["Home", "Services", "About", "News", "Contact"];

  return (
    <ul>
      {navData.map((item, index) => {
        if (item === "Services") {
          return (
            <li style={{ width: "76.35px", marginRight: 20}}>
              <DropdownMenu fixed={fixed} />
            </li>
          );
        } else {
          return (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase()}`}
                className={classes.navLinkMixed}
                style={{
                  color: "white",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.borderBottomColor = "#FFF")
                }
                onMouseLeave={(e) =>
                  (e.target.style.borderBottomColor = "transparent")
                }
              >
                {item}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default NavBar;
