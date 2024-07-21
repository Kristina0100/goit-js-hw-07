const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


const createImageGallery = imageData => {
  return ` 
  <li class="gallery-item">
    <img src="${imageData.url}" alt="${imageData.alt}">
  </li>
  `;
};

const imageGalleryTemplate = images.map(imgInfo => createImageGallery(imgInfo)).join('');

const galleryListImg = document.querySelector('.gallery');

galleryListImg.insertAdjacentHTML('afterbegin', imageGalleryTemplate);


/* =============
STYLES
================ */

galleryListImg.style.display = 'flex';
galleryListImg.style.width = '1440px';
galleryListImg.style.height = '848px';
galleryListImg.style.padding = '100px 156px';
galleryListImg.style.justifyContent = 'center';
galleryListImg.style.alignItem = 'flex-start';
galleryListImg.style.flexWrap = 'wrap';
galleryListImg.style.rowGap = '48px';
galleryListImg.style.columnGap = '24px';


const itemsImg = galleryListImg.querySelectorAll('.gallery-item');

itemsImg.forEach( li => {
  li.style.listStyle = 'none';

  const listItems = li.querySelectorAll('img');
  listItems.forEach(img => {
    img.style.width = '360px';
    img.style.height = '300px';
    img.style.flexShrink = '0';
  });
});