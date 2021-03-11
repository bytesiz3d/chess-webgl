const Square = (gl, shader_program) => {
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  const side = 1;
  const position = {
    location: gl.getAttribLocation(shader_program, 'position'),
    buffer: gl.createBuffer(),
    data: new Float32Array([
      -side / 2, -side / 2,
      side / 2, -side / 2,
      side / 2, side / 2,
      -side / 2, side / 2
    ]),
  };
  gl.bindBuffer(gl.ARRAY_BUFFER, position.buffer);
  gl.bufferData(gl.ARRAY_BUFFER, position.data, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(position.location);
  gl.vertexAttribPointer(position.location, 2, gl.FLOAT, false, 0, 0);

  const elements = {
    buffer: gl.createBuffer(),
    data: new Int32Array([
      0, 1, 2,
      2, 3, 0
    ]),
  };
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elements.buffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, elements.data, gl.STATIC_DRAW);

  return { vao, count: elements.data.length, type: gl.UNSIGNED_INT };
};