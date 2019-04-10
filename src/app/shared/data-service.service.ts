import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';

import {Http,Response} from '@angular/http';

import { Recipe } from '../recipes/recipe.model';
import { from} from 'rxjs';
import {map} from 'rxjs/operators'
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{

    constructor(private authService:AuthService, private http:Http, private recipeService:RecipeService){  }

    storeRecipes(){
        const token =this.authService.getToken()

       return  this.http.put('https://ng-recipe-book-7c1bb.firebaseio.com/recipes.json?auth='+ token,this.recipeService.getRecipes());
    }

    getRecipes(){
        
        const token =this.authService.getToken()
         this.http.get('https://ng-recipe-book-7c1bb.firebaseio.com/recipes.json?auth=' +token)
         .pipe(map((response:Response)=>{
             const recipes = response.json();
             for(let recipe of recipes){
                 if(!recipe['ingredients']){
                     recipe['ingredients']=[]
                 }
             }
             return recipes

         })).
         subscribe(
        (recipes:Recipe[])=>{
                this.recipeService.setRecipes(recipes);

            }
        );
    }
}