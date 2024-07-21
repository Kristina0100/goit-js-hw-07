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
console.log(galleryListImg);

// galleryListImg.style.display = 'flex';
// galleryListImg.style.rowGap = '48px';
// galleryListImg.style.columnGap = '24px';
// galleryListImg.style.flexWrap = 'wrap';
// galleryListImg.style.listStyle = 'none';
// galleryListImg.style.padding = '0';
// galleryListImg.style.margin = '0';


// const imgGalleryItems = galleryListImg.querySelectorAll('.gallery-item');
// imgGalleryItems.forEach(item => {
//   item.style.flexShrink = '0';
// });
