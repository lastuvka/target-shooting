import Point from './Point';

/**
 * Class for calculating shooting on target
 */
class TargetMath {
    /**
     *
     * @param {Point} center - point in middle of target
     * @param {number} r -radius
     */
    constructor(center, r) {
        if (!(center instanceof Point)){
            throw TypeError('Argument must be instance of Point Class.');
        }
        this.center = center;
        this.r = r;
    }

    /**
     * Check if point is in Target
     *
     * @param {Point} point
     * @returns {boolean}
     */
    isShootInTarget(point) {
        return this.center.distanceFromPoint(point) <= this.r;
    }

}

export default TargetMath;
