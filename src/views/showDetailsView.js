import { dataService } from "../data/dataService.js";
import { renderer, html, page } from "../lib.js";
import { getUserData, hasOwner } from "../util.js";

const temp = (hero, ownerId, isLogged, onDelete, hasLiked) => html`
    <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${hero.imageUrl} alt="example1" />
      <div>
      <p id="details-category">${hero.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${hero.description}</p>
             <p id ="more-info">${hero.moreInfo}</p>
        </div>
      </div>
        <h3>Is This Useful:<span id="likes">0</span></h3>
    ${isLogged ? html `
    <div id="action-buttons">
        ${ownerId ? html`
            <a href="/edit/${hero._id}" id="edit-btn">Edit</a>
            <a href="#" @click=${onDelete} id="delete-btn">Delete</a>
        ` : null}
      
        ${hasLiked ? null :  html`<a href="javascript:void(0)" id="like-btn">Like</a>`}
        ` : ''}
        </div>
    </div>
  </div>
</section>
`

export async function showDetailsView(ctx){
    const id = ctx.params.id;
   
    let isLiked = "";

    renderer(temp(hero, isOwner, isLogged, onDelete, isLiked))
    
    async function onDelete(){
        if (!isOwner){
            return
        }

        const id = ctx.params.id;
        const confirmRes = confirm("Delete character?");
        
        if (!confirmRes){
            return
        }
        
        await dataService.deleteCharacter(id);
        page.redirect("/dashboard")
    }
}

