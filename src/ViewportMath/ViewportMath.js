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
     * Return an intersection area
     *
     * @param { DOMRect} rect is allowed the DOMRect-like object
     * @returns {number}
     */
    intersectionArea({left = 0, top = 0, right = 0, bottom = 0}) {
        let leftCropped = Math.max(left,0);
        let topCropped = Math.max(top, 0);
        let rightCropped = Math.min(right, this.width);
        let bottomCropped = Math.min(bottom, this.height);
        if (leftCropped >= rightCropped || topCropped >= bottomCropped) {
            return 0;
        }
        return (rightCropped - leftCropped) * (bottomCropped - topCropped);
    }

}

export default ViewportMath;
