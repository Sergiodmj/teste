import { token } from "@/app/coponents/loginForm";
import { redirect } from "next/navigation";

export default async function Home() {

  if (token == null) {
    redirect("/");
  }  
  console.log(token);
  return (
    <>
      <h1>Home</h1>
      <h1>{token}</h1>
    </>
  );
}
