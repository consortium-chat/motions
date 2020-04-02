/**
 * @file Initiates web app
 */

import { fetchMotions } from './utilities/api.js';
import { sequence } from './utilities/damm.js';

/**
 * DOM content load event handler
 */
async function init() {
	const motions = await fetchMotions();
	const listingsBox = document.getElementById('listings');
	for(const motion of motions.reverse()) {
		const motionCard = document.createElement('div');
		motionCard.classList.add('motion-card');
		const motionTitle = document.createElement('h2');
		motionTitle.classList.add('motion-title');
		motionTitle.innerText = `Motion ${ sequence(motion.rowid.toString()) }`;
		motionCard.appendChild(motionTitle);
		const motionDate = document.createElement('p');
		const date = new Date(motion.motioned_at);
		motionDate.classList.add('motion-date');
		motionDate.innerText = `${ date.toLocaleDateString() } ${ date.toLocaleTimeString() }`;
		motionCard.appendChild(motionDate);
		const motionText = document.createElement('p');
		motionText.classList.add('motion-text');
		motionText.innerText = `Motion ${ motion.motion_text }`;
		motionCard.appendChild(motionText);
		listingsBox.appendChild(motionCard);
	}
}

// Listen for DOM content load events
document.addEventListener('DOMContentLoaded', init);
