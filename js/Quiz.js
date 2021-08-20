class Quiz {
  constructor(){
  }
 
 getState(){
   var gameStateRef = database.ref('gameState'); 
   gameStateRef.on("value",function(data){ 
   gameState = data.val();
    })
 }

 update(state){ 
   database.ref('/').update({
      gameState: state });
  } 
 
   async start(){ 
     if(gameState === 0){ 
       contestant = new Contestant (); 
  var contestantCountRef = await database.ref('contestantCount').once("value")
if(contestantCountRef.exists()){
  contestantCount = contestantCountRef.val();
  contestant.getCount();
}
    question = new Question();
    question.display();
     }
      } 
   

     play(){
      background("yellow");

      question.hide_elements();

   Contestant.getContestantinfo();

 if(allContestants !== undefined){

  textSize(28);
  fill("orange");
 text("Results are:-",300,30);

   textSize(28);
   fill("blue");
   text("Note:- Correct answers are highlited in green colour",150,230);

    for (var plr in allContestants){

      var correctAns = "1";

  if(correctAns === allContestants[plr].answer){
     fill("green")
          }
          else
     fill("red");
          }
      }
     }
    }
  
 