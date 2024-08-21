import { token } from "@/app/coponents/loginForm";

export default function Home() {
    // const token = user?.token;
    console.log(typeof token);
  return <h1>{token}</h1>;
}
