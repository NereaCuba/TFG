import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailHeuristicsComponent } from "./heuristic-detail/heuristic-detail.component";

const routes: Routes = [
    {
        path: '',
        component: DetailHeuristicsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class heuristicsDetailRoutingModule {}
