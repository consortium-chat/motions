/**
 * @file API wrapper
 */

/**
 * API base URL
 * @type {URL}
 */
const API_BASE = new URL('https://pluto.shelvacu.com');

/**
 * Fetch motions by search parameters
 * @return {object[]}
 */
export async function fetchMotions() {
	const url = new URL('/motions', API_BASE);
	//url.search = new URLSearchParams(history.state);
	const response = await fetch(url);
	return await response.json();
}

/**
 * Fetch votes by motion identifier
 * @return {object[]}
 */
export async function fetchVotes(id) {
	const url = new URL(`/votes/${id}`, API_BASE);
	const response = await fetch(url);
	return await response.json();
}
