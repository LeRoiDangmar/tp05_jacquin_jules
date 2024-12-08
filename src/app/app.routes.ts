import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadChildren: () => import('./features/navigation/navigation.module').then(m => m.NavigationModule) },
    { path: 'cards', loadChildren:() => import('./features/cards/cards.module').then(m => m.CardsModule) },
    { path: '**', redirectTo: 'home'}
    
  ];
