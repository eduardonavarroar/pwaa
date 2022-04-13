var appShellFiles = [
    '/index.html',
    '/article-details.html',
    '/log-in.html',
    '/privacy-policy.html',
    '/sign-up.html',
    '/terms-conditions.html',
    '/css/bootstrap.css',
    '/css/fontawesome-all.css',
    '/css/magnific-popup.css',
    '/css/styles.css',
    '/css/swiper.css',
    '/images/article-details-large.jpg',
    '/images/article-details-small.jpg',
    '/images/customer-logo-1.png',
    '/images/customer-logo-2.png',
    '/images/customer-logo-3.png',
    '/images/customer-logo-4.png',
    '/images/customer-logo-5.png',
    '/images/customer-logo-6.png',
    '/images/description-1.png',
    '/images/description-2.png',
    '/images/description-3.png',
    '/images/details-lightbox.png',
    '/images/details.png',
    '/images/down-arrow.png',
    '/images/favicon.png',
    '/images/header-software-app.png',
    '/images/features-1.png',
    '/images/features-2.png',
    '/images/features-3.png',
    '/images/logo.svg',
    '/images/testimonial-1.jpg',
    '/images/testimonial-2.jpg',
    '/images/testimonial-3.jpg',
    '/images/testimonial-4.jpg',
    '/images/up-arrow.png',
    '/images/video-image.png',
    '/js/bootstrap.min.js',
    '/js/jquery.easing.min.js',
    '/js/jquery.magnific-popup.js',
    '/js/jquery.min.js',
    '/js/popper.min.js',
    '/js/scripts.js',
    '/js/swiper.min.js',
    '/js/validator.min.js',

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
