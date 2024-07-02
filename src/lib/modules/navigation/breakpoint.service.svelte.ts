import { browser } from "$app/environment";

export const BREAKPOINTS = {
	/** < 640px */
	XS: "xs",
	/** 640 - 767px  */
	SM: "sm",
	/** 768 - 1023px */
	MD: "md",
	/** 1024 - 1279px */
	LG: "lg",
	/** > 1280 */
	XL: "xl"
};
/** greater than 640px */
export const SM_AND_UP = [BREAKPOINTS.SM, BREAKPOINTS.MD, BREAKPOINTS.LG, BREAKPOINTS.XL];
/** greater than 768px */
export const MD_AND_UP = [BREAKPOINTS.MD, BREAKPOINTS.LG, BREAKPOINTS.XL];
/** greater than 1024px */
export const LG_AND_UP = [BREAKPOINTS.LG, BREAKPOINTS.XL];

export const BREAKPOINT_DIMENSIONS = {
	[BREAKPOINTS.XS]: [0, 639],
	[BREAKPOINTS.SM]: [640, 767],
	[BREAKPOINTS.MD]: [768, 1023],
	[BREAKPOINTS.LG]: [1024, 1279],
	[BREAKPOINTS.XL]: [1280, 100000]
};

class BreakpointService {
	public windowWidth: number = $state();
	public windowHeight: number = $state();
	constructor() {
		if (browser) {
			this.handleResize();
			window.addEventListener("resize", this.handleResize.bind(this));
		}
	}

	public matches(breakpoints: boolean | string | string[]) {
		if (typeof breakpoints === "boolean" || breakpoints === undefined) return breakpoints;
		if (typeof breakpoints === "string") breakpoints = [breakpoints];
		for (const breakpoint of breakpoints) {
			const dimensions = BREAKPOINT_DIMENSIONS[breakpoint];
			if (this.windowWidth >= dimensions[0] && this.windowWidth <= dimensions[1]) {
				return true;
			}
		}
		return false;
	}

	private handleResize() {
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
	}
}

export const breakpointService = new BreakpointService();
