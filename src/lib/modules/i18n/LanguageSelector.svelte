<script lang="ts">
	import { availableLanguages, currentLanguage, getI18n, t } from "$lib/stores/i18n.store";
 
	const i18n = getI18n();

	function changeLanguage(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
		$i18n.changeLanguage(event.currentTarget.value);
	}
</script>

<label class="form-control">
	<div class="label">
		<span class="label-text">{$t("i18n.language")}</span>
	</div>
	<select
		class="select select-bordered"
		value={$currentLanguage}
		onchange={changeLanguage}
		data-testid="language-selector"
	>
		<option disabled>{$t("i18n.noLanguageSelected")}</option>
		{#each $availableLanguages as lang}
			<option value={lang} data-testid={`language-selector-option-${lang}`}
				>{$t(`i18n.languages.${lang}`)}</option
			>
		{/each}
	</select>
</label>
