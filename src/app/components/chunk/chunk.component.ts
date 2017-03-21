import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'chunk.component.html'
})

export class ChunkComponent {
    constructor(private route: ActivatedRoute) {
    }
}


