import {Injectable} from '@angular/core';

export class AppService {
    constructor(){

    }

    getName()  : Promise<string> {
        return Promise.resolve("From Service: Tibi");
    }
}