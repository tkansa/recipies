import { Hits } from "./recipeModel";

export let favorites: Hits[] = [];

export function addFavorite(recipe: Hits){
    favorites.push(recipe);
    console.log(recipe)
}