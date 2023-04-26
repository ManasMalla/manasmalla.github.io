import { Chip } from "@mui/material";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Box,
  Code,
  Codesandbox,
  Compass,
  Cpu,
  Figma,
  Globe,
  Smartphone,
  Twitch,
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
      {
        name: "Jetsurvey",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },

      {
        name: "Jetchat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },

      {
        name: "WhatsApp",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Yojana",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Portfolio-o-Matic",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "WiggleSlider",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Activity Recognition Transition",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Space Travel",
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
      {
        name: "Dash's Playgrounds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "video_player",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Instagram",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "DevFest 2022: Vizag",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "StockZ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Themeify",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "NewsBizKoot",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Certificate Generator",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Landmarks",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "TransactionTime",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "NotifyMe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Course-o-Pedia",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "ParnerDetails",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Order Trackr",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },

      {
        name: "ServiceReview",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "The Sorting Hat Ceremony",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Ducks in a Row",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },

      {
        name: "Thathaya's Birthday Bash",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "FlutteResume",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },

      {
        name: "PortFlutterIO",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },

      {
        name: "SpellRight",
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
      {
        name: "Explore California",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
    ],
    [
      {
        name: "Namasthe Python",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Namasthe Lokam",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Hello Replit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
    ],
    [
      {
        name: "EcoOreoBot",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
    ],
    [
      {
        name: "EcoWorld",
        subtitle: "A solution to the pollution",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Svasth360",
        subtitle: "A 360° health care solution",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
      {
        name: "Quantum Walk",
        subtitle: "Breakthrough at achieving efficiency",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
        color: "",
      },
    ],
    [
      {
        name: "Neardrop",
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
        <Chip
          label="Replits"
          variant={index == 5 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(5);
          }}
          icon={index == 5 ? <Codesandbox className="p-1" /> : <div />}
        />
        <Chip
          label="Robotics"
          variant={index == 6 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(6);
          }}
          icon={index == 6 ? <Cpu className="p-1" /> : <div />}
        />
        <Chip
          label="Science"
          variant={index == 7 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(7);
          }}
          icon={index == 7 ? <Award className="p-1" /> : <div />}
        />
        <Chip
          label="Libraries"
          variant={index == 8 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(8);
          }}
          icon={index == 8 ? <Box className="p-1" /> : <div />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 py-8">
        {work[index].map((value) => {
          return (
            <div key={value.name}>
              <div className="w-full lg:w-96 h-64 lg:h-80 bg-blue-50 dark:bg-slate-900 rounded-md"></div>
              <div className="my-6">
                <h4 className="text-2xl font-semibold">{value.name}</h4>
                <h5 className="opacity-40 text-blue-500">{value.subtitle}</h5>
              </div>
              <p className="opacity-60 lg:w-96">{value.description}</p>
              <button
                onClick={() => {
                  //   router.push("/work");
                }}
                className="py-4 font-light rounded-full text-blue-500 dark:text-blue-400"
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
