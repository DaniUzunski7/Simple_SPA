import { dataService } from "../data/dataService.js";
import { renderer, html, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const temp = (handler) => html`
    <section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Add Character</h2>
      <form @submit=${handler} class="create-form">
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Character Type"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      ></textarea>
        <button type="submit">Add Character</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`

export function showCreateView(){
    renderer(temp(createSubmitHandler(onSubmit)))
}

async function onSubmit(data) {
    let {category, 'image-url': image, description, 'additional-info': moreInfo} = data;

    if (!category || !image || !description || !moreInfo){
        return alert("All fields are required!")
    }

    await dataService.addCharacter(data);
    page.redirect("/dashboard");
}