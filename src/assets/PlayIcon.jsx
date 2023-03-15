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
      <path d="M9.676 26.238V5.761L25.761 16 9.676 26.238Z" fill="#fff" />
    </g>
  </svg>
);

export default SvgComponent;
