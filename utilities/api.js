/**
 * @file defines API utilities
 * @author Benjamin Herman <benjamin@metanomial.com>
 * @version 1.0.0
 */

/**
 * API base URL
 * @type {URL}
 */
const API_BASE = new URL('https://pluto.shelvacu.com');

/**
 * Motions API endpoint
 * @type {URL}
 */
const MOTIONS_ENDPOINT = new URL('/mock-data.json', API_BASE);

/**
 * Votes API endpoint
 * @type {URL}
 */
const VOTES_ENDPOINT = new URL('/votes', API_BASE);

/**
 * Fetch motions by search parameters
 * @return {object[]}
 */
export async function fetchMotions() {
	//const url = new URL(MOTIONS_ENDPOINT);
	//url.search = new URLSearchParams(history.state);
	//const response = await fetch(url);
	//return await response.json();
	return mockMotions(); // DEBUG
}

/**
 * Generate mock motions data
 * @debug
 * @return {object[]}
 */
async function mockMotions() {
	const motions = [];
	for(let i = 0; i < 40; ++i) {
		const now = +new Date;
		const date = new Date( now - Math.random() * 50400000 );
		const lastChange = Math.random() < 0.3
			? new Date( +date + Math.random() * (now - date) )
			: date;
		motions.push({
			rowid: i + 1,
			motion_text: `that ${ Math.random() } is definitely a number.`,
			motioned_at: date.toISOString(),
			last_result_change: lastChange.toISOString(),
			votes_for: Math.floor( Math.random() * Math.random() * Math.random() * 100 ),
			votes_against: Math.floor( Math.random() * Math.random() * Math.random() * 100 ),
			is_super: Math.random() < 0.5 ? true : false
		});
	}
	return motions;
}
