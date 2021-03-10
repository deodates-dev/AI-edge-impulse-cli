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


export class ImpulseInputBlock {
    /**
    * Identifier for this block. Make sure to up this number when creating a new block, and don\'t re-use identifiers. If the block hasn\'t changed, keep the ID as-is.
    */
    'id': number;
    /**
    * Block type (either time-series or image)
    */
    'type': ImpulseInputBlockTypeEnum;
    /**
    * Block name, will be used in menus
    */
    'name': string;
    /**
    * Block title, used in the impulse UI
    */
    'title': string;
    /**
    * Size of the sliding window in milliseconds
    */
    'windowSizeMs'?: number;
    /**
    * We use a sliding window to go over the raw data. How many milliseconds to increase the sliding window with for each step.
    */
    'windowIncreaseMs'?: number;
    /**
    * Width all images are resized to before training
    */
    'imageWidth'?: number;
    /**
    * Width all images are resized to before training
    */
    'imageHeight'?: number;
    /**
    * How to resize images before training
    */
    'resizeMode'?: ImpulseInputBlockResizeModeEnum;
    /**
    * Resize method to use when resizing images
    */
    'resizeMethod'?: ImpulseInputBlockResizeMethodEnum;
    /**
    * If images are resized using a crop, choose where to anchor the crop
    */
    'cropAnchor'?: ImpulseInputBlockCropAnchorEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ImpulseInputBlockTypeEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "windowSizeMs",
            "baseName": "windowSizeMs",
            "type": "number"
        },
        {
            "name": "windowIncreaseMs",
            "baseName": "windowIncreaseMs",
            "type": "number"
        },
        {
            "name": "imageWidth",
            "baseName": "imageWidth",
            "type": "number"
        },
        {
            "name": "imageHeight",
            "baseName": "imageHeight",
            "type": "number"
        },
        {
            "name": "resizeMode",
            "baseName": "resizeMode",
            "type": "ImpulseInputBlockResizeModeEnum"
        },
        {
            "name": "resizeMethod",
            "baseName": "resizeMethod",
            "type": "ImpulseInputBlockResizeMethodEnum"
        },
        {
            "name": "cropAnchor",
            "baseName": "cropAnchor",
            "type": "ImpulseInputBlockCropAnchorEnum"
        }    ];

    static getAttributeTypeMap() {
        return ImpulseInputBlock.attributeTypeMap;
    }
}


export type ImpulseInputBlockTypeEnum = 'time-series' | 'image';
export const ImpulseInputBlockTypeEnumValues: string[] = ['time-series', 'image'];

export type ImpulseInputBlockResizeModeEnum = 'squash' | 'fit-short' | 'fit-long' | 'crop';
export const ImpulseInputBlockResizeModeEnumValues: string[] = ['squash', 'fit-short', 'fit-long', 'crop'];

export type ImpulseInputBlockResizeMethodEnum = 'lanczos3' | 'nearest';
export const ImpulseInputBlockResizeMethodEnumValues: string[] = ['lanczos3', 'nearest'];

export type ImpulseInputBlockCropAnchorEnum = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'middle-center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export const ImpulseInputBlockCropAnchorEnumValues: string[] = ['top-left', 'top-center', 'top-right', 'middle-left', 'middle-center', 'middle-right', 'bottom-left', 'bottom-center', 'bottom-right'];
