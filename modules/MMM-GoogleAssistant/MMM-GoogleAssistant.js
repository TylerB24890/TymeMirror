/* Magic Mirror
 * Module: MMM-GoogleAssistant
 *
 * By Gaurav
 *
 */

Module.register("MMM-GoogleAssistant", {
  // Module config defaults.
  defaults: {

    header: "Google Asistant",
    maxWidth: "100%",
		publishKey: 'pub-c-b7e0c189-0969-4105-857a-9fdf1466e1ee',
		subscribeKey: 'sub-c-fc4f4ea8-e4cb-11e7-ab5b-be68b02b0975',
  },

  // Define start sequence.
  start: function() {
    Log.info('Starting module: Google Assistant Now');
    this.assistantActive = false;
    this.processing = false;
    this.userQuery = null;
    this.sendSocketNotification('INIT', 'handshake');
  },

  getDom: function() {
    Log.log('Updating DOM for GA');
    var wrapper = document.createElement("div");

    if (this.assistantActive == true) {
      if (this.processing == true) {
        wrapper.innerHTML = "<img src='MMM-GoogleAssistant/assistant_active.png'></img><br/>" + this.userQuery;
      } else {
        wrapper.innerHTML = "<img src='MMM-GoogleAssistant/assistant_active.png'></img>";
      }

    } else {
      wrapper.innerHTML = "<img src='MMM-GoogleAssistant/assistant_inactive.png'></img>";
    }
    return wrapper;
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification == 'ON_CONVERSATION_TURN_STARTED') {
      this.assistantActive = true;
    } else if (notification == 'ON_CONVERSATION_TURN_FINISHED') {
      this.assistantActive = false;
      this.processing = false;
    } else if (notification == 'ON_RECOGNIZING_SPEECH_FINISHED') {
      this.userQuery = payload;
      this.processing = true;
    }
    this.updateDom(500);
  },
});
