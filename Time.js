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

   // Block and block menu descriptions
   var descriptor = {
      blocks: [
         ['r', 'Get Days', 'getDay']
         ['r', 'Get Hours', 'getHours']
         ['r', 'Get Minutes', 'getMinutes']
         ['r', 'Get Seconds', 'getSeconds']
      ]
   };

   // Register the extension
   ScratchExtensions.register('Time', descriptor, ext);
})({});