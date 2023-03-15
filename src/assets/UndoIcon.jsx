import * as React from "react";

const SvgComponent = (props) => (
  <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={5}
      y={5}
      width={30}
      height={30}
    >
      <path fill="#D9D9D9" d="M5.875 5.875h28.2v28.2h-28.2z" />
    </mask>
    <g mask="url(#a)">
      <path d="M14.337 27.906v-1.762h8.049c1.316 0 2.458-.418 3.425-1.254.967-.836 1.451-1.887 1.451-3.152 0-1.266-.484-2.317-1.45-3.153-.968-.836-2.11-1.254-3.426-1.254h-8.103l3.348 3.35-1.238 1.237-5.468-5.468 5.468-5.468 1.238 1.238-3.348 3.349h8.103c1.809 0 3.368.588 4.676 1.766 1.308 1.177 1.962 2.645 1.962 4.403 0 1.758-.654 3.225-1.962 4.402-1.308 1.178-2.867 1.766-4.676 1.766h-8.049Z" />
    </g>
  </svg>
);

export default SvgComponent;
