import { types } from '../../Types/types';

export const getAllHero = () => {
	return async (dispatch) => {
		try {
			const resp = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`);
			const body = await resp.json();

			if (resp.status === 200) {
				dispatch(loadHeroAll(body));
			}

		} catch {
			// console.log("error");
		}
	};
};

export const heroInfo = (id, hero) => ({
	type: types.heroInformation,
	payload: {
		id,
		...hero,
	},
});

/******************************************************************************************* */

const loadHeroAll = (hero) => ({
	type: types.getAllHero,
	payload: hero,
});

export const NumberPage = (page) => ({
	type: types.NumberPages,
	payload: page,
});

export const ModalViewHero = (modal) => ({
	type: types.ActiveModalViewHero,
	payload: modal,
});

export const searchHero = (search) => ({
	type: types.SearchHero,
	payload: search,
});

export const spinnerLoading = (spinner) => ({
	type: types.spinnerLoading,
	payload: spinner,
});
