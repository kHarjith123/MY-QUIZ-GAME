class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountref = await database.ref('contestantCount').once("value");
        if(contestantCountref.exists()){
            contestantCount = contestantCountref.val();
          contestant.getCount();
        }
        question = new Question();
        question.display();
      }
  
    }
  
    play(){
      question.hide();

      background("Yellow");
      fill(0);
      textSize(30);
      text("result of the quiz",340,50);
      text("----------------------------" , 320, 65);

      
      Contestant.getContestantInfo();
  
      
      if(allContestants !== undefined){
       debugger
       var display_answers = 230;

       fill("blue");
       textSize(20);
       text(" NOTE : Contestants who are answered correctly are highlighted in Green colour" , 130 , 230) ;

       for (var plr in allContestants){
           debugger
           var CorrectAns = "2";

           if(CorrectAns === allContestants[plr].answer)
           fill("green");
         else
         
             fill("red");

             display_answers += 30;
             textSize(20);
             text(allContestants[plr].name + ":" + allContestants[plr].answer,250,display_answers);

           
       }
  
      }
    }
  
}
  