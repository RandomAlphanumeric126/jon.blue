document.addEventListener('DOMContentLoaded', () => {

   const searchForm   = document.getElementById('searchForm'  );
   const engineSelect = document.getElementById('engineSelect');
   const searchBox    = document.getElementById('searchBox'   );

   let query     = searchBox.value;
   let targetURL = engineSelect.value
                 || engineSelect.querySelector('option').value;

   // Send focus to searchbox by default and clear query value on refresh
   searchBox.value = "";
   searchBox.focus();

   // Function to submit the query to the target URL
   function submitQuery() {
      if (searchBox.value && targetURL) {
         window.location.href = targetURL + encodeURIComponent(query);
      }
      else searchBox.focus();
   }

   
   // Default form submission
   searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitQuery();
   });


   // Form submission on 'Enter' key
   searchForm.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && targetURL) {
         submitQuery();
      }
   });


   // Dismiss focus from engine selector back to searchbox on 'Escape' key
   engineSelect.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
         searchBox.focus()
      }
   });


   // Dismiss focus from searchbox on 'Escape' key
   searchBox.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && targetURL) {
      searchBox.blur();
      }
   });


   // Encode the query for url safety
   searchBox.addEventListener('input', (e) => {
      query = e.target.value;
   });

   
   // Update the target URL when user selects an engine
   engineSelect.addEventListener('change', (e) => {
      targetURL = e.target.value;
   });
});