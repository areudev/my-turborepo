import { useCombobox as useDownshiftCombobox } from 'downshift'

export function useCombobox<Item>(
	options: Parameters<typeof useDownshiftCombobox<Item>>[0],
) {
	const { itemToString = item => item || '' } = options
	return useDownshiftCombobox({
		stateReducer(state, { type, changes }) {
			if (type === useDownshiftCombobox.stateChangeTypes.InputBlur) {
				return {
					...changes,
					highlightedIndex: -1,
					selectedItem: state.selectedItem,
					inputValue: String(itemToString(state.selectedItem)) || '',
				}
			}

			if (type === useDownshiftCombobox.stateChangeTypes.FunctionSelectItem) {
				return {
					...changes,
					inputValue: '',
				}
			}
			return changes
		},
		...options,
	})
}
