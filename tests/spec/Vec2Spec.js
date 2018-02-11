describe("Vec2 construction", () => {
  it("works with zero args", () => {
    var v = new Vec2();
    expect(v.x).not.toBeUndefined();
    expect(v.y).not.toBeUndefined();
    expect(v.x).toEqual(0);
    expect(v.y).toEqual(0);
  });
  it("pays attention to actual args", () => {
    var v = new Vec2(18, 36);
    expect(v.x).not.toBeUndefined();
    expect(v.y).not.toBeUndefined();
    expect(v.x).toEqual(18);
    expect(v.y).toEqual(36);
  });
});

describe("Vec2.length", () => {
  it("defaults to 0", () => {
    var v = new Vec2();
    expect(v.length()).toEqual(0);
  });
});

describe("Vec2.normalized", () => {
  it("works", () => {
    var source = new Vec2(4, 3);
    var normalized = source.normalized();
    expect(normalized.length()).toEqual(1.0);
  });
  it("does not change the original vector", () => {
    var source = new Vec2(4, 3);
    var normalized = source.normalized();
    expect(normalized.x).not.toEqual(source.x);
    expect(normalized.y).not.toEqual(source.y);
    expect(normalized.length()).toEqual(1.0); // TODO: should be 'close to'
    expect(normalized.length()).not.toEqual(source.length());
  });
})
