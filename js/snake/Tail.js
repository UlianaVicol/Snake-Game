class Tail {
    render() {
        document.body.innerHTML += `
        <div
            style="
            width: 64px;
            height: 64px;
            background: url(img/snake.png);
            background-position: -192px -130px;
            "
        ></div>
        `
    }
}