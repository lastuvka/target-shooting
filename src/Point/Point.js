/**
 * Class for point
 */
class Point {

    /**
     * Init Point coords
     *
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return JSON.stringify(this);
    }

    /**
     * Calculate distance between this point and a point in argument
     *
     * @param {Point} point
     * @returns {number}
     */
    distanceFromPoint(point) {
        if (!(point instanceof Point)) {
            throw TypeError('Argument must be instance of Point Class.');
        }
        return Math.hypot(point.x - this.x, point.y - this.y);
    }
}

export default Point;
