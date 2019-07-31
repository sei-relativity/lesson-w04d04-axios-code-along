console.log('Ready');

const unsplashURL =
  'https://api.unsplash.com/photos/random/?client_id=7651b17016e03b5339b0ee039d74fa1e3f0f4313e30beba6c8393765c95ddbd6';

const $wallpaperDiv = $('.wallpaper');
console.log($wallpaperDiv);

axios.get(unsplashURL).then(response => {
  console.log(response.data.urls.small);

  $wallpaperDiv
    // .css('background-image', `url(${response.data.urls.small})`)
    .css('background-image', 'http: //www.sarkarinaukrisearch.in/wp-content/uploads/2019/03/Beautiful-Wallpaper-1.jpg')

});