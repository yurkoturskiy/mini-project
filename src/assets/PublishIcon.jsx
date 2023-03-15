import * as React from "react";

const PublishIcon = (props) => (
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
        d="M9.667 26.332v-2h12.667v2H9.667Zm5.334-5.333V9.61l-3.813 3.793-1.392-1.393L16 5.806l6.205 6.205-1.392 1.393L17 9.61V21h-2Z"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={10.718}
        y1={8.047}
        x2={26.451}
        y2={17.756}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#26CBFF" />
        <stop offset={1} stopColor="#1E68F8" />
      </linearGradient>
    </defs>
  </svg>
);

export default PublishIcon;
