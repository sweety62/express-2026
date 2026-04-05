 export default function login(){
  return `<form action="/submit" method="post">

    <input  type = "text" placeholder = "enter name" />
    <br/>
    <br/>
    <input  type = "password" placeholder = "enter password" />
    <br/>
    <br/>
    <button>login</button>
    <a href = "/login">Go to Login</a>
    </form>`;
}