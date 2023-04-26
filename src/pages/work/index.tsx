import { Chip } from "@mui/material";
import { useState } from "react";
import {
  ArrowRight,
  Code,
  Codesandbox,
  Compass,
  Figma,
  Globe,
  Smartphone,
} from "react-feather";

export default function Work() {
  const [index, setIndex] = useState(0);
  const work = [
    [
      {
        name: "balavemulakonda.dev",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Spotmies LLP",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "SSV Classes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "cvkmohan.com",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Nandikrushi",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Campus Ride",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "VMN",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Vidyadhara Kaksha",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Vishrambh",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Gurujada",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Tech Schemax",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Nandan Yoga Center",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "International Women's Day 2023: Vizag",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Booktique",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Dr. Aarogya's Health Record",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Progression",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Asquare Gokarting",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "AutoSmith",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
    ],
    [
      {
        name: "EcoFun",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Aham Svastha",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "BeCoronaReady",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Dr. Aarogya's Health Record",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
    ],
    [
      {
        name: "BeCoronaReady",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "CodeUrHealth",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "CheMystery",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "EcoFun",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Progression",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
    ],
    [
      {
        name: "WTM Vizag: IWD'23",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "ASquare Gokarting",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Nandikrushi",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
    ],
    [
      {
        name: "manasmalla.dev",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "IWD Vizag",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
    ],
  ];
  return (
    <div className="my-24 mx-8 lg:mx-24">
      <h2 className="text-4xl">
        Explore my{" "}
        <span className="underline decoration-blue-200 decoration-2 underline-offset-[12px]">
          portfolio
        </span>
      </h2>
      <div className="my-8 gap-4 grid grid-cols-3 lg:flex">
        <Chip
          label="Design"
          variant={index == 0 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(0);
          }}
          icon={index == 0 ? <Figma className="p-1" /> : <div />}
        />
        <Chip
          label="Android"
          variant={index == 1 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(1);
          }}
          icon={index == 1 ? <Smartphone className="p-1" /> : <div />}
        />
        <Chip
          label="iOS"
          variant={index == 2 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(2);
          }}
          icon={index == 2 ? <Code className="p-1" /> : <div />}
        />
        <Chip
          label="Flutter"
          variant={index == 3 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(3);
          }}
          icon={index == 3 ? <Codesandbox className="p-1" /> : <div />}
        />
        <Chip
          label="Web"
          variant={index == 4 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(4);
          }}
          icon={index == 4 ? <Globe className="p-1" /> : <div />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 py-8">
        {work[index].map((value) => {
          return (
            <div key={value.name}>
              <div className="w-full lg:w-96 h-64 lg:h-80 bg-blue-50 dark:bg-slate-900 rounded-md"></div>
              <h4 className="text-2xl my-6 font-semibold">{value.name}</h4>
              <p className="opacity-60 lg:w-96">{value.description}</p>
              <button
                onClick={() => {
                  //   router.push("/work");
                }}
                className="py-4 font-light rounded-full"
              >
                {/* <Compass className="inline-flex w-4 h-4 mr-4" /> */}
                <span className="font-normal inline-flex">Explore</span>
                <ArrowRight className="inline-flex w-4 h-4 ml-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
