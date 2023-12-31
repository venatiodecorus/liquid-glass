#include "../shaders/lygia/color/palette/water.glsl"
// #include "../shaders/lygia/lighting/material/emissive.glsl"

varying vec2 vUv;

void main() {
    gl_FragColor = vec4(water(vUv.y), 1.0);
}
