export class Filter {
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
export class ReverseFilter extends Filter {
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
export class GrayFilter extends Filter {
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
export class BlackFilter extends Filter {
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
export class BrightnessFilter extends Filter {
    name = 'BrightnessFilter';
    displayName = '亮度';
    option = {
        luminance: 0
    };
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
export class RGBFilter extends Filter {
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
export class OpacityFilter extends Filter {
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
export class RGBMaskFilter extends Filter {
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
export class OldPhotoFilter extends Filter {
    constructor(option) {
        super(option);
        if (option)
            this.option = option;
    }
    name = 'OldPhotoFilter';
    displayName = '老照片';
    option = {
        rColor: {
            r: 0.28, g: 0.72, b: 0.22, a: 1
        },
        gColor: {
            r: 0.25, g: 0.63, b: 0.13, a: 1
        },
        bColor: {
            r: 0.17, g: 0.66, b: 0.13, a: 1
        }
    };
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
export class BlurFilter extends Filter {
    constructor(option) {
        super(option);
    }
    name = 'BlurFilter';
    displayName = '模糊';
    option = {
        radius: 10,
        sigma: 5
    };
    genGaussMatrix(option = this.option) {
        const matrix = [];
        let sum = 0, x = 0, i = 0, len = 0;
        let r = 0, g = 0, b = -1 / (2 * option.sigma * option.sigma), a = 1 / (Math.sqrt(2 * Math.PI) * option.sigma);
        // 生成高斯矩阵
        for (i = 0, x = -option.radius; x <= option.radius; x++, i++) {
            g = a * Math.exp(b * x * x);
            matrix[i] = g;
            sum += g;
        }
        // 归一化，保证高斯矩阵的值 在0-1之间
        for (i = 0, len = matrix.length; i < len; i++) {
            matrix[i] /= sum;
        }
        return matrix;
    }
    filter(data, option = this.option) {
        const matrix = this.genGaussMatrix(option);
        let sum = 0;
        // X方向一维高斯运算
        for (let y = 0; y < data.height; y++) {
            for (let x = 0; x < data.width; x++) {
                let r = 0, g = 0, b = 0, i = 0;
                sum = 0;
                for (let j = -option.radius; j <= option.radius; j++) {
                    let k = x + j;
                    // 确保K没超出X范围
                    if (k >= 0 && k < data.width) {
                        i = (y * data.width + k) * 4;
                        const mi = matrix[j + option.radius];
                        r += data.data[i] * mi;
                        g += data.data[i + 1] * mi;
                        b += data.data[i + 2] * mi;
                        sum += mi;
                    }
                }
                i = (y * data.width + x) * 4;
                // 除以sum是为了消除处于边缘的像素，高斯运算不足问题
                data.data[i] = r / sum;
                data.data[i + 1] = g / sum;
                data.data[i + 2] = b / sum;
            }
        }
        // X方向一维高斯运算
        for (let x = 0; x < data.width; x++) {
            for (let y = 0; y < data.height; y++) {
                let r = 0, g = 0, b = 0, i = 0;
                sum = 0;
                for (let j = -option.radius; j <= option.radius; j++) {
                    let k = y + j;
                    // 确保K没超出y范围
                    if (k >= 0 && k < data.height) {
                        i = (y * data.width + k) * 4;
                        const mi = matrix[j + option.radius];
                        r += data.data[i] * mi;
                        g += data.data[i + 1] * mi;
                        b += data.data[i + 2] * mi;
                        sum += mi;
                    }
                }
                i = (y * data.width + x) * 4;
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
export class MosaicFilter extends Filter {
    constructor(option) {
        super(option);
    }
    name = 'MosaicFilter';
    displayName = '马赛克';
    option = {
        blur: 6 // 马赛克范围
    };
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
export default filters;
