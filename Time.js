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

   ext.time = function() {
      var timeMenu = 'Day of Week'
      var today = new Date()
      if (timeMenu == 'Day of Week') {
         var day = today.getDay()
         if (day == 0 || day == 7) {
            return 'Sunday';
         } else if (day == 1) {
            return 'Monday';
         } else if (day == 2) {
            return 'Tuesday';
         } else if (day == 3) {
            return 'Wednesday';
         } else if (day == 4) {
            return 'Thursday';
         } else if (day == 5) {
            return 'Friday';
         } else if (day == 6) {
            return 'Saturday';
         }
      } else if (timeMenu == 'Minute') {
         return today.getMinutes();
      } else if (timeMenu == 'Second') {
         return today.getSeconds();
      } else if (timeMenu == 'Hour') {
         var hours = today.getHours();
         if (today <= 12 && today > 0) {
            return hours;
         } else if (today == 0) {
            return 12;
         } else if (today > 12) {
            return hours - 12;
         }
      } else if (timeMenu == 'Hour 24 Clock') {
         return today.getHours();
      } else if (timeMenu == 'Date') {
         return today.getDate();
      } else if (timeMenu == 'Month') {
         return today.getMonth();
      } else if (timeMenu == 'Year') {
         return today.getFullYear();
      }
   }

   ext.displayTime = function() {
     var displayMenu = 'Hours:Minutes'
      var today = new Date();
      if (displayMenu == 'Hours:Minutes') {
         return today.getHours() + ":" + today.getMinutes();
      } else if (displayMenu == 'Hours:Minutes:Seconds') {
         return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      } else if (displayMenu == 'Month/Date/Year') {
         return today.getMonth() + "/" + today.getDate() + "/" + today.getYear();
      } else if (displayMenu == 'Date/Month/Year') {
         return today.getDate() + "/" + today.getMonth() + "/" + today.getYear();
      } else if (displayMenu == 'Month/Date') {
         return today.getMonth() + "/" + today.getDate() + "/" + today.getYear();
      } else if (displayMenu == 'Date/Month') {
         return today.getDate() + "/" + today.getMonth() + "/" + today.getYear();
      }
   }

   // Block and block menu descriptions
   var descriptor = {
      blocks: [
         ['r', 'Display %m.displayMenu', 'displayTime'],
         ['r', 'Current %m.timeMenu', 'time']
      ],
      menus: {
         timeMenus: ['Day of Week', 'Hour', 'Hour 24 Clock', 'Minute', 'Second', 'Date' 'Month', 'Year'],
         displayMenu: ['Hours:Minutes', 'Hours:Minutes:Seconds', 'Month/Date', 'Date/Month', 'Month/Date/Year', 'Date/Month/Year']
      }
   };

   // Register the extension
   ScratchExtensions.register('Time', descriptor, ext);
})({});
