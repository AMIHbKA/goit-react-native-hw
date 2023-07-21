import React from "react";
import { Svg, Path, G, Circle, Rect, Defs, ClipPath } from "react-native-svg";

export const DelPhotoIcon = ({ size = 37 }) => {
  return (
    <Svg
      width={size}
      height={size}
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

export const AddPhotoIcon = ({ size = 37 }) => {
  return (
    <Svg
      width={size}
      height={size}
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

export const ExitIcon = ({ size = 24, stroke = "#BDBDBD" }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17 16L21 12L17 8"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21 12H9"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const UserIcon = ({ size = 24, stroke = "#212121" }) => {
  return (
    <Svg
      width={size}
      height={size}
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
  size = 24,

  fill = "#fff",
  stroke = "#212121",
}) => {
  return (
    <Svg
      width={size}
      height={size}
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

export const AddIcon = ({ size = 40, fill = "#212121" }) => {
  return (
    <Svg
      width={size}
      height={size}
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

export const BackIcon = ({ size = 24, stroke = "#212121" }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20 12H4"
        stroke={stroke}
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 18L4 12L10 6"
        stroke={stroke}
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const CameraIcon = ({
  size = 24,
  fillPrimary = "#BDBDBD",
  fillSecondary = "#fff",
}) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#a)" fill={fillPrimary}>
        <Path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
        <Path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9Zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={fillSecondary} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const TrashIcon = ({
  size = 24,
  fill = "#BDBDBD",
  stroke = "#BDBDBD",
}) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3 6h18"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.5 6a.5.5 0 0 0-1 0h1Zm-14 0a.5.5 0 0 0-1 0h1Zm2 0a.5.5 0 0 0 1 0h-1Zm8 0a.5.5 0 0 0 1 0h-1Zm3 0v14h1V6h-1Zm0 14a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1ZM17 21.5H7v1h10v-1Zm-10 0A1.5 1.5 0 0 1 5.5 20h-1A2.5 2.5 0 0 0 7 22.5v-1ZM5.5 20V6h-1v14h1Zm3-14V4h-1v2h1Zm0-2A1.5 1.5 0 0 1 10 2.5v-1A2.5 2.5 0 0 0 7.5 4h1ZM10 2.5h4v-1h-4v1Zm4 0A1.5 1.5 0 0 1 15.5 4h1A2.5 2.5 0 0 0 14 1.5v1ZM15.5 4v2h1V4h-1Z"
        fill={fill}
      />
      <Path
        d="M10 11v6M14 11v6"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const MapPinIcon = ({ size = 24, stroke = "#BDBDBD" }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const ExpandIcon = ({ size = 32, fill = "#BDBDBD" }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M14.075 17.789a1.225 1.225 0 0 1 0 1.732l-9.89 9.891H9.89c.678 0 1.225.549 1.225 1.227s-.547 1.225-1.225 1.225H1.226A1.226 1.226 0 0 1 0 30.639v-8.666a1.226 1.226 0 0 1 2.453 0v5.709l9.89-9.893a1.226 1.226 0 0 1 1.732 0zM30.774.137H22.11a1.226 1.226 0 1 0 0 2.452h5.705L17.79 12.615a1.223 1.223 0 0 0 0 1.732 1.223 1.223 0 0 0 1.732 0L29.548 4.32v5.707a1.226 1.226 0 0 0 2.453 0V1.361A1.226 1.226 0 0 0 30.774.137z" />
    </Svg>
  );
};

export const CollapseIcon = ({ size = 32, fill = "#BDBDBD" }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M14.436 18.655v8.665a1.226 1.226 0 0 1-2.454 0v-5.707l-9.891 9.891a1.221 1.221 0 0 1-1.732 0 1.225 1.225 0 0 1 0-1.733l9.891-9.892H4.543a1.225 1.225 0 1 1 0-2.451h8.666a1.23 1.23 0 0 1 1.227 1.227zM31.641.495a1.223 1.223 0 0 0-1.732 0L19.883 10.522V4.815a1.225 1.225 0 0 0-2.452 0v8.665c0 .677.549 1.226 1.225 1.226h8.664a1.226 1.226 0 1 0 0-2.451h-5.705L31.641 2.229a1.228 1.228 0 0 0 0-1.734z" />
    </Svg>
  );
};
