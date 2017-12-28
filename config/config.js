/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			timezone: "America/Denver",
		},
		/*
		{
			module: "calendar",
			header: "Ty's Agenda",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "user-circle-o ",
						url: "https://calendar.google.com/calendar/ical/tylerb.media%40gmail.com/public/basic.ics",
					},
				]
			}
		},*/
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Denver, CO",
				locationID: "5419384",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "12cd12d12d56455a4f070b9e14061ea9"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Denver, CO",
				locationID: "5419384",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "12cd12d12d56455a4f070b9e14061ea9"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Tech Crunch",
						url: "http://feeds.feedburner.com/TechCrunchIT"
					},
					{
						title: "Smashing Magazine",
						url: "https://www.smashingmagazine.com/feed/"
					},
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/index.html"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
