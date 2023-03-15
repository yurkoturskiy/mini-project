import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={40}
    height={40}
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
      x={6}
      y={5}
      width={30}
      height={30}
    >
      <path fill="#D9D9D9" d="M6.825 5.875h28.2v28.2h-28.2z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M18.514 27.906c-1.81 0-3.368-.588-4.676-1.766-1.308-1.177-1.963-2.645-1.963-4.403 0-1.757.655-3.225 1.963-4.402 1.308-1.178 2.867-1.766 4.676-1.766h8.103l-3.349-3.35 1.239-1.237 5.468 5.468-5.468 5.468-1.239-1.238 3.35-3.349h-8.104c-1.316 0-2.458.418-3.425 1.254-.968.836-1.451 1.887-1.451 3.152 0 1.266.483 2.317 1.45 3.153.968.836 2.11 1.254 3.426 1.254h8.049v1.762h-8.049Z"
        fill="#494949"
      />
    </g>
  </svg>
);

export default SvgComponent;
