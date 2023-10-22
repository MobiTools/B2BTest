import React from "react";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

import Shape from "../components/Shape";
import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();
  return (
    <Stack
      sx={{ width: "100%", height: "100vh" }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Shape
        position={"absolute"}
        width={"186px"}
        height={"117px"}
        left={"32%"}
        top={"24%"}
        borderRadius={"14px"}
        background={
          "linear-gradient(134.55deg, rgba(37,37,37, 0.2) 5.97%, rgba(37,37,37, 0) 75%)"
        }
      />
      <Shape
        position={"absolute"}
        width={"145.35px"}
        height={"157.46px"}
        right={"33%"}
        top={"34%"}
        borderRadius={"58.5px"}
        background={
          "linear-gradient(134.55deg, rgba(37,37,37, 0.2) 5.97%, rgba(37,37,37, 0) 75%)"
        }
        transform={"rotate(135deg)"}
      />
      <Stack direction="row" alignItems={"center"} justifyContent={"center"}>
        <Typography
          fontSize={140}
          color={"black"}
          sx={{
            fontFamily: "Inter",
          }}
        >
          4
        </Typography>
        <Typography
          fontSize={140}
          color={"black"}
          sx={{ fontFamily: "Inter", position: "relative", top: 20 }}
        >
          0
        </Typography>
        <Typography fontSize={140} color={"black"} sx={{ fontFamily: "Inter" }}>
          4
        </Typography>
      </Stack>
      <Typography variant="h4">Page not found</Typography>
      <Typography variant="body2" my={1}>
        The page you are trying to reach is not available. It may have been
        deleted or its URL was misspelled.
      </Typography>
      <Button
        onClick={() => router.back()}
        variant="contained"
        sx={{
          backgroundColor: "#04385A",
          width: 80,
          height: 40,
          borderRadius: "8px",
          fontSize: 10,
          marginTop: 1,
        }}
      >
        Go back
      </Button>
    </Stack>
  );
}
