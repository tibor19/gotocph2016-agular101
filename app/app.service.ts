import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AppService {
    constructor(private _http: Http){

    }

    getName()  : Promise<string> {
        return this._http
            .get('data.json')
            .toPromise()
            .then(r => r.json());
    }
}