/**
 * @file instantiates and mounts the Vue application
 * @author Benjamin Herman <benjamin@metanomial.com>
 * @version 1.0.0
 */

import MotionCard from './components/motion-card.js';
import { fetchMotions } from './utilities/api.js';

// Register motion card custom element
customElements.define('motion-card', MotionCard);

/**
 * Toggle filter bar visibility
 */
function toggleFilterBar() {
	document.getElementById('filters').classList.toggle('visible');
}

/**
 * DOM content load event handler
 */
function init() {
	document.getElementById('filter-toggle').onclick = toggleFilterBar;
	if(history.state == null) history.replaceState({ active: true }, document.title);
	loadMotions();
}

/**
 * History state change handler
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

// Listen for DOM content load events
document.addEventListener('DOMContentLoaded', init);

// Listen for history state change events
window.addEventListener('popstate', loadMotions);
