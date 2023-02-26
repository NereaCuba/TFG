import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeuristicsComponent } from "./heuristics/heuristics.component";

const routes: Routes = [
    {
        path: '',
        component: HeuristicsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class heuristicsRoutingModule {}
