console.log("accede");

var appShellFiles = [
    'pwaa/index.html',
    

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
