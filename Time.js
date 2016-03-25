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
   ext._getHoursMinutes = function() {
      var today = new Date()
      return today.getHours() + ":" + today.getMinutes()
   }
   ext._getHoursMinutesSeconds = function() {
      var today = new Date()
      return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
   }
   ext._getHoursPM = function() {
      var today = new Date()
      var hours = today.getHours()
      if (today < 12 && today > 0) {
         return hours + " AM"
      } else if (today == 12) {
         return hours + " PM"
      } else if (today == 0) {
         return "12 AM"
      } else if (today > 12) {
         return hours-12 + " PM"
      }
   }
   ext._time = function(menu) {
      today = new Date()
      if (menu = 'Day') {
         return today.getDay()
      } else if (menu = 'Hour') {
         return today.getHours()
      } else if (menu = 'Minute') {
         return today.getMinutes()
      } else if (menu = 'Second') {
         return today.getSeconds()
      } else if (menu = 'Hour 12 Clock') {
      var hours = today.getHours()
      if (today < 12 && today > 0) {
         return hours + " AM"
      } else if (today == 12) {
         return hours + " PM"
      } else if (today == 0) {
         return "12 AM"
      } else if (today > 12) {
         return hours-12 + " PM"
      }
      }
   }

   // Block and block menu descriptions
   var descriptor = {
      blocks: [
         ['r', 'Time', 'getHoursMinutes']
         ['r', 'Time with Seconds', 'getHoursMinutesSeconds']
         ['r', 'Current %m.time', 'time']
      ],
      menus: {
         time: ['Day', 'Hour', 'Hour 12 Clock' 'Minute', 'Second']
      }
   };

   // Register the extension
   ScratchExtensions.register('Time', descriptor, ext);
})({});
