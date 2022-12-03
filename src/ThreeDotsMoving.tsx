import React, { SVGProps } from "react";

export default function ThreeDotsMoving({
  width = 24,
  height = 24,
  dur = "0.5s",
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
      <circle cx="4" cy="12" r="0">
        <animate
          begin="0;h.end"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="0;3"
          fill="freeze"
        />
        <animate
          begin="b.end"
          attributeName="cx"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="4;12"
          fill="freeze"
        />
        <animate
          begin="d.end"
          attributeName="cx"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="12;20"
          fill="freeze"
        />
        <animate
          id="g"
          begin="f.end"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="3;0"
          fill="freeze"
        />
        <animate id="h" begin="g.end" attributeName="cx" dur="0.001s" values="20;4" fill="freeze" />
      </circle>
      <circle cx="4" cy="12" r="3">
        <animate
          begin="0;h.end"
          attributeName="cx"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="4;12"
          fill="freeze"
        />
        <animate
          begin="b.end"
          attributeName="cx"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="12;20"
          fill="freeze"
        />
        <animate
          id="e"
          begin="d.end"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="3;0"
          fill="freeze"
        />
        <animate id="f" begin="e.end" attributeName="cx" dur="0.001s" values="20;4" fill="freeze" />
        <animate
          begin="f.end"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="0;3"
          fill="freeze"
        />
      </circle>
      <circle cx="12" cy="12" r="3">
        <animate
          begin="0;h.end"
          attributeName="cx"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="12;20"
          fill="freeze"
        />
        <animate
          id="c"
          begin="b.end"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="3;0"
          fill="freeze"
        />
        <animate id="d" begin="c.end" attributeName="cx" dur="0.001s" values="20;4" fill="freeze" />
        <animate
          begin="d.end"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="0;3"
          fill="freeze"
        />
        <animate
          begin="f.end"
          attributeName="cx"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="4;12"
          fill="freeze"
        />
      </circle>
      <circle cx="20" cy="12" r="3">
        <animate
          id="a"
          begin="0;h.end"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="3;0"
          fill="freeze"
        />
        <animate id="b" begin="a.end" attributeName="cx" dur="0.001s" values="20;4" fill="freeze" />
        <animate
          begin="b.end"
          attributeName="r"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="0;3"
          fill="freeze"
        />
        <animate
          id="e"
          begin="d.end"
          attributeName="cx"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="4;12"
          fill="freeze"
        />
        <animate
          begin="f.end"
          attributeName="cx"
          calcMode="spline"
          dur={dur}
          keySplines=".36,.6,.31,1"
          values="12;20"
          fill="freeze"
        />
      </circle>
    </svg>
  );
}