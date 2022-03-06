export default () => {

    const container = document.createElement('div');

    const template = `<h1> ABOUT US </h1>
                    <p>AQUI É O ABOUT </p>
                    <ul><li> saco</li><li> mochila</li><ul>
                    <h2>fim</h2>`;

    container.innerHTML = template;
    return container;
}