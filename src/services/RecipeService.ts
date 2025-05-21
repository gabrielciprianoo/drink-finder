import axios from "axios";
import { parse } from "valibot";
import { CategoriesAPISchema } from "../schemas";

export async function getCategories()  {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const { data }  =  await axios(url);
    const response = parse(CategoriesAPISchema, data );

    if(response){
        return response;
    }
    
}