$( document ).ready(function() {
  
  // Global
  var audio = document.getElementById("audio-control");

  count = 0;

  $("#record-img").click(function(){
    if(count % 2 == 0){
      document.getElementById('listening').style.display = 'none';
      annyang.pause();
    } else if (count % 2 != 0){
      document.getElementById('listening').style.display = '';
      annyang.resume();
    }
    count++;
  });

 $("#hiphop" ).click(function() {
    var audio = document.getElementById("audio-control")
    audio.play();
    //showStopBtn();
    //hidePlayBtn();
  });

 $("#stop" ).click(function() {
    var audio = document.getElementById("audio-control")
    audio.pause();
    //showPlayBtn();
    hideStopBtn();
  });

  function showPlayBtn(){
    var playBtn = document.getElementById('hiphop');
    playBtn.style.display = 'inline-block';
  }

  function hidePlayBtn(){
    var playBtn = document.getElementById('hiphop');
    playBtn.style.display = 'none';
  }

  function showStopBtn() {
    var stopBtn = document.getElementById("stop");
    var ticker = document.getElementById("news");
    ticker.style.display = 'none';
    $( "#stop" ).fadeIn( "slow", function() {
      
      stopBtn.style.display = 'inline-block';
      
      document.getElementById("body-color").style.animationName ='stretch';
    });
  }

  function hideStopBtn(){
    var stopBtn = document.getElementById("stop");
    var ticker = document.getElementById("news");
    
    $( "#stop" ).fadeOut( "slow", function() {
      stopBtn.style.display = 'none';
      ticker.style.display = '';
      document.getElementById("body-color").style.animationName ='';
       $("#now-playing").html("");
    });
  }

  function nowPlaying(num){
    $("#now-playing").html("");
    switch(num){
      case 0:
        $("#now-playing").append("<span>Dre Day Ft. Snoop Dogg -Dr. Dre</span>");
        break;
      case 1:
        $("#now-playing").append("<span>Big Poppa - Notorious B.I.G.</span>");
        break;
      case 2:
        $("#now-playing").append("<span>Echoes In Rain - Enya</span>");
        break;
      case 3:
        $("#now-playing").append("<span>Straight Up - Paula Abdul</span>");
        break;
      case 4:
        $("#now-playing").append("<span>Freak Me - Silk</span>");
        break;
      default:
        $("#now-playing").html("");
    }
  }

  if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'Play *val' : function(val){
      val = val.toLowerCase();
      if(val == 'hip hop'){
        var randomNum = Math.floor((Math.random() * 2) + 1);
        if(randomNum === 1){
          audio.setAttribute("src", "dre.mp3");
          showStopBtn();
          audio.play();
          nowPlaying(0);
        } else if (randomNum === 2){
          audio.setAttribute("src", "big.mp3");
          showStopBtn();
          audio.play();
          nowPlaying(1);
        } 
      } else if(val == 'relaxing music'){
        audio.setAttribute("src", "enya.mp3");
        showStopBtn();
        audio.play();
        nowPlaying(2);
      } else if(val == 'pop'){
        audio.setAttribute("src", "paula.mp3");
        showStopBtn();
        audio.play();
        nowPlaying(3); 
      } else if(val == 'love songs'){
        audio.setAttribute("src", "silk.mp3");
        showStopBtn();
        audio.play();
        nowPlaying(4);
      }  else if(val == 'nothing'){
        hideStopBtn();
        audio.pause();
      } else {
        val = '';
      }
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  annyang.debug();

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  }

}); // end of document









