export interface Texture_Image {
  element: TexImageSource;
  x: number;
  y: number;
  width: number;
  height: number;
}

export class Texture {
  texture: WebGLTexture;
  gl: WebGL2RenderingContext;

  private static uploadTextureImage(gl: WebGL2RenderingContext, image: Texture_Image) {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext('2d');
    const img = image.element as HTMLImageElement;

    ctx.drawImage(img, image.x, image.y, image.width, image.height, 0, 0, image.width, image.height);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
      image.width, image.height, 0,
      gl.RGBA, gl.UNSIGNED_BYTE, canvas);
  }

  // TODO(Abdelrahman) Proper texture extraction
  constructor(gl: WebGL2RenderingContext, image?: Texture_Image) {
    this.gl = gl;
    this.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.texture);

    if (image) {
      Texture.uploadTextureImage(gl, image);
    } else {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
        new Uint8Array([0, 0, 255, 255]));
    }
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  }

  bind(slot: number, sampler_location: WebGLUniformLocation) {
    this.gl.activeTexture(this.gl.TEXTURE0 + slot);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);

    this.gl.uniform1i(sampler_location, slot);
  }
}