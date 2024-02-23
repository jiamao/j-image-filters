import { IFilter, Color, FilterOption, OldPhotoOption, BlurFilterOption, MosaicFilterOption } from './filterTypes';
export declare abstract class Filter implements IFilter {
    constructor(option?: FilterOption);
    name: string;
    displayName?: string;
    option: FilterOption;
    filterColor(color: Color): Color;
    protected checkColorValue: (v: number) => number;
    toJSON(): {
        name: string;
        displayName: string;
        optin: FilterOption;
    };
}
/**
 * 反色滤镜
 */
export declare class ReverseFilter extends Filter {
    name: string;
    displayName: string;
    filterColor(color: Color): Color;
}
/**
 * 灰度滤镜
 */
export declare class GrayFilter extends Filter {
    constructor(option?: FilterOption);
    name: string;
    displayName: string;
    option: FilterOption;
    filterColor(color: Color, option?: FilterOption): Color;
}
/**
 * 默白滤镜
 */
export declare class BlackFilter extends Filter {
    name: string;
    displayName: string;
    filterColor(color: Color): Color;
}
/**
 * 亮度滤镜
 */
export declare class BrightnessFilter extends Filter {
    constructor(option?: FilterOption);
    name: string;
    displayName: string;
    filterColor(color: Color, option?: FilterOption): Color;
}
/**
 * RGB通道滤镜
 */
export declare class RGBFilter extends Filter {
    name: string;
    displayName: string;
    filterColor(color: Color, option?: FilterOption): Color;
}
/**
 * 透明度
 */
export declare class OpacityFilter extends Filter {
    constructor(option?: FilterOption);
    name: string;
    displayName: string;
    filterColor(color: Color, option?: FilterOption): Color;
}
/**
 * RGB蒙版滤镜
 */
export declare class RGBMaskFilter extends Filter {
    name: string;
    displayName: string;
    filterColor(color: Color, option?: FilterOption): Color;
}
/**
 * 老照片滤镜
 */
export declare class OldPhotoFilter extends Filter {
    constructor(option?: OldPhotoOption);
    name: string;
    displayName: string;
    option: OldPhotoOption;
    filterColor(color: Color, option?: OldPhotoOption): Color;
}
/**
 * 模糊滤镜
 */
export declare class BlurFilter extends Filter {
    constructor(option?: BlurFilterOption);
    name: string;
    displayName: string;
    option: BlurFilterOption;
    private genGaussMatrix;
    filter(data: ImageData, option?: BlurFilterOption): ImageData;
}
/**
 * 马赛克滤镜
 */
export declare class MosaicFilter extends Filter {
    constructor(option?: MosaicFilterOption);
    name: string;
    displayName: string;
    option: MosaicFilterOption;
    filter(data: ImageData, option?: MosaicFilterOption): ImageData;
}
declare const filters: {
    [key: string]: IFilter;
};
export default filters;
