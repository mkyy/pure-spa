export default () => {

    const container = document.createElement('div');

    const template = `<h1> MEU TITULO </h1>
                    <p> seja bem vindo ao home </p>
                    <ul><li> saco</li><li> mochila</li><ul>
                    <h2>fim</h2>`;

    container.innerHTML = template;
    return container;
}