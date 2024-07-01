import { describe, expect, it } from "vitest";
import { breakpointService } from "./breakpoint.service.svelte.js";

describe("BreakpointService", () => {
	it("should match breakpoints", () => {
		breakpointService.width = 350;
		expect(breakpointService.matches(["xs"])).toBe(true);
		expect(breakpointService.matches(["sm"])).toBe(false);
		expect(breakpointService.matches(["xs", "sm"])).toBe(true);
		expect(breakpointService.matches(["xs", "sm", "lg"])).toBe(true);
		expect(breakpointService.matches(["lg"])).toBe(false);
		breakpointService.width = 800;
		expect(breakpointService.matches(["xs"])).toBe(false);
		expect(breakpointService.matches(["sm"])).toBe(false);
		expect(breakpointService.matches(["xs", "sm"])).toBe(false);
		expect(breakpointService.matches(["xs", "sm", "md"])).toBe(true);
		expect(breakpointService.matches(["lg"])).toBe(false);
	});
});
