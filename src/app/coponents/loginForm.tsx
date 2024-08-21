import { redirect } from "next/navigation";

export default function LoginForm(props: any) {
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
    console.log(user);
    redirect("/page/home");
  }

  return (
    <form action={Login} method="POST">
      <input name="email" />
      <input name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
