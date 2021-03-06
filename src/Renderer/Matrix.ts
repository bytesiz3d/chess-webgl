export type Ortho_Tuple = {
  left: number;
  right: number;
  top: number;
  bottom: number;
  near: number;
  far: number;
};

export type Translate_Tuple = {
  x: number,
  y: number
};

export class Matrix {
  static identity: Float32Array = new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
  ]);

  static scale(factor: number, mat: Float32Array = Matrix.identity) {
    const scaled = mat.map((x: number) => factor * x);
    scaled[3] = scaled[7] = scaled[11] = 0;
    scaled[15] = 1;
    return scaled;
  }

  static orthographic(tuple: Ortho_Tuple): Float32Array {
    let { left, right, top, bottom, near, far } = tuple;

    // if (aspect_ratio > 1) {
    //   left *= aspect_ratio;
    //   right *= aspect_ratio;
    // } else {
    //   bottom *= 1 / aspect_ratio;
    //   top *= 1 / aspect_ratio;
    // }

    return new Float32Array([
      2 / (right - left), 0, 0, (left + right) / (left - right),
      0, 2 / (top - bottom), 0, (bottom + top) / (bottom - top),
      0, 0, 2 / (near - far), (near + far) / (near - far),
      0, 0, 0, 1,
    ]);
  }

  static translate(t: Translate_Tuple, mat: Float32Array = Matrix.identity): Float32Array {
    let translated = mat;
    translated[3] = t.x;
    translated[7] = t.y;
    return translated;
  }

  static rotate(theta: number, axis: number = 3): Float32Array {
    let c = Math.cos(theta);
    let s = Math.sin(theta);

    // Rotation matrix
    switch (axis) {
      case 0:
        return new Float32Array([
          1, 0, 0, 0,
          0, c, -s, 0,
          0, s, s, 0,
          0, 0, 0, 1,
        ]);

      case 1:
        return new Float32Array([
          c, 0, s, 0,
          0, 1, 0, 0,
          -s, 0, c, 0,
          0, 0, 0, 1,
        ]);

      case 2:
        return new Float32Array([
          c, -s, 0, 0,
          s, c, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1,
        ]);

      default:
        return this.identity;
    }
  }
}