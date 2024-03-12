import Image from "next/image";
import MainPage from "./components/home/page";
import Transition from "./components/transtionEffect/Transition";

export default function Home() {
  return (
  <>
  <MainPage />
  <Transition />
  </>
  );
}
