import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const TypoButtons = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h4"
          component="h5"
          align="center"
          mt={3}
          color="red"
          sx={{ textDecoration: "underline" }}
        >
          Mui Typography
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          mt={4}
          sx={{
            backgroundColor: "green",
            color: "white",
            padding: "1rem",
            fontSize: "1.4rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet beatae
          dolores debitis deleniti similique, voluptatum fuga totam eveniet
          animi dolorum?
        </Typography>
        <Typography
          variant="overline"
          // component={'h2'}
          // mt={4}
          sx={{
            display: "inline-block",
            marginTop: "2.5rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet beatae
          dolores debitis deleniti similique, voluptatum fuga totam eveniet
          animi dolorum?
        </Typography>
      </Container>
      <Container>
        <Box>
          <Button variant="text" color="warning">
            Text
          </Button>
          <Button variant="contained" color="error">
            Contained
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
        </Box>

        <Stack direction={{xs:'column', sm:'row'}} spacing={{xs:1, sm:2, md:4}} justifyContent={"center"} mt={2}>
          <Button variant="text" color="warning">
            Text
          </Button>
          <Button variant="contained" color="error">
            Contained
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default TypoButtons;
