import { MainRoot } from './routes/main/main-root.component';
import { CanActivateMain } from './guards/main.guard';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', component: MainRoot },

    // wild-card route with guard to fetch routes before match
    { path: '**', component: MainRoot, canActivate: [CanActivateMain]},
];

export const routing = RouterModule.forRoot(routes);
