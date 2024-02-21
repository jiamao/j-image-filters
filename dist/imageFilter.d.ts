import { FilterType, IFilter, IFilterManager } from './filterTypes';
export default class ImageFilters implements IFilterManager {
    constructor(filters?: FilterType[]);
    private canvas;
    private _ctx;
    private get context();
    protected filters: FilterType[];
    /**
     * 把图片转成数据
     * @param img
     */
    convertToImageData(img: HTMLImageElement | string): Promise<ImageData>;
    /**
     * 应用滤镜
     */
    filter(image: ImageData | HTMLImageElement, filters?: FilterType[]): Promise<ImageData>;
    toBase64(data: ImageData): string;
    /**
     * 添加滤镜
     * @param filter
     */
    add(filter: IFilter | IFilter[]): void;
    /**
     * 移除滤镜
     * @param filter
     */
    remove(filter: IFilter | IFilter[]): void;
}
