import Navbar from "../components/navbar/index"
import Head from "next/head"
export default function Home() {
  return <>
      <Head>
            <title>My Components</title>
      </Head>
      <Navbar items={["Home","About Us","Aim","Contact Us"]}/>
  </>
}
