var lastIndex = -1;

var quoteList = [
	{
		"quote": "Anyone who considers arithmetical methods of producing random digits is, of course, in a state of sin.",
		"author": "-John von Neumann"
	},
	{
		"quote": "Weeks of coding can save you hours of planning.",
		"author": "-Anonymous"
	},
	{
		"quote": "Should array indices start at 0 or 1? My compromise of 0.5 was rejected, without, I thought, proper consideration.",
		"author": "-S. Kelly Bootle"
	},
	{
		"quote": "Recursion n. See recursion.",
		"author": "-Eric S. Raymond, The New Hacker's Dictionary"
	},
	{
		"quote": "Computers are like bikinis. They save people a lot of guesswork.",
		"author": "-Sam Ewin"
	},
	{
		"quote": "That's what's cool about working with computers. They don't argue, they remember everything, and they don't drink all your beer.",
		"author": "-Paul Leary"
	},
	{
		"quote": "They have computers, and they may have other weapons of mass destruction.",
		"author": "-Janet Reno"
	},
	{
		"quote": "Hardware: The parts of a computer system that can be kicked.",
		"author": "-Jeff Pesis"
	},
	{
		"quote": "The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.",
		"author": "-Henry Petroski"
	},
	{
		"quote": "No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.",
		"author": "-Mark Gibbs"
	},
	{
		"quote": "There are two ways of constructing a software design.  One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.",
		"author": "-C.A.R. Hoare"
	},
	{
		"quote": "Software suppliers are trying to make their software packages more \"user-friendly\". Their best approach so far has been to take all the old brochures and stamp the words \"user-friendly\" on the cover.",
		"author": "-Bill Gates"
	},
	{
		"quote": "Don't worry if it doesn't work right.  If everything did, you'd be out of a job.",
		"author": "-Mosher's Law of Software Engineering"
	},
	{
		"quote": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
		"author": "-Bill Gates"
	},
	{
		"quote": "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
		"author": "-Anonymous"
	},
	{
		"quote": "I think Microsoft named .Net so it wouldn't show up in a Unix directory listing.",
		"author": "-Oktal"
	},
];

function getQuote() {
	var twitterBase = "https://twitter.com/intent/tweet?text=";
	var tempIndex = getRandomNumber(quoteList.length);
	while (lastIndex === tempIndex) {
		var tempIndex = getRandomNumber(quoteList.length);
	}
	lastIndex = tempIndex;
	document.getElementById("quote").innerHTML = quoteList[tempIndex].quote;
	document.getElementById("author").innerHTML = quoteList[tempIndex].author;
	document.getElementById("twitter-share-button").href = twitterBase + quoteList[tempIndex].quote + "%0A" + quoteList[tempIndex].author;
}

function getRandomNumber(max) {
	return Math.floor(Math.random() * (max));
}