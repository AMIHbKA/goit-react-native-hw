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

export const CollapseIcon = ({ size = 24, fill = "#BDBDBD" }) => {
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

export const CameraOffIcon = ({ size = 24, fill = "#BDBDBD" }) => {
  return (
    <Svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
    >
      <G fill="none" fill-rule="evenodd">
        <Path d="M0 0h56v56H0z" />
        <Path
          d="M6.44 6.44a1.5 1.5 0 0 1 2.12 0l42 42a1.5 1.5 0 0 1-2.12 2.12L44.877 47l-30.164-.002c-4.805 0-8.575-3.752-8.71-8.146L6 38.606V21.698c0-4.057 2.046-7.128 5.328-8.087l.127-.035-5.016-5.015a1.5 1.5 0 0 1-.103-2.008Zm7.432 9.553-1.758.514c-1.84.568-3.03 2.31-3.11 4.91L9 21.697v16.908c0 2.786 2.372 5.27 5.485 5.387l.23.004L41.877 44l-9.022-9.022c-.114.08-.23.157-.348.23l-.287.172a8.5 8.5 0 0 1-11.36-11.994c.053-.082.113-.158.179-.226l-7.168-7.166ZM33.328 9c1.613 0 2.767.49 3.778 1.592l.177.201 1.377 1.711c.326.404 1.156.75 2.002.797l.195.006h1.647c4.326 0 7.383 3.289 7.497 8.111l.003.28v18.908a1.5 1.5 0 0 1-2.993.145l-.007-.145V21.698c0-3.292-1.724-5.284-4.29-5.387l-.21-.004h-1.647c-1.752 0-3.556-.71-4.532-1.92l-1.331-1.655-.11-.124c-.393-.43-.73-.583-1.373-.605L33.328 12H22.386c-.829 0-1.184.163-1.666.732a1.5 1.5 0 1 1-2.289-1.939c.995-1.175 2.115-1.73 3.675-1.788l.28-.005h10.942ZM23.197 25.318a5.5 5.5 0 0 0 7.533 7.458l-.049.026Zm5.118-4.47a1.5 1.5 0 0 1 1.83-1.075 8.445 8.445 0 0 1 2.363 1.02 8.532 8.532 0 0 1 3.093 3.399c.402.8.675 1.662.807 2.557a1.5 1.5 0 1 1-2.967.438 5.45 5.45 0 0 0-.521-1.65 5.532 5.532 0 0 0-3.012-2.697 5.445 5.445 0 0 0-.519-.163 1.5 1.5 0 0 1-1.074-1.83Z"
          fill={fill}
          fill-rule="nonzero"
        />
      </G>
    </Svg>

    // <Svg
    //   width={size}
    //   height={size}
    //   fill={fill}
    //   viewBox="0 0 24 24"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <Path fill="none" d="M0 0h24v24H0z" />
    //   <Path d="M19.586 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414L19.586 21zm-14-14H4v12h13.586l-2.18-2.18A5.5 5.5 0 0 1 7.68 9.094L5.586 7zm3.524 3.525a3.5 3.5 0 0 0 4.865 4.865L9.11 10.525zM22 17.785l-2-2V7h-3.828l-2-2H9.828l-.307.307-1.414-1.414L9 3h6l2 2h4a1 1 0 0 1 1 1v11.786zM11.263 7.05a5.5 5.5 0 0 1 6.188 6.188L15.113 10.9a3.515 3.515 0 0 0-1.512-1.512L11.263 7.05z" />
    // </Svg>
  );
};

export const ImageOffIcon = ({ size = 24, stroke = "#BDBDBD" }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="m3 3 18 18M15 8h.01M19.121 19.122A3 3 0 0 1 17 20H7a3 3 0 0 1-3-3V7c0-.833.34-1.587.888-2.131M8 4h9a3 3 0 0 1 3 3v9" />
      <Path d="m4 15 4-4c.928-.893 2.072-.893 3 0l5 5M16.32 12.34c.577-.059 1.162.162 1.68.66l2 2" />
    </Svg>
  );
};

export const CommentIcon = ({
  size = 24,
  fill = "none",
  stroke = "#BDBDBD",
}) => {
  return (
    <Svg
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
    >
      <Path
        clip-rule="evenodd"
        d="M3 11.5a8.38 8.38 0 0 0 .9 3.8 8.5 8.5 0 0 0 7.6 4.7 8.38 8.38 0 0 0 3.8-.9L21 21l-1.9-5.7a8.38 8.38 0 0 0 .9-3.8 8.5 8.5 0 0 0-4.7-7.6 8.38 8.38 0 0 0-3.8-.9H11a8.48 8.48 0 0 0-8 8v.5Z"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
