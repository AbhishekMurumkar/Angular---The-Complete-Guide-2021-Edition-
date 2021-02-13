import { Component } from "@angular/core";

@Component({
    selector:'app-success',
    template:`
        <div class='success'>This is success content</div>
    `,
    styles:[
        `
        .success{ background:green}
        `
    ]
})
export class SuccessComponent{}