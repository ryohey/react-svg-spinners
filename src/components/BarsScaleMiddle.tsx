import React, { SVGProps } from "react";

export default function ThreeDotBounce({
  width = 24,
  height = 24,
}: SVGProps<SVGElement>): JSX.Element {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="6" width="2.8" height="12">
        <animate
          begin="a.begin+0.4s"
          attributeName="y"
          calcMode="spline"
          dur="0.6s"
          values="6;1;6"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
        />
        <animate
          begin="a.begin+0.4s"
          attributeName="height"
          calcMode="spline"
          dur="0.6s"
          values="12;22;12"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
        />
      </rect>
      <rect x="5.8" y="6" width="2.8" height="12">
        <animate
          begin="a.begin+0.2s"
          attributeName="y"
          calcMode="spline"
          dur="0.6s"
          values="6;1;6"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
        />
        <animate
          begin="a.begin+0.2s"
          attributeName="height"
          calcMode="spline"
          dur="0.6s"
          values="12;22;12"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
        />
      </rect>
      <rect x="10.6" y="6" width="2.8" height="12">
        <animate
          id="a"
          begin="0;b.end-0.1s"
          attributeName="y"
          calcMode="spline"
          dur="0.6s"
          values="6;1;6"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
        />
        <animate
          begin="0;b.end-0.1s"
          attributeName="height"
          calcMode="spline"
          dur="0.6s"
          values="12;22;12"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
        />
      </rect>
      <rect x="15.4" y="6" width="2.8" height="12">
        <animate
          begin="a.begin+0.2s"
          attributeName="y"
          calcMode="spline"
          dur="0.6s"
          values="6;1;6"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
        />
        <animate
          begin="a.begin+0.2s"
          attributeName="height"
          calcMode="spline"
          dur="0.6s"
          values="12;22;12"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
        />
      </rect>
      <rect x="20.2" y="6" width="2.8" height="12">
        <animate
          id="b"
          begin="a.begin+0.4s"
          attributeName="y"
          calcMode="spline"
          dur="0.6s"
          values="6;1;6"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
        />
        <animate
          begin="a.begin+0.4s"
          attributeName="height"
          calcMode="spline"
          dur="0.6s"
          values="12;22;12"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
        />
      </rect>
    </svg>
  );
}
