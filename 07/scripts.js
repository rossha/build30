const endpoint = 'pizza_request_dataset.json' || [];

const requestsList =  document.querySelector('.requests');
const pizzaRequests = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => pizzaRequests.push(...data))
  .then(populateList.bind(null, pizzaRequests, requestsList)); // ... means "spread"

function populateList(items = [], itemsList) {
 itemsList.innerHTML = items.map((item, i) => {
   return `
     <p data-index=${i} id='item${i}' class='request ${item.requester_received_pizza ? 'success' : ''}''>
       ${item.request_title}
     </p>
   `;
  }).join('');
 }




//requester_received_pizza
// Green if yes, Red if no
