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
		const heading = document.createElement('h2');
		heading.innerText = `Motion ${ sequence(this.data.rowid.toString()) }`;
		this.appendChild(heading);
		const motionDate = document.createElement('p');
		const date = new Date(this.data.motioned_at);
		motionDate.classList.add('date');
		motionDate.innerText = `${ date.toLocaleDateString() } ${ date.toLocaleTimeString() }`;
		this.appendChild(motionDate);
		const motionText = document.createElement('p');
		motionText.innerText = `Motion ${ this.data.motion_text }`;
		this.appendChild(motionText);
	}
	
	/**
	 * Populate card data
	 * @param {object} data - Motion API object
	 */
	populate(data) {
		this.data = data;
	}
}
