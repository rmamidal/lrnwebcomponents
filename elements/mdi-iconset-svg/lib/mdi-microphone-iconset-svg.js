/**
 * Material design: [Icons](https://material.io/guidelines/style/icons.html)
 * `mdi-microphone-iconset-svg`
 * @customElement mdi-microphone-iconset-svg is a iconset for the Material Design Icons collection with the "microphone" tag
 *
 * Example:
 *   <iron-icon icon="mdi-microphone:microphone-outline"></iron-icon>
 *
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`
  <iron-iconset-svg name="mdi-microphone" size="24">
    <svg>
      <g id="microphone">
        <path
          d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"
        ></path>
      </g>

      <g id="microphone-off">
        <path
          d="M19,11C19,12.19 18.66,13.3 18.1,14.28L16.87,13.05C17.14,12.43 17.3,11.74 17.3,11H19M15,11.16L9,5.18V5A3,3 0 0,1 12,2A3,3 0 0,1 15,5V11L15,11.16M4.27,3L21,19.73L19.73,21L15.54,16.81C14.77,17.27 13.91,17.58 13,17.72V21H11V17.72C7.72,17.23 5,14.41 5,11H6.7C6.7,14 9.24,16.1 12,16.1C12.81,16.1 13.6,15.91 14.31,15.58L12.65,13.92L12,14A3,3 0 0,1 9,11V10.28L3,4.27L4.27,3Z"
        ></path>
      </g>

      <g id="microphone-outline">
        <path
          d="M17.3,11C17.3,14 14.76,16.1 12,16.1C9.24,16.1 6.7,14 6.7,11H5C5,14.41 7.72,17.23 11,17.72V21H13V17.72C16.28,17.23 19,14.41 19,11M10.8,4.9C10.8,4.24 11.34,3.7 12,3.7C12.66,3.7 13.2,4.24 13.2,4.9L13.19,11.1C13.19,11.76 12.66,12.3 12,12.3C11.34,12.3 10.8,11.76 10.8,11.1M12,14A3,3 0 0,0 15,11V5A3,3 0 0,0 12,2A3,3 0 0,0 9,5V11A3,3 0 0,0 12,14Z"
        ></path>
      </g>

      <g id="microphone-settings">
        <path
          d="M19,10H17.3C17.3,13 14.76,15.1 12,15.1C9.24,15.1 6.7,13 6.7,10H5C5,13.41 7.72,16.23 11,16.72V20H13V16.72C16.28,16.23 19,13.41 19,10M15,24H17V22H15M11,24H13V22H11M12,13A3,3 0 0,0 15,10V4A3,3 0 0,0 12,1A3,3 0 0,0 9,4V10A3,3 0 0,0 12,13M7,24H9V22H7V24Z"
        ></path>
      </g>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);
