import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { DefaultService } from './api/default.service';
import { MapLayerVectorControllerService } from './api/mapLayerVectorController.service';
import { MapMarkerControllerService } from './api/mapMarkerController.service';
import { MapServerControllerService } from './api/mapServerController.service';
import { MapToolsControllerService } from './api/mapToolsController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    DefaultService,
    MapLayerVectorControllerService,
    MapMarkerControllerService,
    MapServerControllerService,
    MapToolsControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
