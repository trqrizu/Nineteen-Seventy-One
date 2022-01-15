function show() {

  var name = document.getElementById("name").value;
  var email= document.getElementById("email").value;
  var subject= document.getElementById("subject").value;
  var message= document.getElementById("message").value;

    firebase.database().ref('User/' + name).set({
          name : name,
          email : email,
          subject : subject,
          message : message
        }, function(error) {
          if (error) {
            alert("Sorry");
          }
          else {
              alert("DONE");
          }
        });
}

function comment_blog1() {
  var time= firebase.database.ServerValue.TIMESTAMP;
  var name= document.getElementById("name").value;
  var comment= document.getElementById("comment").value;
    firebase.database().ref('Comment_blog1/' + name).set({
          time : time,
          name : name,
          comment : comment
        }, function(error) {
          if (error) {
            alert("Sorry");
          }
          else {
              alert("DONE");
          }
        });
}

function comment_blog2() {
  var time= firebase.database.ServerValue.TIMESTAMP;
  var name= document.getElementById("name").value;
  var comment= document.getElementById("comment").value;
    firebase.database().ref('Comment_blog2/' + name).set({
          time : time,
          name : name,
          comment : comment
        }, function(error) {
          if (error) {
            alert("Sorry");
          }
          else {
              alert("DONE");
          }
        });
}

function show_comment_blog1() {
  
  firebase.database().ref('Comment_blog1/').once('value').then(function (snapshot) {
    snapshot.forEach(function (child) {
      let dc = document.getElementById("demo-comment").cloneNode(true);
      dc.children[0].innerHTML = child.val().name;
      dc.children[1].innerHTML = child.val().comment;
      document.getElementById('comment-section').appendChild(dc);
      dc.style.display = "block";
      
    });
    
  }, function (error) {
    if (error) {
    } else {
      
    }
  });
  
  // let demo_disappear = document.getElementById("comment-section");
  // demo_disappear.children[1].style.display = "none";
}