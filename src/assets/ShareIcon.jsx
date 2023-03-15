import * as React from "react";

const ShareIcon = (props) => (
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
      x={2}
      y={2}
      width={28}
      height={28}
    >
      <path fill="#D9D9D9" d="M2 2h28v28H2z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M13.814 16.583a1.04 1.04 0 0 1-.845-.407.929.929 0 0 1-.19-.892l.44-2.275c.126-.674.454-1.22.985-1.635a2.823 2.823 0 0 1 1.786-.624c.674 0 1.277.208 1.808.624.531.415.86.96.985 1.635l.44 2.275c.075.347.006.65-.207.91a1.02 1.02 0 0 1-.827.39h-4.375Zm.554-1.516h3.266l-.35-1.75a1.228 1.228 0 0 0-.453-.759 1.298 1.298 0 0 0-.831-.291c-.31 0-.587.097-.83.291a1.23 1.23 0 0 0-.452.759l-.35 1.75Zm-8.132 2.748c-.363.02-.674-.054-.933-.222a1.198 1.198 0 0 1-.515-.736 1.083 1.083 0 0 1-.024-.449c.023-.158.066-.296.13-.412 0 0-.01-.027-.03-.072-.05-.059-.127-.255-.23-.59a.966.966 0 0 1 .075-.528c.073-.161.175-.308.308-.44.007 0 .023-.025.047-.076.033-.276.16-.523.377-.739a1.05 1.05 0 0 1 .762-.324c.075 0 .237.041.485.123l.067-.018a.937.937 0 0 1 .68-.287c.167 0 .321.029.464.085a.721.721 0 0 1 .338.27c.017 0 .03.005.038.013.008.01.02.014.037.014.204.019.386.09.546.214.16.124.288.287.386.489a.895.895 0 0 1 .047.327.824.824 0 0 1-.068.288c0 .01.01.04.03.092.101.105.183.226.246.36.063.136.094.28.094.433 0 .016-.037.171-.112.464-.012.024-.012.06 0 .106.008.022.023.155.047.399 0 .334-.146.62-.438.858a1.547 1.547 0 0 1-1.006.358H6.236Zm18.604.034c-.499 0-.92-.174-1.266-.522a1.716 1.716 0 0 1-.517-1.253c0-.177.03-.343.087-.497.058-.154.127-.304.207-.45l-.817-.706a.391.391 0 0 1-.088-.454c.07-.17.214-.256.433-.256h1.944c.486 0 .901.173 1.245.517.344.345.516.759.516 1.242v.44c0 .529-.166.984-.497 1.366a1.582 1.582 0 0 1-1.247.573ZM2.584 22.753v-1.335c0-.963.456-1.677 1.366-2.14.91-.464 1.996-.696 3.254-.696.277 0 .553.017.83.05.277.033.554.078.83.136-.297.306-.522.696-.675 1.172a4.329 4.329 0 0 0-.229 1.313v1.5H2.584Zm7 0V21.31c0-1.007.54-1.813 1.619-2.418 1.079-.605 2.68-.908 4.801-.908 2.12 0 3.72.302 4.797.905 1.078.604 1.617 1.406 1.617 2.407v1.458H9.584Zm15.225-4.17c1.255 0 2.336.231 3.245.695.91.463 1.364 1.177 1.364 2.14v1.335h-5.376v-1.5c0-.4-.071-.837-.214-1.313a2.593 2.593 0 0 0-.701-1.172 9.39 9.39 0 0 1 .831-.136c.278-.033.562-.05.851-.05ZM16 19.5c-1.348 0-2.38.127-3.095.38a4.14 4.14 0 0 0-1.8 1.233v.123h9.784v-.123a4.28 4.28 0 0 0-1.804-1.233c-.706-.253-1.734-.38-3.084-.38Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default ShareIcon;