/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { userName } from "@/app/coponents/loginForm";

export default function cadastro() {
  console.log(userName);
  return (
    <>
      Tela Cadastro
      <h1>{userName}</h1>
    </>
  );
}
