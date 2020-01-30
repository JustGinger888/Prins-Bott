const config = require("/Users/ethan/Desktop/Computing Discord Bot/config");
var GphApiClient = require('giphy-js-sdk-core')
const client = GphApiClient(config.giphyToken)

module.exports.run = async (bot, message, args) => {

	const searchForGif = (gifName) => {
		return client.search('gifs', {"q": gifName, "limit": 10})
			   .then((response) => {
				 var gif = response.data[Math.floor(Math.random() * 10)].url;
				 return gif;
			   })
			   .catch((err) => {
				 return err;
			   })
	  }

		var searchPromise = searchForGif(args);

		searchPromise.then((gif) => {
		  message.channel.send(gif);
		})

	//message.channel.send(gif);
	
  
  };
  
  // Help Object
  module.exports.help = {
	name: "Giphy",
	description: "Searches Giphy to make your memes not just dreams",
	usage: "!giphy (text)",
	category: "Media",
	aliases: [""]
  };