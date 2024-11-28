import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import KeyValue from "./KeyValue.svelte";
import KeyValueTest from "./KeyValue.test.svelte";

describe("KeyValue", () => {
	test("renders key correctly", () => {
		const { getByText } = render(KeyValue, { props: { key: "Test Key" } });
		expect(getByText("Test Key")).toBeTruthy();
	});

	test("renders value correctly when provided", () => {
		const { getByText } = render(KeyValue, { props: { key: "Test Key", value: "Test Value" } });
		expect(getByText("Test Value")).toBeTruthy();
	});

	test("renders children correctly when provided", () => {
		const { getByText } = render(KeyValueTest, {});
		expect(getByText("Children")).toBeTruthy();
	});

	test("renders placeholder when neither value nor children are provided", () => {
		const { getByText } = render(KeyValue, { key: "Test Key" });
		expect(getByText("-")).toBeTruthy();
	});

	test("snapshot matches", async () => {
		const { container } = render(KeyValue, { props: { key: "Test Key", value: "Test Value" } });
		expect(container.innerHTML).toMatchSnapshot();
	});
});
