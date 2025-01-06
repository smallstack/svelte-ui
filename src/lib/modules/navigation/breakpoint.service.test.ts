import { describe, expect, it } from "vitest";
import { breakpointService } from "./breakpoint.service.svelte";

describe("BreakpointService", () => {
	it("should match breakpoints", () => {
		breakpointService.windowWidth = 350;
		expect(breakpointService.matches(["xs"])).toBe(true);
		expect(breakpointService.matches(["sm"])).toBe(false);
		expect(breakpointService.matches(["xs", "sm"])).toBe(true);
		expect(breakpointService.matches(["xs", "sm", "lg"])).toBe(true);
		expect(breakpointService.matches(["lg"])).toBe(false);
		breakpointService.windowWidth = 800;
		expect(breakpointService.matches(["xs"])).toBe(false);
		expect(breakpointService.matches(["sm"])).toBe(false);
		expect(breakpointService.matches(["xs", "sm"])).toBe(false);
		expect(breakpointService.matches(["xs", "sm", "md"])).toBe(true);
		expect(breakpointService.matches(["lg"])).toBe(false);
	});
});
