import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChunkComponent } from './../../components/chunk/chunk.component';
import 'rxjs/add/observable/of';

@Injectable()
export class ConfigService {
    public config: any;

    constructor() { }

    public setConfig() {
        // static route tree for show, here you can load your routes from an api
        const routes = [
            {
                path: 'route1',
                component: ChunkComponent,
                children: [
                    {
                        path: 'sub1',
                        component: ChunkComponent,
                        children: [
                            {
                                path: 'subsub1',
                                component: ChunkComponent,
                                children: [
                                    {
                                        path: 'subsubsub1',
                                        component: ChunkComponent,
                                        children: []
                                    },
                                    {
                                        path: 'subsubsub2',
                                        component: ChunkComponent,
                                        children: []
                                    }
                                ]
                            },
                            {
                                path: 'subsub2',
                                component: ChunkComponent,
                                children: []
                            }
                        ]
                    },
                    {
                        path: 'sub2',
                        component: ChunkComponent,
                        children: [
                            {
                                path: 'subsub1',
                                component: ChunkComponent,
                                children: []
                            }
                        ]
                    },
                    {
                        path: 'sub3',
                        component: ChunkComponent,
                        children: []
                    }
                ]
            },
            {
                path: 'route2',
                component: ChunkComponent,
                children: []
            }
        ];

        this.config = routes;

        return Observable.of(routes);
    }
    
    public getConfig() {
        return this.config;
    }
}

