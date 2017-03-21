import { ChunkComponent } from '../../components/chunk/chunk.component';
import { Routes, RouterModule } from '@angular/router';
import { MainRoot } from './main-root.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [{
    path: '', component: MainRoot
  }
];

export const MainRoutes: ModuleWithProviders = RouterModule.forChild(routes);