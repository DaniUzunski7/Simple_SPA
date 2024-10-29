import { login } from "../data/userService.js";
import { renderer, html } from "../lib.js";
import { createSubmitHandler, upadateNav } from "../util.js";
import { page } from "../lib.js";

const temp = (handler) => html`
    <!-- Login Page (Only for Guest users) -->
<section id="login">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Login</h2>
      <form @submit=${handler} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`

export function showLoginView(){
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef){
    if (!data.email || !data.password){
        return alert("All fields are required!")
    }

    await login(data.email, data.password);
    upadateNav()
    page.redirect("")
}