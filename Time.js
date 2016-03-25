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
         return hours - 12 + " PM"
      }
   }
   ext._time = function(timeMenu) {
      today = new Date()
      if (timeMenu = 'Day') {
         var day = today.getDay()
         if (day = 0 || day = 7) {
            return 'Sunday'
         } else if (day = 1) {
            return 'Monday'
         } else if (day = 2) {
            return 'Tuesday'
         } else if (day = 3) {
            return 'Wednesday'
         } else if (day = 4) {
            return 'Thursday'
         } else if (day = 5) {
            return 'Friday'
         } else if (day = 6) {
            return 'Saturday'
         }
      } else if (timeMenu = 'Hour') {
         return today.getHours()
      } else if (timeMenu = 'Minute') {
         return today.getMinutes()
      } else if (timeMenu = 'Second') {
         return today.getSeconds()
      } else if (timeMenu = 'Hour 12 Clock') {
         var hours = today.getHours()
         if (today < 12 && today > 0) {
            return hours + " AM"
         } else if (today == 12) {
            return hours + " PM"
         } else if (today == 0) {
            return "12 AM"
         } else if (today > 12) {
            return hours - 12 + " PM"
         }
      } else if (timeMenu = 'Date') {
         return today.getDate()
      } else if (timeMenu = 'Month') {
         return today.getMonth()
      } else if (timeMenu = 'Year') {
         return today.getYear() + 1900
      }
   }

   ext._displayTime = function(displayMenu) {
      var today = new Date()
      if (displayMenu = 'Hours:Minutes') {
         return today.getHours() + ":" + today.getMinutes()
      } else if (displayMenu = 'Hours:Minutes:Seconds') {
         return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      } else if (displayMenu = 'Month/Date/Year') {
         return today.getMonth() + "/" + today.getDate() + "/" + today.getYear()
      } else if (displayMenu = 'Date/Month/Year') {
         return today.getDate() + "/" + today.getMonth() + "/" + today.getYear()
      }
   }
   
   // Block and block menu descriptions
   var descriptor = {
      blocks: [
         ['r', 'Time', 'getHoursMinutes']
         ['r', 'Time with Seconds', 'getHoursMinutesSeconds']
         ['r', 'Display %m.displayMenu', 'displayTime', 'Hours:Minutes']
         ['r', 'Current %m.timeMenu', 'time', 'Day']
      ],
      menus: {
         timeMenu: ['Day', 'Hour', 'Hour 12 Clock', 'Minute', 'Second', 'Date' 'Month', 'Year'],
         displayMenus: ['Hours:Minutes', 'Hours:Minutes:Seconds']
      }
   };
   
   // Register the extension
   ScratchExtensions.register('Time', descriptor, ext);
})({});
