import React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import useStyles from "../header-style";

export default function DropdownMenu() {
  const { classes } = useStyles();
  const dropdownData = [
    { name: "Support infrastructure", link: "supportinfrastructure" },
    { name: "Web and app support", link: "Webandappsupport" },
    {
      name: "Migration and implementation",
      link: "Migrationandimplementation",
    },
    { name: "Cloud solutions", link: "cloudsolutions" },
  ];
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // Calculăm lățimea maximă pentru a seta pe MenuList
  const maxWidth = dropdownData.reduce((max, item) => {
    const itemWidth = item.name.length * 8; // Poți ajusta acest multiplicator în funcție de font și dimensiunea fontului
    return Math.max(max, itemWidth);
  }, 160); // 160 este o lățime minimă pentru a evita un meniul foarte îngust

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row">
      <div>
        <Link
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleClose}
          style={{
            textDecoration: "none",
            color: "white",
            borderWidth: 0,
            fontWeight: "600",
          }}
          href={"/services"}
        >
          Services
        </Link>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          onMouseLeave={handleClose}
          sx={{
            width: `270px`,
            // backgroundColor: "black",
          }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
                backgroundColor: "black",
                padding: "0px 5px 0px 10px",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    sx={{ display: "flex", flexDirection: "column" }}
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    {dropdownData.map((item, index) => {
                      return (
                        <div style={{ marginTop: index === 0 ? 0 : 8 }}>
                          <Link
                            href={`/${item.name}`}
                            className={classes.navLinkMixed}
                            style={{
                              textDecoration: "none",
                              marginBottom: 5,
                              color: "white",
                              fontWeight: "600",
                              marginRight: 0,

                              display: "inline", // Setează display-ul la inline
                            }}
                            onMouseEnter={(e) =>
                              (e.target.style.borderBottomColor = "#FFF")
                            }
                            onMouseLeave={(e) =>
                              (e.target.style.borderBottomColor = "transparent")
                            }
                          >
                            {item.name}
                          </Link>
                        </div>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
