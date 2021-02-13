import { Component } from "@angular/core";

@Component({
    selector:'app-warn',
    template:`
        <div class='warn'>This is warn content</div>
    `,
    styles:[
        `
        .warn{ background:red}
        `
    ]
})
export class WarnComponent{}