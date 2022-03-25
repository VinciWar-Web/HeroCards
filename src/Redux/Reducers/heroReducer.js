import { types } from '../../Types/types';

const initialState = {
    HeroAll: [],
	HeroDetailed: {},
	NumberPage: "",
	ModalViewHero: false,
	SearchHero: "",
	SpinnerActive: true
};
export const heroReducer = (state = initialState, action) => {
	switch (action.type) {

		case types.getAllHero:
			return {
				...state,
				HeroAll: [...action.payload],
			};

		case types.heroInformation:
			return {
				...state,
				HeroDetailed: {
					...action.payload,
				},
			};

		case types.NumberPages:
			return {
				...state,
				NumberPage: action.payload,
			};

		case types.ActiveModalViewHero:
			return {
				...state,
				ModalViewHero: action.payload,
			};

		case types.SearchHero:
			return {
				...state,
				SearchHero: action.payload,
			};

		case types.spinnerLoading:
			return {
				...state,
				SpinnerActive: action.payload,
			};

		default:
			return state;
	}
};
