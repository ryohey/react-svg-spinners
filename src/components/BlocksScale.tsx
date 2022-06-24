import React, { SVGProps } from "react";

export default function BlocksScale({
  width = 24,
  height = 24,
}: SVGProps<SVGElement>): JSX.Element {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" rx="1" width="9" height="9">
        <animate
          id="a"
          begin="0;b.end+0.15s"
          attributeName="x"
          dur="0.6s"
          values="1.5;.5;1.5"
          keyTimes="0;.2;1"
        />
        <animate
          begin="0;b.end+0.15s"
          attributeName="y"
          dur="0.6s"
          values="1.5;.5;1.5"
          keyTimes="0;.2;1"
        />
        <animate
          begin="0;b.end+0.15s"
          attributeName="width"
          dur="0.6s"
          values="9;11;9"
          keyTimes="0;.2;1"
        />
        <animate
          begin="0;b.end+0.15s"
          attributeName="height"
          dur="0.6s"
          values="9;11;9"
          keyTimes="0;.2;1"
        />
      </rect>
      <rect x="13.5" y="1.5" rx="1" width="9" height="9">
        <animate
          begin="a.begin+0.15s"
          attributeName="x"
          dur="0.6s"
          values="13.5;12.5;13.5"
          keyTimes="0;.2;1"
        />
        <animate
          begin="a.begin+0.15s"
          attributeName="y"
          dur="0.6s"
          values="1.5;.5;1.5"
          keyTimes="0;.2;1"
        />
        <animate
          begin="a.begin+0.15s"
          attributeName="width"
          dur="0.6s"
          values="9;11;9"
          keyTimes="0;.2;1"
        />
        <animate
          begin="a.begin+0.15s"
          attributeName="height"
          dur="0.6s"
          values="9;11;9"
          keyTimes="0;.2;1"
        />
      </rect>
      <rect x="13.5" y="13.5" rx="1" width="9" height="9">
        <animate
          begin="a.begin+0.3s"
          attributeName="x"
          dur="0.6s"
          values="13.5;12.5;13.5"
          keyTimes="0;.2;1"
        />
        <animate
          begin="a.begin+0.3s"
          attributeName="y"
          dur="0.6s"
          values="13.5;12.5;13.5"
          keyTimes="0;.2;1"
        />
        <animate
          begin="a.begin+0.3s"
          attributeName="width"
          dur="0.6s"
          values="9;11;9"
          keyTimes="0;.2;1"
        />
        <animate
          begin="a.begin+0.3s"
          attributeName="height"
          dur="0.6s"
          values="9;11;9"
          keyTimes="0;.2;1"
        />
      </rect>
      <rect x="1.5" y="13.5" rx="1" width="9" height="9">
        <animate
          id="b"
          begin="a.begin+0.45s"
          attributeName="x"
          dur="0.6s"
          values="1.5;.5;1.5"
          keyTimes="0;.2;1"
        />
        <animate
          begin="a.begin+0.45s"
          attributeName="y"
          dur="0.6s"
          values="13.5;12.5;13.5"
          keyTimes="0;.2;1"
        />
        <animate
          begin="a.begin+0.45s"
          attributeName="width"
          dur="0.6s"
          values="9;11;9"
          keyTimes="0;.2;1"
        />
        <animate
          begin="a.begin+0.45s"
          attributeName="height"
          dur="0.6s"
          values="9;11;9"
          keyTimes="0;.2;1"
        />
      </rect>
    </svg>
  );
}
