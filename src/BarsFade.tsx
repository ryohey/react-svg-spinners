import React, { SVGProps } from "react";

export default function BarsFade({
  width = 24,
  height = 24,
  color,
  dur = "0.75s",
}: SVGProps<SVGElement>): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="4" width="6" height="14" opacity="1">
        <animate
          id="a"
          begin="0;b.end-0.25s"
          attributeName="opacity"
          dur={dur}
          values="1;.2"
          fill="freeze"
        />
      </rect>
      <rect x="9" y="4" width="6" height="14" opacity=".4">
        <animate
          begin="a.begin+0.15s"
          attributeName="opacity"
          dur={dur}
          values="1;.2"
          fill="freeze"
        />
      </rect>
      <rect x="17" y="4" width="6" height="14" opacity=".3">
        <animate
          id="b"
          begin="a.begin+0.3s"
          attributeName="opacity"
          dur={dur}
          values="1;.2"
          fill="freeze"
        />
      </rect>
    </svg>
  );
}
