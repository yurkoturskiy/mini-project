import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={32}
      height={32}
    >
      <path fill="#D9D9D9" d="M0 0h32v32H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M18.718 26.813v-2.067c1.922-.612 3.472-1.723 4.647-3.333 1.175-1.61 1.763-3.426 1.763-5.446 0-2.02-.588-3.836-1.763-5.447-1.175-1.61-2.724-2.72-4.647-3.333V5.12c2.482.665 4.504 1.998 6.066 3.998 1.562 2 2.344 4.283 2.344 6.849 0 2.565-.782 4.848-2.344 6.848-1.562 2-3.584 3.333-6.066 3.998ZM4.87 19.333v-6.666H9.82l5.718-5.718V25.05L9.82 19.333H4.871Zm13.847 1.539v-9.81a5.132 5.132 0 0 1 2.084 2.065c.49.888.736 1.846.736 2.873a5.64 5.64 0 0 1-.742 2.83 5.239 5.239 0 0 1-2.078 2.042Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgComponent;
