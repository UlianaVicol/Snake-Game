// [Snake] > parent > [Head]

class Snake {

    //when creating a new snake -> attach a head to it
    constructor() {
        this.head = new Head()
        this.body = new Body()
        this.tail = new Tail()
    }

    // when rendering the SNAKE - ALSO 
    render() {
        this.head.render()
        this.body.render()
        this.tail.render()
    }
}