/**
 * Material design: [Icons](https://material.io/guidelines/style/icons.html)
 * `mdi-phone-iconset-svg`
 * @customElement mdi-phone-iconset-svg is a iconset for the Material Design Icons collection with the "phone" tag
 *
 * Example:
 *   <iron-icon icon="mdi-phone:phone-in-talk"></iron-icon>
 *
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`
  <iron-iconset-svg name="mdi-phone" size="24">
    <svg>
      <g id="phone">
        <path
          d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
        ></path>
      </g>

      <g id="phone-bluetooth">
        <path
          d="M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5M18,7.21L18.94,8.14L18,9.08M18,2.91L18.94,3.85L18,4.79M14.71,9.5L17,7.21V11H17.5L20.35,8.14L18.21,6L20.35,3.85L17.5,1H17V4.79L14.71,2.5L14,3.21L16.79,6L14,8.79L14.71,9.5Z"
        ></path>
      </g>

      <g id="phone-forward">
        <path
          d="M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5M18,11L23,6L18,1V4H14V8H18V11Z"
        ></path>
      </g>

      <g id="phone-hangup">
        <path
          d="M12,9C10.4,9 8.85,9.25 7.4,9.72V12.82C7.4,13.22 7.17,13.56 6.84,13.72C5.86,14.21 4.97,14.84 4.17,15.57C4,15.75 3.75,15.86 3.5,15.86C3.2,15.86 2.95,15.74 2.77,15.56L0.29,13.08C0.11,12.9 0,12.65 0,12.38C0,12.1 0.11,11.85 0.29,11.67C3.34,8.77 7.46,7 12,7C16.54,7 20.66,8.77 23.71,11.67C23.89,11.85 24,12.1 24,12.38C24,12.65 23.89,12.9 23.71,13.08L21.23,15.56C21.05,15.74 20.8,15.86 20.5,15.86C20.25,15.86 20,15.75 19.82,15.57C19.03,14.84 18.14,14.21 17.16,13.72C16.83,13.56 16.6,13.22 16.6,12.82V9.72C15.15,9.25 13.6,9 12,9Z"
        ></path>
      </g>

      <g id="phone-in-talk">
        <path
          d="M15,12H17A5,5 0 0,0 12,7V9A3,3 0 0,1 15,12M19,12H21C21,7 16.97,3 12,3V5C15.86,5 19,8.13 19,12M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z"
        ></path>
      </g>

      <g id="phone-locked">
        <path
          d="M19.2,4H15.8V3.5C15.8,2.56 16.56,1.8 17.5,1.8C18.44,1.8 19.2,2.56 19.2,3.5M20,4V3.5A2.5,2.5 0 0,0 17.5,1A2.5,2.5 0 0,0 15,3.5V4A1,1 0 0,0 14,5V9A1,1 0 0,0 15,10H20A1,1 0 0,0 21,9V5A1,1 0 0,0 20,4M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z"
        ></path>
      </g>

      <g id="phone-missed">
        <path
          d="M23.71,16.67C20.66,13.77 16.54,12 12,12C7.46,12 3.34,13.77 0.29,16.67C0.11,16.85 0,17.1 0,17.38C0,17.65 0.11,17.9 0.29,18.08L2.77,20.56C2.95,20.74 3.2,20.86 3.5,20.86C3.75,20.86 4,20.75 4.18,20.57C4.97,19.83 5.86,19.21 6.84,18.72C7.17,18.56 7.4,18.22 7.4,17.82V14.72C8.85,14.25 10.39,14 12,14C13.6,14 15.15,14.25 16.6,14.72V17.82C16.6,18.22 16.83,18.56 17.16,18.72C18.14,19.21 19.03,19.83 19.82,20.57C20,20.75 20.25,20.86 20.5,20.86C20.8,20.86 21.05,20.74 21.23,20.56L23.71,18.08C23.89,17.9 24,17.65 24,17.38C24,17.1 23.89,16.85 23.71,16.67M6.5,5.5L12,11L19,4L18,3L12,9L7.5,4.5H11V3H5V9H6.5V5.5Z"
        ></path>
      </g>

      <g id="phone-paused">
        <path
          d="M19,10H21V3H19M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5M17,3H15V10H17V3Z"
        ></path>
      </g>

      <g id="phone-settings">
        <path
          d="M19,11H21V9H19M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5M17,9H15V11H17M13,9H11V11H13V9Z"
        ></path>
      </g>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);
