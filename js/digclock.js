        //Create a time data function
        function currentTime() {
            //Declare variables
            var d = new Date(); //Get current date
            var hr = d.getHours(); //Get current hours
            var min = d.getMinutes(); //Get current minutes
            var sec = d.getSeconds(); //get current seconds
            var ampm; //Declare empty variable to store AM or PM
            
            var utchr = d.getUTCHours(); //Get current GMT
            var timeDiff; //To store time difference between GMT hour and local hour
            var adjTimeDiff; //To store time difference converted to positive number
            var timeZone; //To store the 4 time zones (PT, MT, CT, ET)
            
            //Display all six image codes stored in the array
            document.getElementById("partners").innerHTML = imageList;

            //Add 0 to single digits for seconds
            if (sec < 10) {
                sec = "0" + sec;
            }
        
            //Add 0 to single digits for minutes
            if (min < 10) {
                min = "0" + min;
            }
        
            //Determine AM or PM string
            if (hr == 12) {
                ampm = "PM"; //Set to PM
            } else if ( hr > 12) {
                hr -= 12; //Deduct 12 from hours greater than 12 (military time)
                ampm = "PM"; //Set to PM
            } else {
                ampm = "AM"; //Set to AM
            }
 
            if (utchr > 12) {
                utchr -= 12;
            }

            timeDiff = utchr - hr; console.log(timeDiff);

            if (timeDiff < 0) {
                adjTimeDiff = timeDiff * -1;
            } else {
                adjTimeDiff = timeDiff;
            }

            if (adjTimeDiff == 11) {
                timeZone = "PT";
            } else if (adjTimeDiff == 10) {
                timeZone = "MT";
            } else if (adjTimeDiff == 9) {
                timeZone = "CT";
            } else if (adjTimeDiff == 8) {
                timeZone = "ET";
            } else {
                timeZone = "GMT";
            }

            //Assemble time format to display
            var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

            //Display current local time and time zone on HTML elements
            document.getElementById("clock").innerText = time; //adding time

            //Run time data funciton every 1 second
            setInterval(currentTime, 1000); //setting timer
        }

        //Initial run of time data function
        currentTime();