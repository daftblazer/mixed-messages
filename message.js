//Random Motivational Quotes Generator

//Each Quote Will Be Stored As A Variable
const quote1 = 'It always seems impossible until its done';
const quote2 = 'Start where you are. Use what you have. Do what you can';
const quote3 = 'Quality is not an act, it is a habit';
const quote4 = 'Life is 10% what happens to you and 90% how you react to it';
const quote5 = 'When something is important enough, you do it even if the odds are not in your favor';
const quote6 = 'Only I can change my life. No one can do it for me';
const quote7 = 'Problems are not stop signs, they are guidelines';
const quote8 = 'The first step towards success is taken when you refuse to be a captive of the environment in which you first find yourself';

//Store the quotes in an array
const motivationalQuotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8];

//Choosing a random quote
const randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * motivationalQuotes.length);
    return console.log(motivationalQuotes[randomNumber]);
}

//Displaying the random quote to the console
randomQuote();