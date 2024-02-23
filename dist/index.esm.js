class Filter {
    constructor(option) {
        if (option)
            this.option = option;
    }
    name;
    displayName;
    option = {
        luminance: 0
    };
    filterColor(color) {
        return color;
    }
    ;
    // 保证颜色在0-255之间
    checkColorValue = (v) => {
        v = Math.min(v, 255);
        v = Math.max(v, 0);
        v = Math.round(v);
        return v;
    };
}
/**
 * 反色滤镜
 */
class ReverseFilter extends Filter {
    name = 'ReverseFilter';
    displayName = '反色';
    // 颜色处理
    filterColor(color) {
        color.r = 255 - color.r;
        color.g = 255 - color.g;
        color.b = 255 - color.b;
        return color;
    }
}
/**
 * 灰度滤镜
 */
class GrayFilter extends Filter {
    constructor(option) {
        super(option);
        if (option)
            this.option = option;
    }
    name = 'GrayFilter';
    displayName = '灰度';
    option = {
        r: 0.3, g: 0.6, b: 0.1
    };
    // 颜色处理
    filterColor(color, option = this.option) {
        const gray = this.checkColorValue(color.r * option.r + color.g * option.g + color.b * option.b);
        color.r = gray;
        color.g = gray;
        color.b = gray;
        return color;
    }
}
/**
 * 默白滤镜
 */
class BlackFilter extends Filter {
    name = 'BlackFilter';
    displayName = '黑白';
    // 颜色处理
    filterColor(color) {
        const avg = this.checkColorValue((color.r + color.g + color.b) / 3);
        const c = avg >= 128 ? 255 : 0;
        color.r = c;
        color.g = c;
        color.b = c;
        return color;
    }
}
/**
 * 亮度滤镜
 */
class BrightnessFilter extends Filter {
    constructor(option) {
        super(option);
    }
    name = 'BrightnessFilter';
    displayName = '亮度';
    // 颜色处理
    filterColor(color, option = this.option) {
        if (option.luminance === 0)
            return color;
        color.r = this.checkColorValue(option.luminance + color.r);
        color.g = this.checkColorValue(option.luminance + color.g);
        color.b = this.checkColorValue(option.luminance + color.b);
        return color;
    }
}
/**
 * RGB通道滤镜
 */
class RGBFilter extends Filter {
    name = 'RGBFilter';
    displayName = 'RGB通道';
    // 颜色处理
    filterColor(color, option = this.option) {
        if (option.r)
            color.r = this.checkColorValue(option.r + color.r);
        if (option.g)
            color.g = this.checkColorValue(option.g + color.g);
        if (option.b)
            color.b = this.checkColorValue(option.b + color.b);
        return color;
    }
}
/**
 * 透明度
 */
class OpacityFilter extends Filter {
    constructor(option) {
        super(option);
    }
    name = 'OpacityFilter';
    displayName = '透明度';
    // 颜色处理
    filterColor(color, option = this.option) {
        color.a = this.checkColorValue(option.luminance + color.a);
        return color;
    }
}
/**
 * RGB蒙版滤镜
 */
class RGBMaskFilter extends Filter {
    name = 'RGBMaskFilter';
    displayName = 'RGB蒙版';
    // 颜色处理
    filterColor(color, option = this.option) {
        const avg = this.checkColorValue((color.r + color.g + color.b) / 3);
        if (option.r)
            color.r = avg;
        if (option.g)
            color.g = avg;
        if (option.b)
            color.b = avg;
        return color;
    }
}
/**
 * 老照片滤镜
 */
class OldPhotoFilter extends Filter {
    constructor(option) {
        super(option);
        if (option)
            this.option = option;
        this.option = {
            rColor: {
                r: 0.28, g: 0.72, b: 0.22, a: 1
            },
            gColor: {
                r: 0.25, g: 0.63, b: 0.13, a: 1
            },
            bColor: {
                r: 0.17, g: 0.66, b: 0.13, a: 1
            },
            ...this.option
        };
    }
    name = 'OldPhotoFilter';
    displayName = '老照片';
    // 颜色处理
    filterColor(color, option = this.option) {
        color.r = this.checkColorValue(color.r * option.rColor.r + color.g * option.rColor.g + color.b * option.rColor.b);
        color.g = this.checkColorValue(color.r * option.gColor.r + color.g * option.gColor.g + color.b * option.gColor.b);
        color.b = this.checkColorValue(color.r * option.bColor.r + color.g * option.bColor.g + color.b * option.bColor.b);
        return color;
    }
}
/**
 * 模糊滤镜
 */
