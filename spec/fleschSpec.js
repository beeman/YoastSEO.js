require('../js/config/config.js');
require('../js/analyzer.js');


fleschArgs = {
    textString: "This is the year that Yoast turns 5 years old. A natural time to reflect upon how the company is doing and what it should and should not be doing and what we want for the future. Today we’re proud to announce that we’ve been acquired by CrowdFavorite",
    queue: ["fleschReading"]
};

describe("Test for the flesch kincaid reading", function(){
    it("returns a flesh kincaid reading score", function(){
        var flesch = new Analyzer(fleschArgs);
        var output = flesch.fleschReading();
        expect(output.result).toBe('83.3');
    });
});

fleschArgs2 = {
    textString: "One question we get quite often in our website reviews is whether we can help people recover from the drop they noticed in their rankings or traffic. A lot of the times, this is a legitimate drop and people were actually in a bit of trouble.",
    queue: ["fleschReading"]
};

describe("2nd test for the flesch kincaid reading", function(){
    it("returns a flesh kincaid reading score", function(){
        var flesch2 = new Analyzer(fleschArgs2);
        var output2 = flesch2.fleschReading();
        expect(output2.result).toBe('71.7');
    });
});