// ========================================== START CODING BELOW!!
    // Initialize Firebase
		var config = {
      apiKey: "AIzaSyD2NmKixoyKqg31cDlT5J9mvXdXCOBodF4",
      authDomain: "assignmentdb-ca952.firebaseapp.com",
      databaseURL: "https://assignmentdb-ca952.firebaseio.com",
      projectId: "assignmentdb-ca952",
      storageBucket: "assignmentdb-ca952.appspot.com",
      messagingSenderId: "626465455082"	};
      
  
      firebase.initializeApp(config);
      
      // Create a variable to reference the database.
      var database = firebase.database();
      // Initial Values
      var tname = "";
      var ttime = "";
      var tfrequency = 0;
      var tdestination = "";
  
      // Capture Button Click
      $("#2firedbGO").on("click", function(event) {
        event.preventDefault();
        // Grabbed values from text boxes
        tname = $("#tname-input").val().trim();
        tdestination = $("#tdestination-input").val().trim();
        ttime = $("#ttime-input").val().trim();
        tfrequency = $("#tfrequency-input").val().trim();
       
    
        // Code for handling the push
        database.ref().push({
          tname: tname,
          tdestination: tdestination,
          ttime: ttime,
          tfrequency: tfrequency,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
      });
      
      
      // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
    database.ref().on("child_added", function(childSnapshot) {
  
      var csv=childSnapshot.val()
  
  // Log everything that's coming out of snapshot
  
  
        console.log(csv.tname);
        console.log(csv.tdestination);
        console.log(csv.ttime);
        console.log(csv.tfrequency);
  
        $("#full-member-list").append("<tr><td>" + childSnapshot.val().tname +
          "</td><td>" + childSnapshot.val().tdestination +
          "</td><td>" + childSnapshot.val().ttime +
          "</td><td>" + childSnapshot.val().tfrequency + "</td></tr>");
  
              // Handle the errors
                 }, function(errorObject) {
                console.log("Errors handled: " + errorObject.code);
                 });
  
   database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
  
   var sv=snapshot.val()
              // Console.loging the last user's data
              console.log(sv.tname);
              console.log(sv.tdestination);
              console.log(sv.ttime);
              console.log(sv.tfrequency);
        
     
        $("#tname-display").text(sv.tname);
        $("#tdestination-display").text(sv.tdestination);
        $("#ttime-display").text(sv.ttime);
        $("#tfrequency-display").text(sv.tfrequency)
        
      });
      