class BlurFilter extends Filter {
    constructor(option) {
        super(option);
        this.option = Object.assign({
            radius: 10,
            sigma: 5
        }, this.option);
    }
    name = 'BlurFilter';
    displayName = '模糊';
    genGaussMatrix(option = this.option) {
        const matrix = [];
        let sum = 0;
        let b = -1 / (2 * option.sigma * option.sigma), a = 1 / (Math.sqrt(2 * Math.PI) * option.sigma);
        // 生成高斯矩阵
        for (let i = 0, x = -option.radius; x <= option.radius; x++, i++) {
            const g = a * Math.exp(b * x * x);
            matrix[i] = g;
            sum += g;
        }
        // 归一化，保证高斯矩阵的值 在0-1之间
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] /= sum;
        }
        return matrix;
    }
    filter(data, option = this.option) {
        const matrix = this.genGaussMatrix(option);
        // X方向一维高斯运算
        for (let y = 0; y < data.height; y++) {
            for (let x = 0; x < data.width; x++) {
                let r = 0, g = 0, b = 0;
                let sum = 0;
                for (let j = -option.radius; j <= option.radius; j++) {
                    let k = x + j;
                    // 确保K没超出X范围
                    if (k >= 0 && k < data.width) {
                        const i = (y * data.width + k) * 4;
                        const mi = matrix[j + option.radius];
                        r += data.data[i] * mi;
                        g += data.data[i + 1] * mi;
                        b += data.data[i + 2] * mi;
                        sum += mi;
                    }
                }
                const i = (y * data.width + x) * 4;
                // 除以sum是为了消除处于边缘的像素，高斯运算不足问题
                data.data[i] = r / sum;
                data.data[i + 1] = g / sum;
                data.data[i + 2] = b / sum;
            }
        }
        // X方向一维高斯运算
        for (let x = 0; x < data.width; x++) {
            for (let y = 0; y < data.height; y++) {
                let r = 0, g = 0, b = 0;
                let sum = 0;
                for (let j = -option.radius; j <= option.radius; j++) {
                    let k = y + j;
                    // 确保K没超出y范围
                    if (k >= 0 && k < data.height) {
                        const i = (k * data.width + x) * 4;
                        const mi = matrix[j + option.radius];
                        r += data.data[i] * mi;
                        g += data.data[i + 1] * mi;
                        b += data.data[i + 2] * mi;
                        sum += mi;
                    }
                }
                const i = (y * data.width + x) * 4;
                // 除以sum是为了消除处于边缘的像素，高斯运算不足问题
                data.data[i] = r / sum;
                data.data[i + 1] = g / sum;
                data.data[i + 2] = b / sum;
            }
        }
        return data;
    }
}
/**
 * 马赛克滤镜
 */
class MosaicFilter extends Filter {
    constructor(option) {
        super(option);
        this.option = Object.assign({
            blur: 6 // 马赛克范围
        }, this.option);
    }
    name = 'MosaicFilter';
    displayName = '马赛克';
    filter(data, option = this.option) {
        const blurR = 2 * option.blur + 1;
        const total = blurR * blurR;
        for (let i = option.blur; i <= data.width; i += blurR) {
            for (let j = option.blur; j <= data.height; j += blurR) {
                let r = 0, g = 0, b = 0;
                for (let leny = -option.blur; leny <= option.blur; leny++) {
                    for (let lenx = -option.blur; lenx <= option.blur; lenx++) {
                        const index = 4 * ((j + leny) * data.width + i + lenx);
                        r += data.data[index];
                        g += data.data[index + 1];
                        b += data.data[index + 2];
                    }
                }
                let vr = r / total, vg = g / total, vb = b / total;
                for (let leny = -option.blur; leny <= option.blur; leny++) {
                    for (let lenx = -option.blur; lenx <= option.blur; lenx++) {
                        const index = 4 * ((j + leny) * data.width + i + lenx);
                        data.data[index] = vr;
                        data.data[index + 1] = vg;
                        data.data[index + 2] = vb;
                    }
                }
            }
        }
        return data;
    }
}
const filters = {
    ReverseFilter,
    GrayFilter,
    BlackFilter,
    BrightnessFilter,
    RGBFilter,
    OpacityFilter,
    RGBMaskFilter,
    OldPhotoFilter,
    BlurFilter,
    MosaicFilter
};

