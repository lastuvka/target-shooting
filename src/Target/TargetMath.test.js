import Point from '../Point/Point';
import TargetMath from "./TargetMath";

it('Is point in target', () => {
    let center = new Point(0, 0);
    let r = 5;
    expect(new TargetMath(center, r).isShootInTarget(new Point(3,4))).toBe(true);
    expect(new TargetMath(center, r).isShootInTarget(new Point(0,5))).toBe(true);
    expect(new TargetMath(center, r).isShootInTarget(new Point(5,0))).toBe(true);
    expect(new TargetMath(center, r).isShootInTarget(new Point(0,0))).toBe(true);
    expect(new TargetMath(center, r).isShootInTarget(new Point(-3,-4))).toBe(true);
    expect(new TargetMath(center, r).isShootInTarget(new Point(0,-5))).toBe(true);
    expect(new TargetMath(center, r).isShootInTarget(new Point(-5,0))).toBe(true);
    expect(new TargetMath(center, r).isShootInTarget(new Point(-6,0))).toBe(false);
    expect(new TargetMath(center, r).isShootInTarget(new Point(-5,-1))).toBe(false);
    expect(new TargetMath(center, r).isShootInTarget(new Point(-5,6))).toBe(false);

    center = new Point(-5, 5);
    expect(new TargetMath(center, r).isShootInTarget(new Point(-3,3))).toBe(true);
    expect(new TargetMath(center, r).isShootInTarget(new Point(-5,5))).toBe(true);
    expect(new TargetMath(center, r).isShootInTarget(new Point(-6,0))).toBe(false);
    expect(new TargetMath(center, r).isShootInTarget(new Point(-5,11))).toBe(false);
});