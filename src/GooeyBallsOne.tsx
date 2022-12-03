import React, { SVGProps } from "react";

export default function GooeyBallsOne({
  width = 24,
  height = 24,
  dur = "0.75s",
  color,
}: SVGProps<SVGElement>): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="g">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="b" />
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
        <circle cx="4" cy="12" r="3">
          <animate
            attributeName="cx"
            calcMode="spline"
            dur={dur}
            values="4;9;4"
            keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            calcMode="spline"
            dur={dur}
            values="3;8;3"
            keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="15" cy="12" r="8">
          <animate
            attributeName="cx"
            calcMode="spline"
            dur={dur}
            values="15;20;15"
            keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            calcMode="spline"
            dur={dur}
            values="8;3;8"
            keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}
