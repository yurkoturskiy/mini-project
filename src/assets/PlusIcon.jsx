import * as React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 25v-8H7v-2h8V7h1.999v8h8v2h-8v8h-2Z" />
  </svg>
);

export default SvgComponent;
