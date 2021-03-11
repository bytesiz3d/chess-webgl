#version 300 es
layout(location=0) in vec2 position;
layout(location=1) in vec3 color;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main() {
  vec4 pos = vec4(position, 0.0f, 1.0f);
  gl_Position = projection * view * model * pos;
}