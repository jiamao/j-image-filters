import { IFilter, Color, FilterOption, OldPhotoOption } from './filterTypes';

export abstract class Filter implements IFilter {
    name: string;
    option?: FilterOption = {
        luminance: 0
    };
    filterColor(color: Color){
        return color;
    };

    // 保证颜色在0-255之间
    protected checkColorValue = (v: number) => {
        v = Math.min(v, 255);
        v = Math.max(v, 0);
        v = Math.round(v);
        return v;
    }
}

/**
 * 反色滤镜
 */
export class ReverseFilter extends Filter {
    name = 'reverseFilter';
    // 颜色处理
    filterColor(color: Color) {
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
    name = 'grayFilter';
    option = {
        r: 0.3, g: 0.6, b: 0.1
    };
    // 颜色处理
    filterColor(color: Color, option: FilterOption = this.option) {
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
    name = 'blackFilter';
    // 颜色处理
    filterColor(color: Color) {
        const avg = this.checkColorValue((color.r + color.g + color.b) / 3);
        const c = avg >= 128? 255: 0;
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
    name = 'brightnessFilter';
    option = {
        luminance: 0
    }
    // 颜色处理
    filterColor(color: Color, option: FilterOption = this.option) {
        if(option.luminance === 0) return color;

        color.r = this.checkColorValue(option.luminance + color.r);
        color.g = this.checkColorValue(option.luminance + color.g);
        color.b = this.checkColorValue(option.luminance + color.b);
        return color;
    }
}

/**
 * RGB通道滤镜
 */
export class rgbFilter extends Filter {
    name = 'rgbFilter';

    // 颜色处理
    filterColor(color: Color, option: FilterOption = this.option) {
        if(option.r) color.r = this.checkColorValue(option.r + color.r);
        if(option.g) color.g = this.checkColorValue(option.g + color.g);
        if(option.b) color.b = this.checkColorValue(option.b + color.b);
        return color;
    }
}

/**
 * 透明度
 */
export class opacityFilter extends Filter {
    name = 'opacityFilter'
    // 颜色处理
    filterColor(color: Color, option: FilterOption = this.option) {
        
        color.a = this.checkColorValue(option.luminance + color.a);
        return color;
    }
}


/**
 * RGB蒙版滤镜
 */
export class rgbMaskFilter extends Filter {
    name = 'rgbMaskFilter';
    // 颜色处理
    filterColor(color: Color, option: FilterOption = this.option) {
        
        const avg = this.checkColorValue((color.r + color.g + color.b) / 3);
        if(option.r) color.r = avg;
        if(option.g) color.g = avg;
        if(option.b) color.b = avg;
        return color;
    }
}

/**
 * 老照片滤镜
 */
export class OldPhotoFilter extends Filter {
    name = 'oldPhotoFilter';
    option: OldPhotoOption = {
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
    filterColor(color: Color, option = this.option) {
        color.r = this.checkColorValue(color.r * option.rColor.r + color.g * option.rColor.g+ color.b * option.rColor.b);
        color.g = this.checkColorValue(color.r * option.gColor.r + color.g * option.gColor.g + color.b * option.gColor.b);
        color.b = this.checkColorValue(color.r * option.bColor.r + color.g * option.bColor.g + color.b * option.bColor.b);
        return color;
    }
}


/**
 * 模糊滤镜
 */
export class BlurFilter extends Filter {
    name = 'blurFilter';
}