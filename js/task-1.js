const listItems = document.querySelectorAll('.item');

let counter = 0;
listItems.forEach (() => counter ++);
console.log('Number of categories:', counter);

listItems.forEach(li => {
    const heading = li.querySelector('h2');

    const allLiElem = li.querySelectorAll('li');
    let counter = 0;
    allLiElem.forEach(() => counter ++);

    console.log('Category:', heading.textContent);
    console.log('Elements:', counter);
});

