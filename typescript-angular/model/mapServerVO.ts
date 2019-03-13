/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GenericElementVO } from './genericElementVO';
import { MapLayerElementVO } from './mapLayerElementVO';
import { MapLayoutVO } from './mapLayoutVO';


export interface MapServerVO { 
    elements?: Array<MapLayerElementVO>;
    features?: Array<GenericElementVO>;
    id?: string;
    idReference?: string;
    layouts?: Array<MapLayoutVO>;
    name?: string;
    props?: { [key: string]: string; };
}
