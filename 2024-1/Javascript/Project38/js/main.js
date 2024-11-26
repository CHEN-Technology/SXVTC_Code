const sentence =
	"A Man and a Satyr having struck up an acquaintance, sat down together to eat.";

const words = sentence.split(" ");

words.reverse();
// console.log(words);

const capitalizedWords = words.map(
	(word) => word.charAt(0).toUpperCase() + word.slice(1)
);

const reversedSentence = capitalizedWords.join(" ");
console.log(reversedSentence);
