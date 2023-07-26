import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FlexExampleComponent } from './components/flex-example/flex-example.component';
import { GridExampleComponent } from './components/grid-example/grid-example.component';
import { CatsBreedOverviewComponent } from './components/cats-breed-overview/cats-breed-overview.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CatBreedDetailsComponent } from './components/cats-breed-overview/cat-breed-details/cat-breed-details.component';

export enum ApplicationRoutesParts {
  FLEX_EXAMPLE = 'flex-example',
  GRID_EXAMPLE = 'grid-example',
  CAT_BREEDS = 'cat-breeds',
}

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: ApplicationRoutesParts.FLEX_EXAMPLE,
        component: FlexExampleComponent,
      },
      {
        path: ApplicationRoutesParts.GRID_EXAMPLE,
        component: GridExampleComponent,
      },

      {
        path: ApplicationRoutesParts.CAT_BREEDS,
        component: CatsBreedOverviewComponent,
        children: [
          {
            path: 'details/:id',
            component: CatBreedDetailsComponent,
          },
        ],
      },
    ],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
