import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'index.js',
  output: [
    {
      dir: 'dist/cjs/index.js',
      format: 'cjs',
    },
    {
      dir: 'dist/es/index.js',
      format: 'es',
    },
  ],
  plugins: [json(), commonjs()],
};
