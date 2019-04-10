import { Component} from '@angular/core';
import { DataStorageService } from '../shared/data-service.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    constructor(private authService:AuthService, private dataStorageServ: DataStorageService){}
    onSaveData(){
        this.dataStorageServ.storeRecipes();

    }

    onFetchData(){
        this.dataStorageServ.getRecipes();
    }

    onLogOut(){
        this.authService.logOut();
    }
}