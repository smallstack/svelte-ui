// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormValue = any;

export class FormService<T = FormValue> {
	data = $state<T>({} as FormValue);

	public getValueForPath(path: string): FormValue {
		return this.data[path];
	}
	public updateDataForPath(path: string, value: FormValue) {
		this.data = { ...this.data, [path]: value };
	}

	public updateData(value: FormValue): void {
		this.data = value;
	}
}
