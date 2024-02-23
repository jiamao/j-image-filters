
export type Color = {
    r: number;
    g: number;
    b: number;
    a?: number
}

export interface FilterOption {
    r?: number;
    g?: number;
    b?: number;
    a?: number;
    /**
     * 亮度调节参数，在亮度滤镜中用到
     */
    luminance?: number;
}

/**
 * 老照片滤镜参数
 */
export interface OldPhotoOption extends FilterOption {
    rColor?: Color;
    gColor?: Color;
    bColor?: Color;
} 

/**
 * 模糊参数
 */
export interface BlurFilterOption extends FilterOption {
    radius: number;
    sigma: number;
}

/**
 * 马赛克参数
 */
export interface MosaicFilterOption extends FilterOption {
    blur: number;    
}

export type FilterType = ((color: Color, option?: FilterOption) => Color);


/**
 * 滤镜接口
 */
export interface IFilter {

    name: string;
    // 中文名
    displayName?: string;

    /**
     * 调节参数
     */
    option?: FilterOption;

    /**
     * 滤镜颜色处理逻辑
     * @param color 颜色
     * @returns 
     */    
    filterColor?(color: Color, option?: FilterOption): Color;

    /**
     * 对整个数据进行统一处理
     * @param data 
     * @param option 
     */
    filter?(data: ImageData, option?: FilterOption): ImageData;
}

export interface IFilterManager {
    /**
     * 根据滤镜名获取滤镜对象
     * @param name 
     * @returns 
     */
    get(name: string): IFilter|undefined;

    /**
     * 加入滤镜
     * @param filter 
     */
    add(filter: IFilter | Array< IFilter| FilterType>): void;

    /**
     * 移除滤镜
     * @param filter 
     */
    remove(filter: FilterType | IFilter | Array<IFilter|string|FilterType> | string): void;

    /**
     * 清空滤镜
     */
    clear(): void;

    /**
     * 把图片转为imagedata
     * @param img 
     */
    convertToImageData(img: HTMLImageElement | string): Promise<ImageData>;

    /**
     * 应用滤镜
     */
    filter(image: ImageData | HTMLImageElement, filters?: Array<IFilter>): Promise<ImageData>;

    /**
     * 转base64
     * @param data 
     */
    toBase64(data: ImageData): string;
}