class ImageFilters {
    constructor(filters) {
        if (filters && filters.length) {
            this.filters.push(...filters);
        }
    }
    // 做为转换的canvas元纱
    canvas = document.createElement('canvas');
    _ctx;
    get context() {
        if (this._ctx)
            return this._ctx;
        this._ctx = this.canvas.getContext('2d');
        return this._ctx;
    }
    // 所有支持的滤镜
    filters = new Array();
    /**
     * 当前滤镜个数
     */
    get count() {
        return this.filters.length;
    }
    /**
     * 根据滤镜名获取滤镜对象
     * @param name
     * @returns
     */
    get(name) {
        for (const f of this.filters) {
            if (f.name === name)
                return f;
        }
    }
    clear() {
        this.filters.splice(0, this.filters.length);
    }
    /**
     * 把图片转成数据
     * @param img
     */
    async convertToImageData(img) {
        if (typeof img === 'string') {
            const el = new Image();
            el.src = img;
            return this.convertToImageData(el);
        }
        return new Promise((resolve) => {
            if (!img.complete) {
                img.onload = async (e) => {
                    const res = await this.convertToImageData(img);
                    resolve(res);
                };
            }
            else {
                this.canvas.width = img.naturalWidth || img.width;
                this.canvas.height = img.naturalHeight || img.height;
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.drawImage(img, 0, 0);
                const data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
                resolve(data);
            }
        });
    }
    /**
     * 应用滤镜
     */
    async filter(image, filters = this.filters) {
        if (image instanceof HTMLImageElement) {
            image = await this.convertToImageData(image);
        }
        // 滤镜处理, 如果是全量统一处理的滤镜，则直接处理原始数据
        filters.map((filter) => {
            if (filter.filter && image instanceof ImageData)
                filter.filter(image, filter.option);
        });
        for (let i = 0; i < image.data.length; i += 4) {
            let color = {
                r: image.data[i],
                g: image.data[i + 1],
                b: image.data[i + 2],
                a: image.data[i + 3],
            };
            // 滤镜处理
            filters.map((filter) => {
                if (filter.filterColor)
                    color = filter.filterColor(color, filter.option);
            });
            image.data[i] = color.r;
            image.data[i + 1] = color.g;
            image.data[i + 2] = color.b;
            image.data[i + 3] = color.a;
        }
        return image;
    }
    // 转base64
    toBase64(data) {
        this.canvas.width = data.width;
        this.canvas.height = data.height;
        this.context.clearRect(0, 0, data.width, data.height);
        this.context.putImageData(data, 0, 0);
        return this.canvas.toDataURL();
    }
    /**
     * 添加滤镜
     * @param filter
     */
    add(filter) {
        if (Array.isArray(filter)) {
            for (const f of filter)
                this.add(f);
        }
        else if (typeof filter === 'function') {
            this.filters.push({
                name: '',
                filterColor: filter
            });
        }
        else
            this.filters.push(filter);
    }
    /**
     * 移除滤镜
     * @param filter
     */
    remove(filter) {
        if (Array.isArray(filter)) {
            for (const f of filter)
                this.remove(f);
        }
        else {
            for (let i = this.filters.length - 1; i >= 0; i--) {
                if ((typeof filter === 'string' && this.filters[i].name === filter) || this.filters[i] === filter || this.filters[i].filter === filter) {
                    this.filters.splice(i, 1);
                }
            }
        }
    }
}

export { ImageFilters as default, filters };
