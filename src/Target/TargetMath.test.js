import Point from './Point';
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
});