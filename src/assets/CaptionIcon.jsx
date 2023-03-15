import * as React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.308 19.5c-.505 0-.933-.175-1.283-.525a1.745 1.745 0 0 1-.525-1.283V6.308c0-.505.175-.933.525-1.283.35-.35.778-.525 1.283-.525h13.384c.505 0 .933.175 1.283.525.35.35.525.778.525 1.283v11.384c0 .505-.175.933-.525 1.283-.35.35-.778.525-1.283.525H5.308Zm0-1.5h13.384a.294.294 0 0 0 .212-.096.294.294 0 0 0 .096-.212V6.308a.294.294 0 0 0-.096-.212.294.294 0 0 0-.212-.096H5.308a.294.294 0 0 0-.212.096.294.294 0 0 0-.096.212v11.384c0 .077.032.148.096.212a.294.294 0 0 0 .212.096Zm2.077-3.154H10c.29 0 .535-.1.736-.302.202-.201.303-.447.303-.736v-.693H9.846v.385a.147.147 0 0 1-.048.106.147.147 0 0 1-.106.048h-2a.147.147 0 0 1-.105-.048.147.147 0 0 1-.049-.106v-3c0-.039.016-.074.049-.106a.147.147 0 0 1 .105-.048h2c.039 0 .074.016.106.048a.147.147 0 0 1 .048.106v.404h1.193v-.712c0-.29-.101-.535-.303-.736A1.002 1.002 0 0 0 10 9.154H7.385c-.29 0-.536.1-.737.302a1.002 1.002 0 0 0-.302.736v3.616c0 .29.1.535.302.736.201.201.447.302.737.302Zm6.615 0h2.615c.29 0 .536-.1.737-.302.201-.201.302-.447.302-.736v-.693h-1.192v.385a.147.147 0 0 1-.049.106.147.147 0 0 1-.105.048h-2a.147.147 0 0 1-.106-.048.147.147 0 0 1-.048-.106v-3c0-.039.016-.074.048-.106a.147.147 0 0 1 .106-.048h2c.038 0 .073.016.105.048a.147.147 0 0 1 .049.106v.404h1.192v-.712c0-.29-.1-.535-.302-.736a1.002 1.002 0 0 0-.737-.302H14c-.29 0-.535.1-.737.302a1.002 1.002 0 0 0-.302.736v3.616c0 .29.101.535.302.736.202.201.447.302.737.302Z" />
  </svg>
);

export default SvgComponent;
