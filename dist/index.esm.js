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
        for (let i = 0; i < image.data.length; i += 4) {
            let color = {
                r: image.data[i],
                g: image.data[i + 1],
                b: image.data[i + 2],
                a: image.data[i + 3],
            };
            // 滤镜处理
            filters.map((filter) => {
                color = typeof filter === 'function' ? filter(color) : filter.filter(color);
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
        if (Array.isArray(filter))
            this.filters.push(...filter);
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
                if (this.filters[i] === filter) {
                    this.filters.splice(i, 1);
                }
            }
        }
    }
}

export { ImageFilters as default };
