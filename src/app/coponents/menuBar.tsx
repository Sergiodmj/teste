import Link from "next/link";
import LogoutButton from "./logoutButton";

export default function MenuBar() {
  return (
    <>
      <Link href={"/"}>
        <button>Login</button>
      </Link>
      <Link href={"/page/home"}>
        <button>Home</button>
      </Link>
      <Link href={"/page/cadastro"}>
        <button>Cadastro</button>
      </Link>
      <LogoutButton />
    </>
  );
}