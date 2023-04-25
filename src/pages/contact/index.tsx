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
    <div className="mx-8 lg:mx-96 flex flex-col items-center">
      <div className="mx-auto w-20 aspect-square rounded-full bg-[#005AC1] dark:bg-[#D2E3FC] bg-opacity-10 dark:bg-opacity-10 mb-12">
        <img src="/wink-memoji.png" className="p-2" />
      </div>
      <h1 className="text-4xl lg:text-5xl text-center">
        <span className="underline leading-[1.3em] decoration-[#FBBC04]/20 dark:decoration-[#FBBC04]/40">
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
          className="w-full"
        />
        <div className="h-4" />
        <TextField
          id="standard-basic"
          label="Your email"
          variant="standard"
          className="w-full"
        />
        <div className="h-4" />
        <TextField
          id="standard-basic"
          label="Tell me about your project"
          variant="standard"
          className="w-full"
        />
      </ThemeProvider>
      <button
        onClick={() => {}}
        className="bg-black dark:bg-white text-white dark:text-black px-12 py-3 rounded-full uppercase my-12"
      >
        Submit
      </button>
    </div>
  );
}
