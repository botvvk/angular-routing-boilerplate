import { Routes } from '@angular/router';

export const routing_urls: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/pages.module').then((m) => m.PagesModule),
  },
];
