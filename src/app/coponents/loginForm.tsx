'use client'
import { redirect } from "next/navigation";

export let status: any;
export let token: any;
export let userId: any;
export let userName: any;
export let userEmail: any;

export function Sair() {
  status = null
  token = null
  userId = null
  userName = null
  userEmail = null;
  // console.log(status, token, userId, userName, userEmail)
}

async function Login(form: FormData) {
  const credenciais = Object.fromEntries(form);
  const response = await fetch("https://la.sitesdahora.com.br/api/login", {
    method: "POST",
    body: JSON.stringify({
      email: credenciais.email,
      password: credenciais.password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.status !== 200) return null;

  const user = await response.json();
  status = user.status;
  token = user.token;
  userId = user.user.id;
  userName = user.user.name;
  userEmail = user.user.email;
  // console.log(user)
  // console.log(status, token, userId, userName, userEmail);

  redirect("/page/home");
}


export default function LoginForm() {
  return (
    <form action={Login} method="POST">
      <input name="email" />
      <input name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
