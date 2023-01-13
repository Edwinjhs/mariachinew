### MARIACHI TEQUILA Y SON
Design by. Edwin Hernández

<p align=center>
	<img src="https://i.postimg.cc/Qd93SDRP/A5.png)">
</p>

- This project was generated with [Angular CLI], bootstrap, Swiper, Npx pagination, LOCALSTORAGE, Styles SASS
- implements
--LocalStorage
--Filter in galery component
--ShoppingCart 100% funtional with localStorage.

### 7 Components
  -header:
  -home
  -ours-plans
  -contact
  -aboutus
  -galery
  -footer

### 2 Services
- LocalService
- ProductService


------------

- The design is fully adapted to be used on both mobile and desktop devices.  RESPONSIVO 100%
- Se enlazo la API  de whatsapp usando el siguiente codigo
<p align=center>
	<img src="https://i.postimg.cc/HnccdRrh/code.png">
</p>

------------

### LocalStorage
The keys and the values stored with localStorage are always in the UTF-16 string format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings.

localStorage data is specific to the protocol of the document. In particular, for a site loaded over HTTP (e.g., http://example.com), localStorage returns a different object than localStorage for the corresponding site loaded over HTTPS (e.g., https://example.com).

For documents loaded from file: URLs (that is, files opened in the browser directly from the user's local filesystem, rather than being served from a web server) the requirements for localStorage behavior are undefined and may vary among different browsers.

In all current browsers, localStorage seems to return a different object for each file: URL. In other words, each file: URL seems to have its own unique local-storage area. But there are no guarantees about that behavior, so you shouldn't rely on it because, as mentioned above, the requirements for file: URLs remain undefined. So it's possible that browsers may change their file: URL handling for localStorage at any time. In fact some browsers have changed their handling for it over time.


------------
### You can FILTER images in the galery for evenet
