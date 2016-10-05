import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = "dheerajkhokhar";
    private client_id = "90b898bc04721d69993e";
    private client_secret = "9469088b5f656f7fc8bab7c52966841d4812b381";
    constructor(private _http:Http){
        console.log("Github Servicce Init....");
    }
    getUser(){
       return this._http.get('https://api.github.com/users/'+this.username)
        .map(res =>res.json())
    }
    getRepos(){
       return this._http.get('https://api.github.com/users/'+this.username+'/repos')
        .map(res =>res.json())
    }

    updateUsername(username:string){
        this.username = username;

    }
}