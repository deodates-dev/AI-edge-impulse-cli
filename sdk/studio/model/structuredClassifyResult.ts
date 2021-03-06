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


export class StructuredClassifyResult {
    /**
    * For object detection. An array of bounding box arrays, (x, y, width, height), one per detection in the image.
    */
    'boxes'?: Array<Array<number>>;
    /**
    * For object detection. An array of labels, one per detection in the image.
    */
    'labels'?: Array<string>;
    /**
    * For object detection. An array of probability scores, one per detection in the image.
    */
    'scores'?: Array<number>;
    /**
    * For object detection. A score that indicates accuracy compared to the ground truth, if available.
    */
    'mAP'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "boxes",
            "baseName": "boxes",
            "type": "Array<Array<number>>"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<string>"
        },
        {
            "name": "scores",
            "baseName": "scores",
            "type": "Array<number>"
        },
        {
            "name": "mAP",
            "baseName": "mAP",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return StructuredClassifyResult.attributeTypeMap;
    }
}

