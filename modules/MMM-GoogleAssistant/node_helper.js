/* Magic Mirror
 * Module: MMM-GA
 *
 * By Gaurav
 *
 */
'use strict';

var NodeHelper = require("node_helper");
var PubNub = require('pubnub');

module.exports = NodeHelper.create({

  initGoogleAssistant: function() {
    var self = this;
    this.pubnub = new PubNub({
      //publishKey,subscribeKey
      publishKey: 'pub-c-b7e0c189-0969-4105-857a-9fdf1466e1ee',
      subscribeKey: 'sub-c-fc4f4ea8-e4cb-11e7-ab5b-be68b02b0975',
    });

    this.pubnub.addListener({
      status: function(statusEvent) {
        if (statusEvent.category === "PNConnectedCategory") {
          //publishSampleMessage();
        }
      },
      message: function(message) {
        if (message.message === 'ON_CONVERSATION_TURN_STARTED') {
          self.sendSocketNotification('ON_CONVERSATION_TURN_STARTED', null);
        } else if (message.message === 'ON_CONVERSATION_TURN_FINISHED') {
          self.sendSocketNotification('ON_CONVERSATION_TURN_FINISHED', null);
        } else if (message.message.includes('ON_RECOGNIZING_SPEECH_FINISHED')) {
          var query = message.message.split(":");
          self.sendSocketNotification('ON_RECOGNIZING_SPEECH_FINISHED', query[1]);
        }
      },
      presence: function(presenceEvent) {
        // handle presence
      }
    });

    this.pubnub.subscribe({
      channels: ['magicmirror']
    });
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === 'INIT') {
      console.log("now initializing assistant");
      this.initGoogleAssistant();
    }
  }

});
