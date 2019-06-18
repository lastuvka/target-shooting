import Point from './Point';

it('Create point', () => {
    expect(new Point(1, 2).x).toEqual(1);
    expect(new Point(1, 2).y).toEqual(2);
});

it('Distance from point', () => {
    let point = new Point(0, 0);
    expect(point.distanceFromPoint(new Point(0,0))).toEqual(0);
    expect(point.distanceFromPoint(new Point(2,0))).toEqual(2);
    expect(point.distanceFromPoint(new Point(0,2))).toEqual(2);
    expect(point.distanceFromPoint(new Point(3,4))).toEqual(5);

    point = new Point(-2, 2);
    expect(point.distanceFromPoint(new Point(-2,2))).toEqual(0);
    expect(point.distanceFromPoint(new Point(2,2))).toEqual(4);
    expect(point.distanceFromPoint(new Point(-6,2))).toEqual(4);
});