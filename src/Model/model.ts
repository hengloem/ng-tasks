import { NgModule } from '@angular/core';
export class model {
    user;
    items;
    
    constructor () {
        this.user = "Heng Loem";
        this.items = []
    }
}

export class TodoItem {
    action;
    done;

    constructor (action, done) {
        this.action = action;
        this.done = done;
    }
}