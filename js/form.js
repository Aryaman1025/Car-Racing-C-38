class Form {

    constructor(){
        this.input = createInput("Name ");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
    }

    hide(){
        this.greeting.hide()
        this.input.hide()   
        this.button.hide()
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2-100,10);
        

       
        this.input.position(displayWidth/2-100,100);
        this.button.position(displayWidth/2-140,100);

        this.button.mousePressed(()=>{
        
        this.input.hide();
        this.button.hide();
         
        player.name = this.input.value();

        playerCount = playerCount + 1;
        player.index = playerCount;
        this.greeting.html("Hello " + player.name + " Welcome to car Racing Game");
        this.greeting.position(displayWidth/2-140,250);

        player.update();
        player.updateCount(playerCount);

       
        
        })
    }

}