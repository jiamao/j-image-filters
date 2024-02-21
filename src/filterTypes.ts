
export type Color = {
    r: number;
    g: number;
    b: number;
    a: number
}

/**
 * 滤镜接口
 */
export interface IFilter {

    /**
     * 滤镜颜色处理逻辑
     * @param color 颜色
     * @returns 
     */
    filter(color: Color): Color;
}

export type FilterType = IFilter | ((color: Color) => Color);

export interface IFilterManager {
    add(filter: FilterType | Array<FilterType>): void;

    remove(filter: FilterType | Array<FilterType>): void;
}