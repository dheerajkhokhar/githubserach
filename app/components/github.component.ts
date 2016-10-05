import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/debounceTime';

@Component({
    moduleId:module.id,
    selector: 'github',
    templateUrl:'github.component.html',
    providers:[GithubService]
})
export class GithubComponent { 
    user : any;
    repos:any;
    username:string;
    constructor(private _githubService:GithubService){
        console.log('GitHub Component Init...');     
    }
    search(){
        console.log(this.username);
        this._githubService.updateUsername(this.username);
    
        this._githubService.getUser().subscribe(user=>{
            //console.log(user);
            this.user = user;
        })

        this._githubService.getRepos().subscribe(repos=>{
            //console.log(user);
            this.repos = repos;
        })
    }
}
