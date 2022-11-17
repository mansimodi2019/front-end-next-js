import React from "react";
import { Breadcrumbs, Container, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";

const BreadcrumbsComp = ({ mainTitle, mainLink, lastTitle }) => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="text.primary" href="/">
      HOME
    </Link>,
    <Link underline="hover" key="2" color="text.primary" href={mainLink}>
      {mainTitle}
    </Link>,
    <Typography key="3" color="text.primary">
      {lastTitle}
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
        {/* {breadcrumbs.filter((item) => item?.props?.children !== undefined)} */}
        {breadcrumbs}
      </Breadcrumbs>
    </Container>
  );
};

export default BreadcrumbsComp;
