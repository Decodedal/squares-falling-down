class Square{
    constructor(){
        this.height = 100 + 'px'
        this.width = 100 + 'px'
        this.x_position = Math.floor(Math.random()* document.body.clientWidth) + 1
        this.y_position = Math.floor(Math.random() * document.body.clientHeight) + 1
    }
    createRectangle(){
       let sqr= document.createElement('div')
       sqr.style.width = this.width;
       sqr.style.height = this.height;
       sqr.style.left = this.x_position + 'px';
       sqr.style.top = this.y_position + 'px';
       sqr.style.display = "flex"
       sqr.style.position = 'absolute'
       sqr.style.backgroundColor = 'red'
       sqr.style.flexDirection ='row'
       sqr.style.justifyContent = 'space-around'
       sqr.classList.add('sqr')
       document.body.appendChild(sqr)
    }
    changeColor(){
        this.style.backgroundColor = 'blue'
    }
}

const sqrOne = new Square;
sqrOne.createRectangle()
console.log(sqrOne.x_position)

const sqrTwo = new Square;
sqrTwo.createRectangle()
console.log(sqrTwo.x_position)

const sqrThree = new Square;
sqrThree.createRectangle()

let arr = [sqrOne,sqrTwo,sqrThree]

const squares = document.querySelectorAll('.sqr')    

function drop(sqr){
        const oridinalPosition = parseInt(sqr.style.top)
        let height = parseInt(sqr.style.top)
        height += 10
        sqr.style.top = height.toString() + 'px'
        if(height > 3000){
            sqr.style.top = oridinalPosition + 'px'
        }

}

squares.forEach(sqr=>{
    sqr.addEventListener('click',()=>{
      
        setInterval(()=>{
                 sqr.style.backgroundColor = 'blue'
                 drop(sqr)
                 console.log(sqr.style.top)
   },10)
 
        
    })
   

})
