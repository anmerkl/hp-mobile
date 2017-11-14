import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from './app.component'

const routes: Routes = [
    { path: '', component: AppComponent }
    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    //{ path: "items", component: ItemsComponent },
    //{ path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule { }
