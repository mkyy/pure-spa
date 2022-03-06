export default () => {

    const container = document.createElement('div');

    const template = `<h1> WHO WE ARE ?</h1>
                    <p>ENTRE em contato conosco</p>
                    <ul><li> saco</li><li> mochila</li><ul>
                    <h2>fim</h2>`;

    container.innerHTML = template;
    return container;
}