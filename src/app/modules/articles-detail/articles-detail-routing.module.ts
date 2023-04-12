import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticlesDetailComponent } from "./articles-detail/articles-detail.component";

const routes: Routes = [
    {
        path: '',
        component: ArticlesDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class articlesDetailRoutingModule {}
