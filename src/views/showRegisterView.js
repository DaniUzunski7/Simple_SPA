import { register } from "../data/userService.js";
import { renderer, html, page } from "../lib.js";
import { createSubmitHandler, upadateNav } from "../util.js";

const temp = (handler) => html`
    <section id="register">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Register</h2>
            <form @submit=${handler} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`

export async function showRegisterView(){
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef){
    let {email, password, 're-password': rePass} = data;
    if (!email || !password || !rePass){
        return alert("All fields are required!")
    }
    
    if (password != rePass){
        return alert("Password and re-pass should be the same!")
    }

    await register(email, password);
    upadateNav()
    page.redirect("/");
}