import Image from "next/image";
import { Inter } from "next/font/google";
import Mechines from "@/components/landing-page/Mechines";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Mechines />
    </>
  );
}
