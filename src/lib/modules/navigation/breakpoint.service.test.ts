import { describe, expect, it } from "vitest";
import { breakpointService } from "./breakpoint.service.svelte.js";

describe("BreakpointService", () => {
	it("should match breakpoints", () => {
		breakpointService.width = 350;
		expect(breakpointService.matchesBreakpoints(["xs"])).toBe(true);
		expect(breakpointService.matchesBreakpoints(["sm"])).toBe(false);
		expect(breakpointService.matchesBreakpoints(["xs", "sm"])).toBe(true);
		expect(breakpointService.matchesBreakpoints(["xs", "sm", "lg"])).toBe(true);
		expect(breakpointService.matchesBreakpoints(["lg"])).toBe(false);
		breakpointService.width = 800;
		expect(breakpointService.matchesBreakpoints(["xs"])).toBe(false);
		expect(breakpointService.matchesBreakpoints(["sm"])).toBe(false);
		expect(breakpointService.matchesBreakpoints(["xs", "sm"])).toBe(false);
		expect(breakpointService.matchesBreakpoints(["xs", "sm", "md"])).toBe(true);
		expect(breakpointService.matchesBreakpoints(["lg"])).toBe(false);
	});
});
