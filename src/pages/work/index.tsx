import { Chip } from "@mui/material";
import { useState } from "react";

import { saveAs } from "file-saver";

import { useRouter } from "next/router";
import {
  ArrowRight,
  Award,
  Book,
  Box,
  Code,
  Codesandbox,
  Compass,
  Cpu,
  DollarSign,
  Download,
  Figma,
  Globe,
  PenTool,
  Play,
  Smartphone,
  Twitch,
  Video,
} from "react-feather";
import { WorkTag } from "../../enums/tag";

export default function Work() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const tagIndex: { [id: number]: WorkTag } = {
    0: WorkTag.Design,
    1: WorkTag.Android,
    2: WorkTag.iOS,
    3: WorkTag.Flutter,
    11: WorkTag.MachineLearning,
    4: WorkTag.Web,
    5: WorkTag.Replits,
    6: WorkTag.Robotics,
    7: WorkTag.Science,
    8: WorkTag.Library,
    12: WorkTag.Startup,
  };
  const work = [
    {
      name: "estimate • the ananta studio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "projects/estimate-theananta.png",
      tags: [WorkTag.Design, WorkTag.Web],
    },
    {
      name: "Reema Holidays",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "projects/reema-holidays.png",
      tags: [WorkTag.Design, WorkTag.Web],
    },
    {
      name: "Bheeshma Naturals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "projects/bheeshma-naturals.png",
      tags: [WorkTag.Design, WorkTag.Flutter],
    },
    {
      name: "CodeFolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "projects/codefolio.png",
      tags: [WorkTag.Design, WorkTag.Flutter],
    },
    {
      name: "Greetify",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Design],
    },
    {
      name: "WWEC 2024: Innovators Den",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "projects/innovators-den.png",
      tags: [WorkTag.Design],
    },
    {
      name: "GDSC GITAM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Design],
    },
    {
      name: "Invite Me",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },
    {
      name: "Monica Goud",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Design],
    },
    {
      name: "Now In Google",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      link: "",
      tags: [WorkTag.Design, WorkTag.Flutter],
    },
    {
      name: "NodeMailer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      link: "",
      tags: [WorkTag.Design, WorkTag.Flutter],
    },
    {
      name: "AutoSmith",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "projects/autosmith.png",
      link: "https://autosmith.theananta.in",
      tags: [WorkTag.Design, WorkTag.Flutter, WorkTag.Web],
    },
    {
      name: "balavemulakonda.dev",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/balavemulakonda.png",
      link: "https://balavemulakonda.dev",
      tags: [WorkTag.Design],
    },
    {
      name: "STEMQuest",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/stemquest.png",
      link: "https://stemquest.theananta.in/stemquest",
      tags: [WorkTag.Startup, WorkTag.Design],
    },
    {
      name: "Spotmies LLP",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/spotmies.png",
      link: "https://spotmies.com",
      tags: [WorkTag.Design, WorkTag.Flutter],
    },
    {
      name: "SSV Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/ssv-classes.png",
      tags: [WorkTag.Design],
    },
    {
      name: "Dhee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "projects/dhee.png",
      tags: [WorkTag.Design],
    },
    {
      name: "cvkmohan.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/cvkmohan.png",
      link: "https://cvkmohan.com",
      tags: [WorkTag.Design],
    },
    {
      name: "Nandikrushi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/nandikrushi.png",
      tags: [WorkTag.Design, WorkTag.Flutter],
    },
    {
      name: "Campus Ride",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "projects/campus-ride.png",
      tags: [WorkTag.Design],
    },
    {
      name: "Breach",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/breach.png",
      tags: [WorkTag.Design],
    },
    {
      name: "VMN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Design],
    },
    {
      name: "Vidyadhara Kaksha",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/vidhyadhara_kaksha.png",
      tags: [WorkTag.Design],
    },
    {
      name: "Vishrambh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/vishrambh.png",
      tags: [WorkTag.Design],
    },
    {
      name: "Gurujada",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "projects/gurujada.png",
      tags: [WorkTag.Design],
    },
    {
      name: "Tech Schemax",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/tech-schemax.png",
      tags: [WorkTag.Design],
    },
    {
      name: "Nandan Yoga Center",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/nandan-fitness-center.png",
      tags: [WorkTag.Design],
    },
    {
      name: "International Women's Day 2023: Vizag",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Design],
    },
    {
      name: "Booktique",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "projects/booktique.png",
      tags: [WorkTag.Design],
    },
    {
      name: "Dr. Aarogya's Health Record",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/aarogya-health-record.png",
      tags: [WorkTag.Design, WorkTag.Android],
    },
    {
      name: "Pixagram",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Design],
    },
    {
      name: "Study Masters",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Design],
    },
    {
      name: "Progression",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/projects/progression.png",
      tags: [WorkTag.Design, WorkTag.iOS],
    },
    {
      name: "Asquare Gokarting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/e0054c167045523.Y3JvcCw3OTksNjI1LDI1Nyww.png",

      tags: [WorkTag.Design, WorkTag.Flutter],
    },
    {
      name: "EcoFun",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android, WorkTag.iOS],
    },
    {
      name: "Aham Svastha",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "BeCoronaReady",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android, WorkTag.iOS],
    },
    {
      name: "Jetsurvey",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },

    {
      name: "Jetchat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "Jetnews",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "WhatsApp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "Yojana",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "Portfolio-o-Matic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "WiggleSlider",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "Activity Recognition Transition",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "Space Travel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "LeoMath",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "Vedic Ganith",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Android],
    },
    {
      name: "CodeUrHealth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.iOS],
    },
    {
      name: "CheMystery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.iOS],
    },
    {
      name: "WTM Vizag: IWD'23",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Greetify",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "G-Samay",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Scanify",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "PokeDex",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Weather App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Dash's Playgrounds",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "video_player",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Instagram",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "DevFest 2022: Vizag",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "StockZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Themeify",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "NewsBizKoot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Certificate Generator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Landmarks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "TransactionTime",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "NotifyMe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Course-o-Pedia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "PartnerDetails",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Order Trackr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },

    {
      name: "ServiceReview",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "The Sorting Hat Ceremony",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "Ducks in a Row",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },

    {
      name: "Thathaya's Birthday Bash",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "FlutteResume",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },

    {
      name: "PortFlutterIO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },

    {
      name: "SpellRight",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },

    {
      name: "Spotmies Partner App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
    {
      name: "manasmalla.dev",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },
    {
      name: "GDSC GITAM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },
    {
      name: "STEMQuest: Survey",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },
    {
      name: "Blogs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },
    {
      name: "codelabs.dev",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },
    {
      name: "IWD Vizag",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },
    {
      name: "Explore California",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },
    {
      name: "IndieSkullSyndicate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },

    {
      name: "Calculator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },

    {
      name: "Notes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Web],
    },
    {
      name: "Namasthe Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Replits],
    },
    {
      name: "Namasthe Lokam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Replits],
    },
    {
      name: "Hello Replit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Replits],
    },
    {
      name: "EcoOreoBot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Robotics],
    },
    {
      name: "EcoWorld",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Science],
    },
    {
      name: "Svasth360",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Science],
    },
    {
      name: "Quantum Walk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Science],
    },
    {
      name: "Neardrop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Nearby_CHROME_PIXEL-02.max-1000x1000.png",
      tags: [WorkTag.Library],
    },
    {
      name: "Cancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.MachineLearning],
    },
    {
      name: "Boom Boom Talk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      tags: [WorkTag.Flutter],
    },
  ];
  const gallery = [
    {
      name: "Holi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/holi.jpg",
      subtitle: "March 29, 2021",
    },
    {
      name: "Raksha Bandhan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/rakshabandhan.jpg",
      subtitle: "August 23, 2021",
    },
    {
      name: "DevFest India 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/devfest2021.jpg",
      subtitle: "August 23, 2021",
    },
    {
      name: "Siddhart's Birthday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/siddhu-bday.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Do you know about Navrathri?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/navrathri-know.jpg",
      subtitle: "August 23, 2021",
    },
    {
      name: "Pooja Akka's Birthday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/pooja-bday.jpg",
      subtitle: "August 23, 2021",
    },
    {
      name: "Halloween",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/halloween.jpg",
      subtitle: "August 23, 2021",
    },
    {
      name: "I'm Vaccinated. Are you?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/covid-vaccinated.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "#ProgressNotPerfection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/iwd22.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Webinar Fatigue",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/iwd22-fatigue.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Switch to the all new learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/iwd22-learning.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Meet & Network",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/iwd22-meet.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Leveraging communities for career growth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/iwd22-usha.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Web Application Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/iwd22-cvk-web.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Practical GIT Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/iwd22-cvk-git.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Training an ML model using Flutter",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/iwd22-bala-harish.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "#AllTheBest",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/all-the-best.jpg",
      subtitle: "August 23, 2021",
    },
    {
      name: "#TheBuildathon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/buildathon.jpg",
      subtitle: "August 23, 2021",
    },
    {
      name: "#ConcART",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/concart.jpg",
      subtitle: "August 23, 2021",
    },
    {
      name: "#TheBuildathon - Hackathon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/hackathon-buildathon.jpg",
      subtitle: "August 23, 2021",
    },
    {
      name: "#BuddhamSharanamGachami",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "#WelcomeBack Chellama",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Meenakshi's Birthday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Guruvarya's Birthday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Varshini's Birthday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Tejash's Birthday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Seshu's Birthday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Manasa's Birthday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Suraj's Birthday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Day 1: ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Siddharth: in the Multiverse of Love",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Krishnastami",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Ganesh Chaturthi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Maha Shivrathri",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Svasth360",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Instanalytics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Quantum Walk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Android 12",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/concart.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Friendship Day 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Naraka Chaturdasi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Teacher's Day 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/biology-td.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Nidhi's Birthday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "Android Study Jams are here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/asj-programme.jpg",
      subtitle: "August 23, 2021",
    },
    {
      name: "Independence Day",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 15, 2022",
    },
    {
      name: "Holi '23",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "",
      subtitle: "August 23, 2021",
    },
    {
      name: "RadhaKrishn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/radhakrishn.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Ugadhi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/ugadi.png",
      subtitle: "August 23, 2021",
    },
    {
      name: "Diwali Dhamaka",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "/doodles/diwali-dhamaka.png",
      subtitle: "August 23, 2021",
    },
  ];

  const videos = [
    {
      name: "Svasth360",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://i.ytimg.com/vi/-F7gbZd0o1c/maxresdefault.jpg",
      subtitle: "Blue Ocean Competition",
      link: "https://www.youtube.com/watch?v=-F7gbZd0o1c",
    },
    {
      name: "Quantum Walk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://i.ytimg.com/vi/TkTXT90kd24/maxresdefault.jpg",
      subtitle: "Breakthrough Junior Challenge",
      link: "https://www.youtube.com/watch?v=TkTXT90kd24",
    },
    {
      name: "EcoFun",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://i.ytimg.com/vi/6MIrkKRoIug/maxresdefault.jpg",
      subtitle: "Breakthrough Junior Challenge",
      link: "https://www.youtube.com/watch?v=6MIrkKRoIug",
    },
    {
      name: "Shree Hari Strotram",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://i.ytimg.com/vi/VaB5avNpvRc/maxresdefault.jpg",
      subtitle: "",
      link: "https://www.youtube.com/watch?v=VaB5avNpvRc",
    },
    {
      name: "Happy Birthday Thathaya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://i.ytimg.com/vi/OjDtBp6HQ64/hqdefault.jpg",
      subtitle: "",
      link: "https://www.youtube.com/watch?v=OjDtBp6HQ64",
    },
    {
      name: "Ek Chidiya Anek Chidiya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://i.ytimg.com/vi/4NFDWMj2gKs/maxresdefault.jpg",
      subtitle: "",
      link: "https://www.youtube.com/watch?v=4NFDWMj2gKs",
    },
    {
      name: "Be Corona Ready",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://img.youtube.com/vi/zchNwWYGSsE/hqdefault.jpg",
      subtitle: "",
      link: "https://www.youtube.com/watch?v=zchNwWYGSsE",
    },
    {
      name: "STEMQuest",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://img.youtube.com/vi/ofWzOIOpYVQ/hqdefault.jpg",
      subtitle: "Discover | Learn | Create",
      link: "https://www.youtube.com/watch?v=ofWzOIOpYVQ",
    },
    {
      name: "Lead Pitch '23",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://img.youtube.com/vi/nMrnC_3t9vE/hqdefault.jpg",
      subtitle: "Google Developer Student Clubs",
      link: "https://www.youtube.com/watch?v=nMrnC_3t9vE",
    },
    {
      name: "Channel Intro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://img.youtube.com/vi/uo4MQTN7n9M/hqdefault.jpg",
      subtitle: "Talent Safari",
      link: "https://www.youtube.com/watch?v=uo4MQTN7n9M",
    },
    {
      name: "Channel Teaser",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://img.youtube.com/vi/jR7JeBlezDk/hqdefault.jpg",
      subtitle: "Tech Safari",
      link: "https://www.youtube.com/watch?v=jR7JeBlezDk",
    },
    {
      name: "Channel Trailer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://img.youtube.com/vi/W5hlx_O1H4Y/hqdefault.jpg",
      subtitle: "Learn With Super Oreo",
      link: "https://www.youtube.com/watch?v=W5hlx_O1H4Y",
    },
    {
      name: "Happy Birthday Lakshit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://img.youtube.com/vi/sgEjSFD7SeI/hqdefault.jpg",
      subtitle: "",
      link: "https://www.youtube.com/watch?v=sgEjSFD7SeI",
    },
    {
      name: "Happy Birthday Daddy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://img.youtube.com/vi/y0zsphhHjkQ/hqdefault.jpg",
      subtitle: "",
      link: "https://www.youtube.com/watch?v=y0zsphhHjkQ",
    },
    {
      name: "EcoCity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio ut turpis vulputate molestie vitae at sapien. Vivamus.",
      image: "https://i.ytimg.com/vi/Vh_PQCLPX_c/maxresdefault.jpg",
      subtitle: "ICSMF 2021",
      link: "https://www.youtube.com/watch?v=Vh_PQCLPX_c",
    },
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
          label="Machine Learning"
          variant={index == 11 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(11);
          }}
          icon={index == 11 ? <Book className="p-1" /> : <div />}
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
        <Chip
          label="Doodles"
          variant={index == 9 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(9);
          }}
          icon={index == 9 ? <PenTool className="p-1" /> : <div />}
        />
        <Chip
          label="Animations & VFX"
          variant={index == 10 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(10);
          }}
          icon={index == 10 ? <Video className="p-1" /> : <div />}
        />
        <Chip
          label="Startup"
          variant={index == 12 ? "filled" : "outlined"}
          onClick={() => {
            setIndex(12);
          }}
          icon={index == 12 ? <DollarSign className="p-1" /> : <div />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 py-8">
        {index < 9 || index >= 11
          ? work
              .filter((e) => e.tags.includes(tagIndex[index]))
              .map((value) => {
                return (
                  <div key={value.name}>
                    <div className="w-full lg:w-96 h-64 lg:h-80 bg-blue-50 dark:bg-slate-900 rounded-md">
                      {value.image != "" ? (
                        <img
                          alt="Work In Progress"
                          src={value.image}
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <div className="justify-center flex items-center h-full">
                          Work in Progress
                        </div>
                      )}
                    </div>
                    <div className="my-6">
                      <h4 className="text-2xl font-semibold">{value.name}</h4>
                    </div>
                    <p className="opacity-60 lg:w-96">{value.description}</p>
                    <button
                      onClick={() => {
                        //   router.push("/work");
                      }}
                      className="py-4 font-light rounded-full text-blue-500 dark:text-blue-400"
                    >
                      {/* <Compass className="inline-flex w-4 h-4 mr-4" /> */}
                      <a href={value.link} className="font-normal inline-flex">
                        Explore
                      </a>
                      <ArrowRight className="inline-flex w-4 h-4 ml-4" />
                    </button>
                  </div>
                );
              })
          : (index == 9 ? gallery : videos).map((value, valueIndex) => {
              return (
                <div key={value.name}>
                  <div
                    className={`w-full lg:w-96 ${
                      index == 9 ? "aspect-square" : "aspect-video"
                    } bg-blue-50 dark:bg-slate-900 rounded-md`}
                  >
                    {value.image != "" && (
                      <img
                        src={value.image}
                        className={`w-full h-full object-cover ${
                          index == 9 ? "object-top" : "object-center"
                        } rounded-md`}
                      />
                    )}
                    {value.image == "" && (
                      <img
                        src={"projects/manas.png"}
                        alt="Work In Progress"
                        className={`w-full h-full object-cover ${
                          index == 9 ? "object-top" : "object-center"
                        } rounded-md`}
                      />
                    )}
                  </div>
                  <div className="my-6">
                    <h4 className="text-2xl font-semibold">{value.name}</h4>
                    <h5 className="text-lg opacity-50 text-blue-400 font-semibold">
                      {value.subtitle}
                    </h5>
                  </div>
                  <p className="opacity-60 lg:w-96">{value.description}</p>
                  <button
                    onClick={() => {
                      if (index == 10 && videos[valueIndex].link != "") {
                        router.push(videos[valueIndex].link);
                      } else if (index == 9 && value.image != "") {
                        saveAs(
                          value.image,
                          value.image.split("/").reverse()[0]
                        );
                      }
                      //   router.push("/work");
                    }}
                    className="py-4 font-light rounded-full text-blue-500 dark:text-blue-400"
                  >
                    {/* <Compass className="inline-flex w-4 h-4 mr-4" /> */}
                    <span className="font-normal inline-flex">
                      {index == 9 ? "Download" : "Watch Now"}
                    </span>
                    {index == 9 ? (
                      <Download className="inline-flex w-4 h-4 ml-4" />
                    ) : (
                      <Play className="inline-flex w-4 h-4 ml-4" />
                    )}
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
}
