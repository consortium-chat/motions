/**
 * @file Initiates web app
 */

import MotionCard from './components/motion-card.js';
import { fetchMotions } from './utilities/api.js';

// Register motion card custom element
customElements.define('motion-card', MotionCard);

/**
 * Toggle `visibile` class on filter bar
 */
function toggleFilterBar() {
	document.getElementById('filters').classList.toggle('visible');
}

/**
 * DOM content load event handler
 */
function init() {
	document.getElementById('filter-toggle').onclick = toggleFilterBar;
	loadMotions();
}

// Listen for DOM content load events
document.addEventListener('DOMContentLoaded', init);

/**
 * Load motions from API
 */
async function loadMotions() {
	const motions = await fetchMotions();
	const listingDiv = document.querySelector('#listing .content');
	while(listingDiv.childElementCount) listingDiv.removeChild(listingDiv.firstChild);
	for(const motion of motions) {
		const card = document.createElement('motion-card');
		card.populate(motion);
		listingDiv.appendChild(card);
	}
}
