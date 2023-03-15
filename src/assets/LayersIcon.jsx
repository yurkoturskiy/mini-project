import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.001 26.528 5.078 18.04l1.636-1.257 9.287 7.19 9.287-7.19 1.636 1.257-10.923 8.487Zm0-5.913L5.078 12.128 16.001 3.64l10.923 8.487-10.923 8.487Zm0-2.554 7.667-5.933L16 6.194l-7.667 5.934 7.667 5.933Z" />
  </svg>
);

export default SvgComponent;
