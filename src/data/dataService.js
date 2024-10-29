import { api } from "./api.js"

const endPoints = {
    allCharacters: "/data/characters?sortBy=_createdOn%20desc",
    addCharacter: "/data/characters",
    details: "/data/characters/",
    edit: "/data/characters/",
    delete: "/data/characters/",
    like: "/data/useful",
    // getLikes: `/data/useful?where=characterId%3D%22${charId}%22&distinct=_ownerId&count`
}

async function getAllCharacters(){
    return await api.get(endPoints.allCharacters);
}

async function addCharacter(data){
    return await api.post(endPoints.addCharacter, data);
}

async function characterDetails(id){
    return await api.get(endPoints.details + `${id}`);
}

async function editCharacter(id, data) {
    return await api.put(endPoints.edit + `${id}`, data);
}

async function deleteCharacter(id) {
    return await api.del(endPoints.delete + `${id}`);
}

export const dataService = {
    getAllCharacters,
    addCharacter,
    characterDetails,
    editCharacter,
    deleteCharacter
}