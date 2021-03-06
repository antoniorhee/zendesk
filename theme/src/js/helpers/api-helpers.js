import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://help.liferay.com/api/v2/' : 'https://liferaysupport1528999723.zendesk.com/api/v2/';

const httpRequest = axios.create(
	{
		baseURL: baseURL
	}
);

/**
 * Returns a promise of Articles under a Section
 * @param {string} id The section id
 * @param {string} locale The user's current locale
 * @param {number} count The number of Articles in the Section
 * @returns {Promise} Promise object of Articles under a Section whose id is passed into the function
 */
export function getArticlesBySectionId(id, locale, count) {
	const perPageCount = count ? `?per_page=${count}` : '';

	return httpRequest.get(
		`help_center/${locale}/sections/${id}/articles.json${perPageCount}`
	);
}

/**
 * Returns a promise of the Request object
 * @param {string} id The request id or ticket id
 * @returns {Promise} Promise object of a Request or Ticket by its id
 */
export function getRequestById(id) {
	return httpRequest.get(`requests/${id}`);
}

/**
 * Returns a promise of the Section object
 * @param {string} id The section id
 * @param {string} locale The user's current locale
 * @returns {Promise} Promise object of a section by its id
 */
export function getSectionBySectionId(id, locale) {
	return httpRequest.get(`help_center/${locale}/sections/${id}.json`);
}

/**
 * Returns a promise of Sections under a Category
 * @param {string} id The category id
 * @param {string} locale The user's current locale
 * @returns {Promise} Promise object of Sections under a Category whose id is passed into the function
 */
export function getSectionsByCategoryId(id, locale) {
	return httpRequest.get(
		`help_center/${locale}/categories/${id}/sections.json`
	);
}