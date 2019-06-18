/**
 * Class for viewport
 */
class ViewportMath {
    /**
     *
     * @param {number} width
     * @param {number} height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    /**
     * Return intersection area
     *
     * @param { DOMRect} rect is allowed DOMRect-like object
     * @returns {number}
     */
    intersectionArea({left, top, right, bottom}) {
        if (left >= this.width || top >= this.height) {
            return 0;
        }
        let rightCropped = Math.min(right, this.width);
        let bottomCropped = Math.min(bottom, this.height);

        return (rightCropped - left) * (bottomCropped - top);
    }

}

export default ViewportMath;
