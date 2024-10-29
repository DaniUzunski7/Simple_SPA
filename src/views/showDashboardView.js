import { dataService } from "../data/dataService.js";
import { renderer, html } from "../lib.js";

const temp = (heroes) => html`
    <h2>Characters</h2>
    <section id="characters">
        ${heroes.map(hero => heroTemp(hero))}
    </section>
    ${heroes.length === 0 ? html `<h2 class="nothing">No added Heroes yet</h2>` : ""}
`
const heroTemp = (hero) => html`
    <div class="character">
     <img src="${hero.imageUrl}" alt="example2" />
     <div class="hero-info">
       <h3 class="category">${hero.category}</h3>
       <p class="description">${hero.description}</p>
       <a class="details-btn" href="/details/${hero._id}">More Info</a>
     </div>
`

export async function showDashboardView(){
    const heroes = await dataService.getAllCharacters();

    renderer(temp(heroes))
}