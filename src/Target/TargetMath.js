import Point from '../Point/Point';

/**
 * Class for calculating shooting on the target
 */
class TargetMath {
    /**
     * Init class with the point of center and the radius
     *
     * @param {Point} center - point in the middle of target
     * @param {number} r - radius
     */
    constructor(center, r) {
        if (!(center instanceof Point)){
            throw TypeError('Argument must be instance of Point Class.');
        }
        this.center = center;
        this.r = r;
    }

    /**
     * Check if the point is in the Target
     *
     * @param {Point} point
     * @returns {boolean}
     */
    isShootInTarget(point) {
        return this.center.distanceFromPoint(point) <= this.r;
    }

}

export default TargetMath;
