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
  it("can work with only x-coords", () => {
    // hopefully nobody ever does this, but just want to make
    // sure that the arg-defaulting code doesn't happen 'in one block'
    // instead of individually for each axis... because that's burned
    // me before
    var v = new Vec2(1);
    expect(v.x).not.toBeUndefined();
    expect(v.y).not.toBeUndefined();
    expect(v.x).toEqual(1);
    expect(v.y).toEqual(0);
  });
});

describe("Vec2.length", () => {
  it("defaults to 0", () => {
    var v = new Vec2();
    expect(v.length()).toEqual(0);
  });
  it("works with negative coords", () => {
    var v = new Vec2(-4, -3);
    expect(v.length()).toBeGreaterThan(0);
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
});

describe("Vec2.toString", () => {
  it('works', () => {
    var source = new Vec2(4, 3);
    var debugString = source.toString();
    expect(debugString).toEqual("<4, 3>");
  });
  it('works with negative coordinates', () => {
    var source = new Vec2(-4, 3);
    var debugString = source.toString();
    expect(debugString).toEqual("<-4, 3>");
  });
  it('works with 0, 0', () => {
    var source = new Vec2();
    var debugString = source.toString();
    expect(debugString).toEqual("<0, 0>");
  });
});
