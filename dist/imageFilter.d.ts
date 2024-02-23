import { FilterType, IFilter, IFilterManager } from './filterTypes';
export default class ImageFilters implements IFilterManager {
    constructor(filters?: IFilter[]);
    private canvas;
    private _ctx;
    private get context();
    protected filters: IFilter[];
    /**
     * 根据滤镜名获取滤镜对象
     * @param name
     * @returns
     */
    get(name: string): IFilter | undefined;
    clear(): void;
    /**
     * 把图片转成数据
     * @param img
     */
    convertToImageData(img: HTMLImageElement | string): Promise<ImageData>;
    /**
     * 应用滤镜
     */
    filter(image: ImageData | HTMLImageElement, filters?: IFilter[]): Promise<ImageData>;
    toBase64(data: ImageData): string;
    /**
     * 添加滤镜
     * @param filter
     */
    add(filter: IFilter | FilterType | Array<IFilter | FilterType>): void;
    /**
     * 移除滤镜
     * @param filter
     */
    remove(filter: FilterType | IFilter | Array<IFilter | string | FilterType> | string): void;
}
