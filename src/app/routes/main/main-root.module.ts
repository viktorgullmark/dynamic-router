import { ChunkModule } from '../../components/chunk/chunk.module';
import { ChunkComponent } from '../../components/chunk/chunk.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoot } from './main-root.component';
import { MainRoutes } from './main-root.routes';

@NgModule({
    imports: [MainRoutes, CommonModule, ChunkModule],
    exports: [MainRoot],
    declarations: [MainRoot],
    providers: [],
    entryComponents: [ChunkComponent]
})

export class MainRootModule { }
