class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
      this.answer = 0;
    }
  
    getCount(){
      var contestantCountref = database.ref('contestantCount');
      contestantCountref.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getContestantInfo(){
      var contestantInforef = database.ref('contestants');
      contestantInforef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
  