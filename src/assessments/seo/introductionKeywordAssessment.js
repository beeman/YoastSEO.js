var AssessmentResult = require( "../../values/AssessmentResult.js" );

/**
 * Returns a score and text based on the firstParagraph object.
 *
 * @param {object} firstParagraphMatches The object with all firstParagraphMatches.
 * @param {object} i18n The object used for translations
 * @returns {object} resultObject with score and text
 */
var calculateFirstParagraphResult = function( firstParagraphMatches, i18n ) {
	const url = "<a href='https://yoa.st/2pc' target='_blank'>";

	if ( firstParagraphMatches > 0 ) {
		return {
			score: 9,
			text: i18n.sprintf(
				/* Translators: %1$s expands to a link on yoast.com, %2$s expands to the anchor end tag */
				i18n.dgettext( "js-text-analysis", "The focus keyword appears in the %1$sfirst paragraph%2$s of the copy." ),
				url,
				"</a>"
			),
		};
	}

	return {
		score: 3,
		text: i18n.sprintf(
			/* Translators: %1$s expands to a link on yoast.com, %2$s expands to the anchor end tag */
			i18n.dgettext( "js-text-analysis", "The focus keyword doesn't appear in the %1$sfirst paragraph%2$s of the copy. " +
			"Make sure the topic is clear immediately." ),
			url,
			"</a>"
		),
	};
};

/**
 * Runs the findKeywordInFirstParagraph module, based on this returns an assessment result with score.
 *
 * @param {Paper} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @param {object} i18n The object used for translations
 * @returns {object} the Assessmentresult
 */
var introductionHasKeywordAssessment = function( paper, researcher, i18n ) {
	var firstParagraphMatches = researcher.getResearch( "firstParagraph" );
	var firstParagraphResult = calculateFirstParagraphResult( firstParagraphMatches, i18n );
	var assessmentResult = new AssessmentResult();

	assessmentResult.setScore( firstParagraphResult.score );
	assessmentResult.setText( firstParagraphResult.text );

	return assessmentResult;
};

module.exports = {
	identifier: "introductionKeyword",
	getResult: introductionHasKeywordAssessment,
	isApplicable: function( paper ) {
		return paper.hasKeyword();
	},
};
