function Vec2(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Vec2.prototype.length = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

Vec2.prototype.normalized = function() {
  var resultX = this.x || 0;
  var resultY = this.y || 0;

  var magnitude = this.length();
  if(magnitude > 0) {
    resultX /= magnitude;
    resultY /= magnitude;
  }

  return new Vec2(resultX, resultY);
}

Vec2.prototype.toString = function() {
  return "<" + this.x + ", " + this.y + ">";
}
