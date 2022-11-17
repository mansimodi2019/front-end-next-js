import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PrintIcon from "@mui/icons-material/Print";
import AddIcon from "@mui/icons-material/Add";
import PlaylistAddCheckCircleOutlinedIcon from "@mui/icons-material/PlaylistAddCheckCircleOutlined";
import Image from "next/image";

const PageDetailsComp = ({
  title,
  description,
  prepTime,
  bakeTime,
  totalTime,
  yieldDetails,
  img,
}) => {
  return (
    <Box sx={{ display: "inline-block", width: "100%", mt: "20px" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", flexFlow: "column", mt: "20px" }}>
              <Typography
                variant="h2"
                sx={{
                  marginBottom: "90px",
                  fontSize: { xs: "20px", sm: "26px", md: "36px", lg: "48px" },
                  fontWeight: "bold",
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  mb: "30px",
                  color: "#838383",
                  fontSize: { xs: "16px", md: "18px" },
                }}
              >
                {description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  pb: "15px",
                  borderBottom: "1px solid #3935351f",
                  mb: "20px",
                }}
              >
                <Box sx={{ display: "flex", gap: "8px", mb: "15px" }}>
                  <AccessTimeIcon
                    sx={{
                      fontSize: "50px",
                    }}
                  />
                  <Box sx={{ display: "flex", flexFlow: "column", mr: "30px" }}>
                    <Typography
                      gutterBottom
                      component="div"
                      variant="caption"
                      sx={{ fontWeight: "bold" }}
                    >
                      PREP
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "16px", md: "18px" },
                      }}
                    >
                      {prepTime}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexFlow: "column",
                    mr: "30px",
                    mb: "15px",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="caption"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    BAKE
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "16px", md: "18px" },
                    }}
                  >
                    {bakeTime}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexFlow: "column", mb: "15px" }}>
                  <Typography
                    gutterBottom
                    variant="caption"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    TOTAL
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "16px", md: "18px" },
                    }}
                  >
                    {totalTime}
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} lg={5}>
                  <Box sx={{ display: "flex", gap: "8px", mb: "15px" }}>
                    <PlaylistAddCheckCircleOutlinedIcon
                      sx={{
                        fontSize: "50px",
                      }}
                    />
                    <Box
                      sx={{ display: "flex", flexFlow: "column", mr: "30px" }}
                    >
                      <Typography
                        gutterBottom
                        variant="caption"
                        sx={{ fontWeight: "bold" }}
                        component="div"
                      >
                        YIELD
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "16px", md: "18px" },
                        }}
                      >
                        {yieldDetails}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} lg={7}>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <Button
                      variant="outlined"
                      startIcon={<AddIcon />}
                      sx={{
                        borderColor: "red",
                        color: "black",
                        borderRadius: "0px",
                      }}
                    >
                      SAVE RECIPE
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={<PrintIcon />}
                      sx={{
                        borderColor: "red",
                        color: "black",
                        borderRadius: "0px",
                      }}
                    >
                      PRINT
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                mt: "50px",
                ".myImg": {
                  width: "100%",
                },
              }}
            >
              <Image
                src={img}
                className="img-fluid myImg"
                alt="img"
                width={300}
                height={500}
                unoptimized={true}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PageDetailsComp;
