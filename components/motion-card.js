/**
 * @file defines Motion Card component
 * @author Benjamin Herman <benjamin@metanomial.com>
 * @version 1.0.0
 */

import { sequence } from '../utilities/damm.js';

/**
 * Motion Card custom element
 */
export default class extends HTMLElement {

	/**
	 * Instance constructor
	 */
	constructor() {
		super();
	}

	/**
	 * Element connected lifecycle callback
	 */
	connectedCallback() {
		const date = new Date(this.data.motioned_at);
		const voteId = sequence(this.data.rowid.toString());
		this.innerHTML = `
			<header>
				<h2>Motion ${ this.data.rowid }</h2>
				<p class=datetime>${ date.toLocaleDateString() } ${ date.toLocaleTimeString() }
			</header>
			<main>
				<p><b>Motion</b> ${ this.data.motion_text }
			</main>
			<footer>
				<p class=command>$vote ${ voteId }
			</footer>
		`;
	}
	
	/**
	 * Populate card data
	 * @param {object} data - Motion API object
	 */
	populate(data) {
		this.data = data;
	}
}

/**
 * Compute formatted vote sequence
 * @return {string} Bot vote command
 */
/*function vote() {
	return `$vote ${ sequence(this.motion.rowid.toString()) }`;
}*/
