import React from "react";
import { Svg, Path, G, Circle } from "react-native-svg";

export const DelPhotoIcon = () => {
  return (
    <Svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="add">
        <Circle
          id="Ellipse 12"
          cx="18.4999"
          cy="18.5"
          r="12"
          transform="rotate(-45 18.4999 18.5)"
          fill="white"
          stroke="#E8E8E8"
        />
        <Path
          id="Union"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z"
          fill="#BDBDBD"
        />
      </G>
    </Svg>
  );
};

export const AddPhotoIcon = ({ width = 37, height = 37 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="add">
        <Circle
          id="Ellipse 12"
          cx="18.4999"
          cy="18.5"
          r="12"
          transform="rotate(-45 18.4999 18.5)"
          fill="white"
          stroke="#FF6C00"
        />
        <Path
          id="Union"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z"
          fill="#FF6C00"
          transform="rotate(45, 18.5, 18.5)"
        />
      </G>
    </Svg>
  );
};

export const ExitIcon = ({ width = 24, height = 24 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17 16L21 12L17 8"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21 12H9"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const UserIcon = ({ width = 40, height = 40 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M28 29v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2"
        stroke="#212121"
        stroke-opacity=".8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        clip-rule="evenodd"
        d="M20 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="#212121"
        stroke-opacity=".8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const GridIcon = ({
  width = 40,
  height = 40,
  fill = "#fff",
  stroke = "#212121",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path fill={fill} d="M8 8h24v24H8z" />
      <Path
        clip-rule="evenodd"
        d="M11 11h7v7h-7v-7ZM22 11h7v7h-7v-7ZM22 22h7v7h-7v-7ZM11 22h7v7h-7v-7Z"
        stroke={stroke}
        stroke-opacity=".8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const AddIcon = ({ width = 40, height = 40 }) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.5 13.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
        fill="#212121"
        fill-opacity=".8"
      />
    </Svg>
  );
};
