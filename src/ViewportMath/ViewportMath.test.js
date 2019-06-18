import ViewportMath from "./ViewportMath";

it('calculate area of intersection', () => {
    let viewportMath = new ViewportMath(0, 0);
    //DOMRect-like object
    let rect = {left: 0, top: 0, right: 50, bottom: 50};
    expect(viewportMath.intersectionArea(rect)).toBe(0);

    viewportMath = new ViewportMath(100, 100);
    rect = {left: 0, top: 0, right: 100, bottom: 100};
    expect(viewportMath.intersectionArea(rect)).toBe(10000);

    rect = {left: 50, top: 50, right: 100, bottom: 100};
    expect(viewportMath.intersectionArea(rect)).toBe(2500);

    rect = {left: 50, top: 50, right: 250, bottom: 101};
    expect(viewportMath.intersectionArea(rect)).toBe(2500);

    rect = {left: 150, top: 150, right: 250, bottom: 201};
    expect(viewportMath.intersectionArea(rect)).toBe(0);
});