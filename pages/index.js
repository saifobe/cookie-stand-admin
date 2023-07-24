import { useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";



export default function Home() {
  const [formData, setFormData] = useState([])
  function submitHandler(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    const entry = {
      location: data.get('location'),
      min: data.get('min'),
      max: data.get('max'),
      avg: data.get('avg'),
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    };
    setFormData([...formData, entry]);
  }
    
  return (
    <>
       <Head>
        <title>Cookie Stand</title>
        <meta />
      </Head>
        

      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <Main submitHandler={submitHandler} formData={formData}/>
        <Footer formData={formData}/>

      </div>


    </>
  );
}






Home