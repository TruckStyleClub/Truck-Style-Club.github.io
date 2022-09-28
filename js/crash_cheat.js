var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '你不加车队愁啥';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '赶紧给我加车队奥';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
