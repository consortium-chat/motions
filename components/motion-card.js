/**
 * @file defines Motion Card component
 * @author Benjamin Herman <benjamin@metanomial.com>
 * @version 1.0.0
 */

import { sequence } from '../utilities/damm.js';

/**
 * Shadow root references
 * @type {WeakMap<ShadowRoot>}
 */
const shadowRoots = new WeakMap;

/**
 * Motion Card custom element
 */
export default class extends HTMLElement {

	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoots.set(this, shadowRoot);
		const template = document.getElementById('motion-card').content;
		shadowRoot.appendChild(template.cloneNode(true));
	}
	
	/**
	 * Populate card
	 * @param {object} data - Motion API object
	 */
	populate(data) {
		const shadowRoot = shadowRoots.get(this);
		shadowRoot.getElementById('title').innerText = `Motion ${ data.rowid }`;
		const date = new Date(data.motioned_at);
		shadowRoot.getElementById('datetime').innerText = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
		const voteId = sequence(data.rowid.toString());
		shadowRoot.getElementById('command').innerText = `$vote ${ voteId }`;
		shadowRoot.getElementById('text').innerText = data.motion_text;
	}
}

/**
 * Compute formatted vote sequence
 * @return {string} Bot vote command
 */
/*function vote() {
	return `$vote ${ sequence(this.motion.rowid.toString()) }`;
}*/
