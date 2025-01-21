import { getStroke, type StrokeOptions } from "perfect-freehand";
import { cubicInOut } from "svelte/easing";

const linear = (t: number) => t;
const average = (a: number, b: number) => (a + b) / 2;

function getSvgPathFromStroke(points: number[][], closed = true): string {
	const len = points.length;

	if (len < 4) {
		return "";
	}

	let a = points[0];
	let b = points[1];
	const c = points[2];

	let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(2)},${b[1].toFixed(2)} ${average(b[0], c[0]).toFixed(2)},${average(
		b[1],
		c[1]
	).toFixed(2)} T`;

	for (let i = 2, max = len - 1; i < max; i++) {
		a = points[i];
		b = points[i + 1];
		result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(2)} `;
	}

	if (closed) {
		result += "Z";
	}

	return result;
}

const strokeOptions: StrokeOptions = {
	size: 8,
	thinning: 0.7,
	smoothing: 0.4,
	streamline: 0.6,
	easing: linear,
	start: {
		taper: 0,
		easing: cubicInOut,
		cap: true
	},
	end: {
		taper: 0,
		easing: cubicInOut,
		cap: true
	}
};

interface Options {
	ondraw: (path: string) => void;
	oncomplete: (path: string) => void;
	strokeOptions?: StrokeOptions;
}

export function SignaturePadAction(node: HTMLElement, options: Options) {
	const points: number[][] = [];

	if (!options.strokeOptions) options.strokeOptions = {};
	options.strokeOptions = { ...strokeOptions, ...options.strokeOptions };

	function render(complete: boolean) {
		const stroke = getStroke(points, strokeOptions);
		const path = getSvgPathFromStroke(stroke);
		if (complete) {
			options.oncomplete(path);
		} else {
			options.ondraw(path);
		}
	}

	let down = false;

	function pointerDown(e: PointerEvent) {
		node.setPointerCapture(e.pointerId);
		points.push([e.offsetX, e.offsetY, e.pressure]);
		render(false);
		down = true;
	}

	function pointerMove(e: PointerEvent) {
		if (down && e.isPrimary) {
			points.push([e.offsetX, e.offsetY, e.pressure]);
			render(false);
		}
	}

	function pointerUp(e: PointerEvent) {
		node.releasePointerCapture(e.pointerId);

		render(true);

		down = false;
		points.length = 0;
	}

	node.addEventListener("pointerdown", pointerDown, { passive: true });
	node.addEventListener("pointermove", pointerMove, { passive: true });
	node.addEventListener("pointerup", pointerUp, { passive: true });
	node.addEventListener("pointercancel", pointerUp, { passive: true });

	return {
		destroy() {
			node.removeEventListener("pointerdown", pointerDown);
			node.removeEventListener("pointermove", pointerMove);
			node.removeEventListener("pointerup", pointerUp);
			node.removeEventListener("pointercancel", pointerUp);
		}
	};
}
