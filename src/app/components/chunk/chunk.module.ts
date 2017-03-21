import { NgModule } from '@angular/core';
import { ChunkComponent } from './chunk.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [ChunkComponent],
    declarations: [ChunkComponent],
    providers: []
})

export class ChunkModule { }