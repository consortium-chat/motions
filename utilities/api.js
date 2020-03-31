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
 * Fetch motions by search parameters
 * @return {object[]}
 */
export async function fetchMotions() {
	const url = new URL('/motions', API_BASE);
	//url.search = new URLSearchParams(history.state);
	const response = await fetch(url);
	return await response.json();
}
