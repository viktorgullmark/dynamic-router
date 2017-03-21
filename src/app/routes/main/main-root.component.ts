import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../services/config-service/config.service';
import { ChunkComponent } from './../../components/chunk/chunk.component';
import { routes } from './main-root.routes';

@Component({
    templateUrl: 'main-root.component.html'
})

export class MainRoot {
    constructor(private configService: ConfigService, route: ActivatedRoute, router: Router) {
        this.configService.setConfig().subscribe(r => {
            route.routeConfig.children = this.configService.getConfig();
            // load default-route
            if (router.routerState.snapshot.url === '/') {
                router.navigate([route.routeConfig.children[0].path]);
            }
        });
    }
}
