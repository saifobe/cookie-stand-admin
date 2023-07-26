import { useState } from "react";
import CookieStandAdmin from "../components/cookieStandAdmin";
import Login from "../components/login";
import { useAuth } from "@/context/auth";




export default function Home() {
  const {user} = useAuth()
  return (
    <>
      
      
      {user ? <CookieStandAdmin /> : <Login />}
      
      


    </>
  );
}

