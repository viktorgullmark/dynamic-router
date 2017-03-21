import { ConfigService } from './../services/config-service/config.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

@Injectable()
export class CanActivateMain implements CanActivate {

    constructor(private configService: ConfigService, private router: Router) {
    }

    public canActivate(): Observable<any> {
        return this.configService.setConfig().map(r => {

            // modify current route-config with new one from service
            this.router.config[0].children = this.configService.getConfig();

            // reset route-config using new config from configService and navigate to the requested url
            this.router.resetConfig(this.router.config);
            this.router.navigateByUrl(window.location.pathname);
        }).first();
    }
}
