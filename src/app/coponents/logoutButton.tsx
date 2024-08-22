"use client";
import { token, Sair } from "./loginForm";

export default function LogoutButton() {

    async function Logout() {
      console.log(token)
    const response = await fetch("https://la.sitesdahora.com.br/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
      const res = await response.json();
      console.log(res)
      Sair()
      }
    
    //   function Logout() {
    //     fetch(url, options)
    //       .then((resp) => resp.json())
    //       .then((data) => {
    //         console.log(data);
    //         // signOut();
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }

  return <button onClick={Logout}>Logout</button>;
}
