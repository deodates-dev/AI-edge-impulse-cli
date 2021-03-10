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


/**
* Target device
*/
export class OptimizeConfigTargetDevice {
    'name'?: string;
    'ram'?: number;
    'rom'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ram",
            "baseName": "ram",
            "type": "number"
        },
        {
            "name": "rom",
            "baseName": "rom",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OptimizeConfigTargetDevice.attributeTypeMap;
    }
}

