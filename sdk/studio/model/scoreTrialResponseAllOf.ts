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


export class ScoreTrialResponseAllOf {
    'dspMips': number;
    'dspRam': number;
    'dspRom': number;
    'learnMaccs': number;
    'learnRam': number;
    'learnRom': number;
    'score': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dspMips",
            "baseName": "dspMips",
            "type": "number"
        },
        {
            "name": "dspRam",
            "baseName": "dspRam",
            "type": "number"
        },
        {
            "name": "dspRom",
            "baseName": "dspRom",
            "type": "number"
        },
        {
            "name": "learnMaccs",
            "baseName": "learnMaccs",
            "type": "number"
        },
        {
            "name": "learnRam",
            "baseName": "learnRam",
            "type": "number"
        },
        {
            "name": "learnRom",
            "baseName": "learnRom",
            "type": "number"
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ScoreTrialResponseAllOf.attributeTypeMap;
    }
}

