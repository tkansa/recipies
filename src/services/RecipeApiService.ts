import axios from "axios";
import { Hits } from "../models/recipeModel";


const apiId = process.env.REACT_APP_RECIPE_API_ID;
const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

export function fetchRecipe():Promise<Hits[]> {

    return axios.get("https://api.edamam.com/api/recipes/v2",{
        params:{
            type: "public",
            q: "main+course",
            app_id: "c0ad6829",
            app_key: "979b34af2f0ee5f39a5acb13dcc0e019"
        }
    })
    .then(res=>res.data.hits)
}

export function searchRecipe(query:string):Promise<Hits[]>{
    return axios.get("https://api.edamam.com/api/recipes/v2",{
        params:{
            type: "public",
            q: query,
            app_id: "c0ad6829",
            app_key: "979b34af2f0ee5f39a5acb13dcc0e019"
        }
    })
    .then(res=>res.data.hits);
}   