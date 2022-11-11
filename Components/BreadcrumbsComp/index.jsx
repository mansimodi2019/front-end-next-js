import React from "react";
import { Breadcrumbs, Container, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";

const BreadcrumbsComp = ({ mainTitle, mainLink }) => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="text.primary"
      href={mainLink}
      onClick={handleClick}
    >
      {mainTitle}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="text.primary"
      href="/"
      onClick={handleClick}
    >
      BREAD
    </Link>,
    <Typography key="3" color="text.primary">
      QUICK BREAD
    </Typography>,
  ];

  return (
    <Container maxWidth="xl">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          mt: "60px",
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Container>
  );
};

export default BreadcrumbsComp;
