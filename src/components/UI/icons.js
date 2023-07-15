import React from "react";
import { Svg, Path, G, Circle, Rect } from "react-native-svg";

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

export const UserIcon = ({ width = 24, height = 24, stroke = "#212121" }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
        stroke={stroke}
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke={stroke}
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const GridIcon = ({
  width = 24,
  height = 24,
  fill = "#fff",
  stroke = "#212121",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="24" height="24" fill={fill} />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 3H10V10H3V3Z"
        stroke={stroke}
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 3H21V10H14V3Z"
        stroke={stroke}
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 14H21V21H14V14Z"
        stroke={stroke}
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 14H10V21H3V14Z"
        stroke={stroke}
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const AddIcon = ({ width = 40, height = 40, fill = "#212121" }) => {
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
        fill={fill}
        fill-opacity=".8"
      />
    </Svg>
  );
};
