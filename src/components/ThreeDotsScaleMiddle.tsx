import React, { SVGProps } from "react";

export default function ThreeDotBounce({
  width = 24,
  height = 24,
}: SVGProps<SVGElement>): JSX.Element {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="12" r="1.5">
        <animate attributeName="r" dur="0.75s" values="1.5;3;1.5" repeatCount="indefinite" />
      </circle>
      <circle cx="12" cy="12" r="3">
        <animate attributeName="r" dur="0.75s" values="3;1.5;3" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="12" r="1.5">
        <animate attributeName="r" dur="0.75s" values="1.5;3;1.5" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
