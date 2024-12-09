import { describe, expect, it } from "vitest";
import { filterAuthorizedNavigation } from "./app-shell-options.js";

describe("AppShellOptions", () => {
	it("should filter navigation entries based on permissions", () => {
		const navigation = {
			entries: [
				{
					text: "Entry 1",
					requiredPermission: "permission1"
				},
				{
					text: "Entry 2",
					requiredPermission: ["permission2", "permission3"]
				},
				{
					text: "Entry 3"
				},
				{
					text: "Entry 4",
					requiredPermission: ["permission1", "permission3"]
				}
			]
		};
		const availablePermissions = ["permission1"];
		const filteredNavigation = filterAuthorizedNavigation(navigation, availablePermissions);
		expect(filteredNavigation.entries.length).toBe(3);
		expect(filteredNavigation.entries[0].text).toBe("Entry 1");
		expect(filteredNavigation.entries[1].text).toBe("Entry 3");
		expect(filteredNavigation.entries[2].text).toBe("Entry 4");
	});
});
