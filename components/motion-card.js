/**
 * @file Motion Card component
 */

import { sequence } from '../utilities/damm.js';

/**
 * Motion Card custom element class
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
	 * @see https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks
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
