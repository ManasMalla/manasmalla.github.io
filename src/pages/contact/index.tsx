import TextField from "@mui/material/TextField";
import { grey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Contact() {
  const theme = createTheme({
    typography: {
      fontFamily: ['"Ambit"'].join(","),
    },
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });
  return (
    <div className="mx-96 flex flex-col items-center">
      <div className="mx-auto w-20 aspect-square rounded-full bg-[#005AC1] bg-opacity-10 mb-12">
        <img src="/wink-memoji.png" className="p-2" />
      </div>
      <h1 className="text-5xl text-center">
        <span className="underline leading-[1.3em] decoration-[#FBBC04]/20">
          Hello!
        </span>{" "}
        We&apos;ve been
        <br />
        waiting for you.
      </h1>
      <h2 className="my-6">
        Fill in the form or{" "}
        <a
          href="mailto:manasmalla.dev@gmail.com"
          className="underline font-semibold"
        >
          Send us an email
        </a>
      </h2>
      <ThemeProvider theme={theme}>
        <TextField
          id="standard-basic"
          label="What's your name?"
          variant="standard"
          className="w-full my-2"
          sx={{ fontFamily: "Ambit", margin: "0 0.5rem" }}
        />
        <TextField
          id="standard-basic"
          label="Your email"
          variant="standard"
          className="w-full my-2"
          sx={{ fontFamily: "Ambit", margin: "0 1.5rem" }}
        />
        <TextField
          id="standard-basic"
          label="Tell me about your project"
          variant="standard"
          className="w-full my-2"
          sx={{ fontFamily: "Ambit", margin: "0 0.5rem" }}
        />
      </ThemeProvider>
      <button
        onClick={() => {}}
        className="bg-black text-white px-12 py-3 rounded-full uppercase my-8"
      >
        Submit
      </button>
    </div>
  );
}
