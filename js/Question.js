class Question{
  constructor(){
    this.input1 = createInput("Enter Your Name");
    this.input2 = createInput("Enter Your Option");
    this.button = createButton('Submit');
   this.title = createElement('h2');
   this.question = createElement('h3');
   this.option1 = createElement('h4');
   this.option2 = createElement('h4');
   this.option3 = createElement('h4');
   this.option4 = createElement('h4');

  }

  hide_elements(){
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.title.hide();
    
    }
display(){
  this.title.html("MY QUIZ GAME");
  this.title.position(350, 0);

  this.question.html("Question:-I work when I play and play when I work");
this.question.position(150,80);
this.option1.html("1:- Musician");
this.option1.position(150,100);
this.option2.html("2:-Nothing");
this.option2.position(150,120);
this.option3.html("3:-Memories");
this.option3.position(150,140);
this.option4.html("4:-Lightning");
this.option4.position(150,160);
  
  this.input1.position(150,250);
  this.input2.position(350,250);
  this.button.position(300,300);

  this.button.mousePressed(()=>{
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();

    contestant.name = this.input1.value();
    contestant.name = this.input2.value();
      
    contestantCount+=1;
 contestant.index = contestantCount;
   contestant.update()
  contestant.updateCount(contestantCount);
});

}
}