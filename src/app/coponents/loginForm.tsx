import { redirect } from "next/navigation";

export let status = null
export let token = null
export let userId = null
export let userName = null
export let userEmail = null

async function Login(form: FormData) {
  "use server";
  const credenciais = Object.fromEntries(form);
  //   console.log(credenciais)
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
  status = user.status
  token = user.token
  userId = user.user.id
  userName = user.user.name;
  userEmail = user.user.email;
  // console.log(user)
  redirect("/page/home");
}

// console.log(user)

export default function LoginForm() {
  return (
    <form action={Login} method="POST">
      <input name="email" />
      <input name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
