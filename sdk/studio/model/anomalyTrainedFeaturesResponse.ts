/**
 * Edge Impulse API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AnomalyTrainedFeaturesResponseAllOf } from './anomalyTrainedFeaturesResponseAllOf';
import { AnomalyTrainedFeaturesResponseAllOfData } from './anomalyTrainedFeaturesResponseAllOfData';
import { GenericApiResponse } from './genericApiResponse';

export class AnomalyTrainedFeaturesResponse {
    /**
    * Whether the operation succeeded
    */
    'success': boolean;
    /**
    * Optional error description (set if \'success\' was false)
    */
    'error'?: string;
    /**
    * Total number of windows in the data set
    */
    'totalSampleCount': number;
    'data': Array<AnomalyTrainedFeaturesResponseAllOfData>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "totalSampleCount",
            "baseName": "totalSampleCount",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AnomalyTrainedFeaturesResponseAllOfData>"
        }    ];

    static getAttributeTypeMap() {
        return AnomalyTrainedFeaturesResponse.attributeTypeMap;
    }
}

