const main = document.querySelector('main');
const button1 = document.getElementById("bt1");

const template1 = `
    <section>
        <h3>Foo</h3>
    </section>
`;

button1.addEventListener('click', function() {
    const text1 = document.createElement("bt1");
    text1.innerHTML = template1;
    main.appendChild(text1);
})

const button2 = document.getElementById("bt2");

const template2 = `
    <section>
        <h3>Bar</h3>
    </section>
`;

button2.addEventListener('click', function() {
    const text2 = document.createElement("bt2");
    text2.innerHTML = template2;
    main.appendChild(text2);
})

const button3 = document.getElementById("bt3");

const template3 = `
    <section>
        <h2>FooBar</h2>
    </section>
`;

button3.addEventListener('click', function() {
    const text3 = document.createElement("bt3");
    text3.innerHTML = template3;
    main.appendChild(text3);
})