// Adds a stylesheet, located at the given path, to the head of the document
function includeStylesheet(path) {

   // Avoid adding the same stylesheet twice
   if (document.querySelector(`link[href="${path}"]`)) return;

   // Create the link element
   const link = document.createElement('link');
   link.rel   = 'stylesheet';
   link.href  = path;

   // Add the link to the head
   document.head.appendChild(link);

}


// [DIRTY] Replaces the script element calling this script with the contents of the given html file
function includeHTML(path) {
   
   fetch(path)
      .then ((response) => {
         if ( ! response.ok ) throw new Error(`Could not load file: ${response.status}`);
         return response.text();
      })
      .then ((html) => {
         container.outerHTML = html;
      })
      .catch((error) => {
         console.error(error);
         container.textContent = 'Failed to load content.';
      });

}

const devBanner = '/dev-files/dev-banner.html';
const devStyles = '/dev-files/dev-styles.css';

const container = document.querySelector('script[src="./dev-files/dev-banner.js"]');

// Do the thing
includeStylesheet(devStyles);
includeHTML(devBanner);