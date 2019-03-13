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
import { GenericAlarmVO } from './genericAlarmVO';
import { GenericMapCoordenatesVO } from './genericMapCoordenatesVO';
import { GenericMapPointVO } from './genericMapPointVO';
import { GenericParameterMiniVO } from './genericParameterMiniVO';
import { GenericParameterVO } from './genericParameterVO';


export interface GenericElementVO { 
    alarmedStatus?: number;
    alarms?: Array<GenericAlarmVO>;
    alias?: string;
    children?: Array<GenericElementVO>;
    coordenates?: Array<GenericMapCoordenatesVO>;
    id?: string;
    idStatus?: string;
    lastUpdate?: number;
    name?: string;
    params?: { [key: string]: GenericParameterVO; };
    pk?: number;
    points?: Array<GenericMapPointVO>;
    road?: string;
    status?: string;
    statusParams?: Array<GenericParameterMiniVO>;
    type?: string;
    typeName?: string;
    uid?: string;
}
