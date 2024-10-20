export type Color = {
	r: number;
	g: number;
	b: number;
	hex: string;
};

export type ColorPalette = {
	main: Color;
	sidebar: Color;
	card: Color;
	accent: Color;
	highlight: Color;
	button: Color;
	player: Color;
	"progress-bar": Color;
	"button-active": Color;
	text: Color;
	subtext: Color;
	primary: Color;
	secondary: Color;
	tertiary: Color;
};

export type WildColorPalette = {
	accent: Color;
	button: Color;
	"progress-bar": Color;
	"button-active": Color;
	primary: Color;
	secondary: Color;
	tertiary: Color;
};

export type ExtractedColors = {
	baseColor: Color;
	secondaryColor: Color;
	tertiaryColor: Color;
};
