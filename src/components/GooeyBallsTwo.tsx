import React, { SVGProps } from "react";

export default function GooeyBallsTwo({
  width = 24,
  height = 24,
}: SVGProps<SVGElement>): JSX.Element {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="g">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="b" />
          <feColorMatrix
            in="b"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
            result="g"
          />
          <feBlend in="SourceGraphic" in2="g" />
        </filter>
      </defs>
      <g filter="url(#g)">
        <circle cx="5" cy="12" r="4">
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2s"
            values="5;8;5"
            keySplines=".36,.62,.43,.99;.79,0,.58,.57"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="19" cy="12" r="4">
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2s"
            values="19;16;19"
            keySplines=".36,.62,.43,.99;.79,0,.58,.57"
            repeatCount="indefinite"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}
