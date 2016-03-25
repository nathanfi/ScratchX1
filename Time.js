(function(ext) {
   // Cleanup function when the extension is unloaded
   ext._shutdown = function() {};

   // Status reporting code
   // Use this to report missing hardware, plugin or unsupported browser
   ext._getStatus = function() {
      return {
         status: 2,
         msg: 'Ready'
      };
   };
   ext._getDay = function() {
      var today = new Date()
      return today.getDay()
   }
   ext._getHours = function() {
      var today = new Date()
      return today.getHours()
   }
   ext._getMinutes = function() {
      var today = new Date()
      return today.getMinutes()
   }
   ext._getSeconds = function() {
      var today = new Date()
      return today.getSeconds()
   }
   ext._getHoursMinutes = function() {
      var today = new Date()
      return today.getHours() + ":" + today.getMinutes()
   }
   ext._getHoursMinutesSeconds = function() {
      var today = new Date()
      return today.getHours() + ":" today.getMinutes() + ":" + today.getSeconds()
   }
   ext.

   // Block and block menu descriptions
   var descriptor = {
      blocks: [
         ['r', 'Days', 'getDay']
         ['r', 'Hours', 'getHours']
         ['r', 'Minutes', 'getMinutes']
         ['r', 'Seconds', 'getSeconds']
         ['r', 'Time', 'getHoursMinutes']
         ['r', 'Time with Seconds', 'getHoursMinutesSeconds']
      ]
   };

   // Register the extension
   ScratchExtensions.register('Time', descriptor, ext);
})({});
