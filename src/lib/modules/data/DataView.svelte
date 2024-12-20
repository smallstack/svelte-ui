<script lang="ts">
	import { fakerDE as faker } from "@faker-js/faker";
	import { breakpointService, MD_AND_UP } from "../navigation";
	import { createColumnHelper, createSvelteTable, getCoreRowModel } from "./svelte-5-tanstack";
	import FlexRender from "./svelte-5-tanstack/flex-render.svelte";

	const { mode }: { mode?: string } = $props();

	let computedMode = $derived.by(() => {
		if (!mode || mode === "auto") return breakpointService.matches(MD_AND_UP) ? "table" : "grid";
		return mode;
	});

	type UserProfile = {
		// Shape of the data
	};

	// 💡 Create a column helper for the user profile data.
	// It's not necessary, but it helps with typescript stuff.
	const colHelp = createColumnHelper<UserProfile>();

	// Define the columns using the column helper.
	// This is a basic example. Check other examples for more complexity.
	const columnDefs = [
		colHelp.accessor("name", { header: "Name" }),
		colHelp.accessor("age", { header: "Age" }),
		colHelp.accessor("email", { header: "Email" }),
		colHelp.accessor("phone", { header: "Phone" })
	];

	// create data
	const data = [];
	for (let i = 0; i < 1000; i++) {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();
		const name = `${firstName} ${lastName}`;
		const age = faker.number.int({ min: 18, max: 90 });
		const email = faker.internet.email({ firstName, lastName });
		const phone = faker.phone.number();
		data.push({ name, age, email, phone });
	}

	// Create the table.
	const table = createSvelteTable({
		data,
		columns: columnDefs,
		getCoreRowModel: getCoreRowModel()
	});
</script>

{#if computedMode === "table"}
	<table class="table table-zebra">
		<thead>
			<tr>
				{#each table.getHeaderGroups() as headerGroup}
					{#each headerGroup.headers as header}
						<th>
							<FlexRender content={header.column.columnDef.header} context={header.getContext()} />
						</th>
					{/each}
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each table.getRowModel().rows as row}
				<tr>
					{#each row.getVisibleCells() as cell}
						<td>
							<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{:else if computedMode === "grid"}
	<!-- grid list with daisy ui cards -->
	<div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
		{#each table.getRowModel().rows as row}
			<div class="card card-bordered">
				<div class="card-body">
					{#each row.getVisibleCells() as cell}
						<div class="flex flex-col gap-0">
							<div class="text-slate-400 text-xs">
								<FlexRender
									content={cell.column.columnDef.header as any}
									context={cell.getContext()}
								/>
							</div>
							<div>
								<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div>Invalid mode: {computedMode}</div>
{/if}
