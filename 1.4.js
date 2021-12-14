var myPlayer = {
    pName : "WizardMan",
    pHealth : 100,
    pMagic : 100,
    pQuestsCompleted : ["Intro","SecretBanana"],
    
    pMagicAttack : function( magicUsed ) {
        this.pMagic = this.pMagic - magicUsed;
        console.log("New magic level: " + this.pMagic);
    },
    
    pCompleteQuest : function( questName ) {
        if( this.pQuestsCompleted.indexOf( questName ) == -1 ){
            this.pQuestsCompleted.push( questName );
            console.log(questName + " has been added to Quests Completed.");
        }
        else {
            console.log(questName + " is already in Quests Completed.");
        }
    }
}