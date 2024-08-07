import type { SettingSection } from "./types/settings";

export const DEFAULT_SETTINGS: SettingSection[] = [
  {
    section: "Default Background",
    items: [
      {
        label: "Blur",
        key: "static-bg-blur",
        min: 0,
        max: 100,
        unit: "px",
        default: 24,
        tooltip: "Amount of blur to apply to the Default Background.",
      },
      {
        label: "Brightness",
        key: "static-bg-brightness",
        min: 0,
        max: 200,
        unit: "%",
        default: 65,
        tooltip: "Brightness level of the Default Background.",
      },
      {
        label: "Contrast",
        key: "static-bg-contrast",
        min: 0,
        max: 200,
        unit: "%",
        default: 80,
        tooltip: "Contrast level of the Default Background.",
      },
      {
        label: "Saturation",
        key: "static-bg-saturation",
        min: 0,
        max: 200,
        unit: "%",
        default: 90,
        tooltip: "Saturation level of the Default Background.",
      },
    ],
  },
  {
    section: "Animated Background",
    items: [
      {
        label: "Blur",
        key: "animated-background-blur",
        min: 32,
        max: 256,
        unit: "px",
        default: 64,
        tooltip: "Amount of blur to apply to the animated background.",
      },
      {
        label: "Saturation",
        key: "animated-background-saturation",
        min: 0,
        max: 500,
        unit: "%",
        default: 150,
        tooltip: "Saturation level of the animated background.",
      },
      {
        label: "Contrast",
        key: "animated-background-contrast",
        min: 0,
        max: 200,
        unit: "%",
        default: 115,
        tooltip: "Contrast level of the animated background.",
      },
      {
        label: "Brightness",
        key: "animated-background-brightness",
        min: 0,
        max: 200,
        unit: "%",
        default: 65,
        tooltip: "Brightness level of the animated background.",
      },
      {
        label: "Animation Time",
        key: "animated-background-time",
        tooltip:
          "Time it takes for the animated background to complete one cycle. (30s-60s prefered, 0 = no animation)",
        min: 0,
        max: 120,
        unit: "s",
        default: 45,
      },
    ],
  },
  {
    section: "Now Playing Bar",
    items: [
      {
        label: "Opacity",
        key: "now-playing-bar-opacity",
        min: 0,
        max: 100,
        unit: "%",
        default: 100,
        tooltip: "Opacity of the whole backdrop.",
      },
      {
        label: "Background Color Opacity",
        key: "now-playing-bar-bg-opacity",
        min: 0,
        max: 100,
        unit: "%",
        default: 50,
        tooltip: "Background Color Opacity of the now playing bar.",
      },
      {
        label: "Height",
        key: "now-playing-bar-height",
        min: 0,
        max: 500,
        unit: "px",
        default: 80,
        tooltip: "Height of the now playing bar.",
      },
      {
        label: "Padding in X axis",
        key: "now-playing-bar-padding-x",
        min: 0,
        max: 50,
        unit: "px",
        default: 4,
        tooltip:
          "Space between the content and the edges of the now playing bar.",
      },
      {
        label: "Margin Bottom",
        key: "margin-bottom-now-playing-bar",
        min: 0,
        max: 50,
        unit: "px",
        default: 8,
        tooltip:
          "Adjusts the spacing between the bottom of the now playing bar and the content below it.",
      },
      {
        label: "Border Radius",
        key: "border-radius-now-playing-bar",
        min: 0,
        max: 100,
        unit: "px",
        default: 8,
        tooltip: "Rounded corners for the now playing bar.",
      },
      {
        label: "Blur",
        key: "now-playing-bar-blur",
        min: 0,
        max: 100,
        unit: "px",
        default: 32,
        tooltip: "Amount of blur to apply to the now playing bar.",
      },
      {
        label: "Saturation",
        key: "now-playing-saturation",
        min: 0,
        max: 200,
        unit: "%",
        default: 100,
        tooltip: "Saturation level of the now playing bar.",
      },
      {
        label: "Contrast",
        key: "now-playing-contrast",
        min: 0,
        max: 200,
        unit: "%",
        default: 100,
        tooltip: "Contrast level of the now playing bar.",
      },
      {
        label: "Brightness",
        key: "now-playing-brightness",
        min: 0,
        max: 200,
        unit: "%",
        default: 100,
        tooltip: "Brightness level of the now playing bar.",
      },
    ],
  },
];

export enum BackgroundOption {
  ANIMATED = "animated",
  STATIC = "static",
  SOLID = "solid",
}

export enum grainsOption {
  STARY = "stary",
  NORMAL = "normal",
  NONE = "none",
}

export enum scrollEffectOption {
  NEW = "new",
  DEFAULT = "default",
}

export enum dynamicColorOption {
  NORMAL = "normal",
  DYNAMIC = "dynamic",
}
