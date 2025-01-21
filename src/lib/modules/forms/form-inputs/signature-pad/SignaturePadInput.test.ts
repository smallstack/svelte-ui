import { describe, test, expect } from "vitest";
import { SignaturePadInput } from "../..";
import { render } from "@testing-library/svelte";
import { ticTacToeBase64 } from "./snapshots/tic-tac-toe";

describe("SignaturePadInput", () => {
	test("should render", async () => {
		const { container } = render(SignaturePadInput);
		await expect(container).toMatchFileSnapshot("snapshots/SignaturePadInput-1.html");
	});

	test("should render with signature", async () => {
		const { container } = render(SignaturePadInput, {
			props: {
				signature: ticTacToeBase64
			}
		});

		await expect(container).toMatchFileSnapshot("snapshots/SignaturePadInput-2.html");
	});
});
