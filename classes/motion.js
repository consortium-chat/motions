/**
 * @file defines the Motion class
 * @author Benjamin Herman <benjamin@metanomial.com>
 * @version 1.0.0
 */

/**
 * API-retrieved motion object
 * @typedef MotionConfig
 * @param {number} rowid
 * @param {string} motion_text
 * @param {string} motioned_at
 * @param {string} last_result_change
 * @param {boolean} is_super
 * @param {number} votes_for
 * @param {number} votes_against
 */

/** Motion class */
export default class Motion {
	
	/**
	 * Motion identifier
	 * @type {string?}
	 */
	identifier;
	
	/**
	 * Motion text
	 * @type {string?}
	 */
	text;
	
	/**
	 * Datetime of the motion start
	 * @type {Date?}
	 */
	date;
	
	/**
	 * Datetime of last vote that changed the projected outcome of the motion
	 * @type {Date?}
	 */
	lastChange;
	
	/**
	 * Supermajority status
	 * @type {boolean?}
	 */
	isSuper;
	
	/**
	 * Votes for
	 * @type {number?}
	 */
	votesFor;
	
	/**
	 * @param {MotionConfig} [config]
	 */
	constructor(config = {}) {
		this.identifier = config.rowid;
		this.text = config.motion_text;
		this.date = config.motioned_at != null
			? new Date(config.motioned_at)
			: null;
		this.lastChange = config.last_result_change != null
			? new Date(config.last_result_change)
			: this.date;
		this.isSuper = config.is_super;
		this.votesFor = config.votes_for;
		this.votesAgainst = config.votes_against;
	}
}
