import React, { SVGProps } from "react";

export default function BouncingBall({
  width = 24,
  height = 24,
}: SVGProps<SVGElement>): JSX.Element {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="5" rx="4" ry="4">
        <animate
          id="f"
          begin="0;r.end"
          attributeName="cy"
          calcMode="spline"
          dur="0.375s"
          values="5;20"
          keySplines=".33,0,.66,.33"
          fill="freeze"
        />
        <animate
          id="b"
          begin="f.end"
          attributeName="rx"
          calcMode="spline"
          dur="0.05s"
          values="4;4.8;4"
          keySplines=".33,0,.66,.33;.33,.66,.66,1"
        />
        <animate
          begin="f.end"
          attributeName="ry"
          calcMode="spline"
          dur="0.05s"
          values="4;3;4"
          keySplines=".33,0,.66,.33;.33,.66,.66,1"
        />
        <animate
          begin="f.end"
          attributeName="cy"
          calcMode="spline"
          dur="0.05s"
          values="20;20.5;20"
          keySplines=".33,0,.66,.33;.33,.66,.66,1"
        />
        <animate
          id="r"
          begin="b.end"
          attributeName="cy"
          calcMode="spline"
          dur="0.375s"
          values="20;5"
          keySplines=".33,.66,.66,1"
        />
      </ellipse>
    </svg>
  );
}
