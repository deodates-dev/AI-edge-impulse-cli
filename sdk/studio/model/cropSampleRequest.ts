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


export class CropSampleRequest {
    /**
    * New start index of the sample
    */
    'cropStart': number;
    /**
    * New end index of the sample
    */
    'cropEnd': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cropStart",
            "baseName": "cropStart",
            "type": "number"
        },
        {
            "name": "cropEnd",
            "baseName": "cropEnd",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CropSampleRequest.attributeTypeMap;
    }
}

