/**
 * @file Initiates web app
 */

import { fetchMotions } from './utilities/api.js';
import { sequence } from './utilities/damm.js';

function localeDateTime( date ) {
	return `${ date.toLocaleDateString() } ${ date.toLocaleTimeString() }`;
}

/**
 * DOM content load event handler
 */
async function init() {
	const motions = await fetchMotions();
	motions.sort((a, b) => b.rowid - a.rowid);
	const listingsBox = document.getElementById('listings');
	for(const motion of motions) {
		const finished = motion.announcement_message_id != null;
		const motionCard = document.createElement('div');
		motionCard.classList.add('motion-card');
		const motionTitle = document.createElement('h2');
		motionTitle.classList.add('motion-title');
		motionTitle.innerText = `Motion ${ sequence(motion.rowid.toString()) }`;
		motionCard.appendChild(motionTitle);
		const motionDate = document.createElement('p');
		const date = new Date(motion.motioned_at);
		const resultChange = new Date(motion.last_result_change);
		const endsAt = new Date(resultChange.getTime() + (2*24*60*60*1000));
		const endsText = finished ? "ended at" : "ends at";
		motionDate.classList.add('motion-date');
		motionDate.innerText = `Called ${ localeDateTime(date) }, ${ endsText } ${ localeDateTime(endsAt) }`;
		motionCard.appendChild(motionDate);
		const motionText = document.createElement('p');
		motionText.classList.add('motion-text');
		motionText.innerText = `Motion ${ motion.motion_text }`;
		motionCard.appendChild(motionText);
		const motionVotes = document.createElement('p');
		const winner = document.createElement('span');
		winner.classList.add('winner');
		const loser = document.createElement('span');
		if(motion.is_win){
			winner.innerText = `for ${motion.yes_vote_count}`
			loser.innerText  = ` vs ${motion.no_vote_count} against`
		}else{
			winner.innerText = `against ${motion.no_vote_count}`
			loser.innerText  = ` vs ${motion.yes_vote_count} for`
		}
		motionVotes.appendChild(winner);
		motionVotes.appendChild(loser);
		motionCard.appendChild(motionVotes);
		listingsBox.appendChild(motionCard);
	}
}

// Listen for DOM content load events
document.addEventListener('DOMContentLoaded', init);
