import {
  Chip,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Link,
  Sheet,
  Typography,
} from "@mui/joy";
import Button from "@mui/joy/Button";
import ModeToggleButton from "./ModeToggleButton.tsx";
import { Person } from "@mui/icons-material";

export default function JoyTutorial() {
  return (
    <>
      <ModeToggleButton />
      <Sheet
        sx={{
          width: 300,
          mx: "auto", // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
      >
        <Typography level="h4" component="h1" color={"primary"}>
          Welcome!
        </Typography>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" placeholder="password" />
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Don't have an account?
        </Typography>
        <Button color="secondary">Hi</Button>
        <Button color="secondary" variant={"soft"}>
          Hi Soft
        </Button>
        <Button
          color="secondary"
          variant={"outlined"}
          startDecorator={<Person />}
        >
          Hi Outlined
        </Button>

        <IconButton variant="outlined" color="secondary">
          <Typography key={12} fontSize={12} startDecorator={<Person />}>
            Hello World
          </Typography>
        </IconButton>
        <Chip variant="soft" color="secondary">
          Chip?
        </Chip>
      </Sheet>
    </>
  );
}
