import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing_urls } from './routing-urls/routing-urls';

const routes: Routes = routing_urls;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
