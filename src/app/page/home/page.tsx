import { token } from "@/app/coponents/loginForm";
import { redirect } from "next/navigation";

export default function Home() {
  if (token === null) {
    redirect("/");
  }
  // const token = user?.token;
  console.log(typeof token);
  return <h1>{token}</h1>;
}
