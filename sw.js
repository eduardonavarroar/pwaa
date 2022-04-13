var appShellFiles = [
    'pwaa/index.html',
    'pwaa/article-details.html',
    'pwaa/log-in.html',
    'pwaa/privacy-policy.html',
    'pwaa/sign-up.html',
    'pwaa/terms-conditions.html',
    'pwaa/css/bootstrap.css',
    'pwaa/css/fontawesome-all.css',
    'pwaa/css/magnific-popup.css',
    'pwaa/css/styles.css',
    'pwaa/css/swiper.css',
    'pwaa/images/article-details-large.jpg',
    'pwaa/images/article-details-small.jpg',
    'pwaa/images/customer-logo-1.png',
    'pwaa/images/customer-logo-2.png',
    'pwaa/images/customer-logo-3.png',
    'pwaa/images/customer-logo-4.png',
    'pwaa/images/customer-logo-5.png',
    'pwaa/images/customer-logo-6.png',
    'pwaa/images/description-1.png',
    'pwaa/images/description-2.png',
    'pwaa/images/description-3.png',
    'pwaa/images/details-lightbox.png',
    'pwaa/images/details.png',
    'pwaa/images/down-arrow.png',
    'pwaa/images/favicon.png',
    'pwaa/images/header-software-app.png',
    'pwaa/images/features-1.png',
    'pwaa/images/features-2.png',
    'pwaa/images/features-3.png',
    'pwaa/images/logo.svg',
    'pwaa/images/testimonial-1.jpg',
    'pwaa/images/testimonial-2.jpg',
    'pwaa/images/testimonial-3.jpg',
    'pwaa/images/testimonial-4.jpg',
    'pwaa/images/up-arrow.png',
    'pwaa/images/video-image.png',
    'pwaa/js/bootstrap.min.js',
    'pwaa/js/jquery.easing.min.js',
    'pwaa/js/jquery.magnific-popup.js',
    'pwaa/js/jquery.min.js',
    'pwaa/js/popper.min.js',
    'pwaa/js/scripts.js',
    'pwaa/js/swiper.min.js',
    'pwaa/js/validator.min.js',

  ];
  
  self.addEventListener('install', event => {  
  
    const endInstall = caches.open('box').then( cache =>{  
      return cache.addAll(appShellFiles);
    });
  
    event.waitUntil( endInstall);
  
    //self.skipWaiting();
  });
  
  self.addEventListener('fetch', e =>{
  
    const respuesta = caches.open( 'box' ).then( cache => {
  
           fetch( e.request ).then( newRes => 
                   cache.put( e.request, newRes ));
  
           return cache.match( e.request );
  
       });
  
       e.respondWith( respuesta );
  });
