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


/* =============
STYLES
================ */

listItems.forEach(item => {
    item.style.backgroundColor = '#F6F6FE';
    item.style.borderRadius = '8px';
    item.style.display = 'flex';
    item.style.padding = '16px';
    item.style.margin = '24px';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'flex-start';
    item.style.gap = '16px';
    item.style.color = '#2E2F42';
});

const itemsUl = document.querySelectorAll('.item ul');

itemsUl.forEach(ul => {
    ul.style.paddingLeft = '0';

    const listItems = ul.querySelectorAll('li');
    listItems.forEach(li => {
        li.style.listStyle = 'none';
        li.style.width = '360px';
        li.style.height = '40px';
        li.style.flexShrink = '0';
        li.style.borderRadius = '4px';
        li.style.border = '1px solid #808080';
        li.style.marginBottom = '8px';
        li.style.padding = '8px 16px';
        li.style.lineHeight = '1.5'; 
        li.style.letterSpacing = '0.64px';
    });
});

const itemsHeading = document.querySelectorAll('.item h2');

itemsHeading.forEach( h2 => {
    h2.style.fontSize = '24px';
    h2.style.fontWeight = '600';
    h2.style.lineHeight = '1.3'; 
    h2.style.letterSpacing = '0.96px';
});


const body = document.querySelector('body');
body.style.backgroundColor = '#ffffff';
