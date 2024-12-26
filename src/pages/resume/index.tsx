import MultiResumeTileCard from "@/components/MultiResumeTileCard";
import ResumeComponent from "@/components/resume";
import ResumeTileCard from "@/components/resume_card";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "react-feather";

export default function Resume() {
  return (
    <div className="m-6 md:mx-20 md:my-12">
      <ResumeComponent />
    </div>
  );
}
