import React from 'react';

const Home2 = () => {

//   //<picture>
//   <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
//   <source media="(min-width:465px)" srcset="img_white_flower.jpg">
//   <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
// </picture>
  return (
    <div>
      <picture>
        <source media={"(min-width:650px)"} srcSet='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' />
      </picture>
    </div>
  );
};

export default Home2;