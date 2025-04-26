import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@nx-template-angular-ssr/layout').then((r) => r.LAYOUT_ROUTES),
  },
];
