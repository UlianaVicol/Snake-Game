class Head {
    render() {
        document.body.innerHTML += `
        <div
            style="
            width: 64px;
            height: 64px;
            background: url(img/snake.png);
            background-position-x: -192px;
            "
        ></div>
        `
    }
}