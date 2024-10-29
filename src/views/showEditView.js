import { dataService } from "../data/dataService.js";
import { renderer, html, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const temp = (handler, hero) => html`
     <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Edit Character</h2>
      <form @submit=${handler}class="edit-form">
        <input
        .value=${hero.category}
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
      />
      <input
        .value=${hero.image}
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
      .value=${hero.description}
      id="description"
      name="description"
      placeholder="Description"
      rows="2"
      cols="10"
    ></textarea>
    <textarea
    .value=${hero.moreInfo}
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="2"
      cols="10"
    ></textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`

export async function showEditView(ctx){
    const id = ctx.params.id;
    const hero = await dataService.characterDetails(id);
    let {category, 'image-url': image, description, 'additional-info': moreInfo} = hero;

    let heroData = {category, image, description, moreInfo};

    renderer(temp(createSubmitHandler(onSubmit), heroData));

    async function onSubmit(data){
        debugger
        let {category, 'image-url': image, description, 'additional-info': moreInfo} = data;
    
        if (!category || !image || !description || !moreInfo){
            return alert("All field are required!")
        }
    
        await dataService.editCharacter(id, data)
        page.redirect(`/details/${id}`)
    }
}

