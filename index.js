// <!--
//             You are creating the "shopping cart experience" for a Online Marketplace.
//             You have the list of the available books from the current API:
//             https://striveschool-api.herokuapp.com/books
//             What you have to do is:
//             0) Get all the products from the API using a fetch
//             1) Display the list of items available on the page using template literals `` and .forEach
//             2) Add a "add to cart button"
//             3) When the button is pressed, change the style of the item and add it to another list
//             4) Add "skip" button next to each item
//             5) When pressed, the button should remove from the page the item not interesting from the user
//             6) Add a "search bar". When the user types more than 3 chars, you should filter the content of the page to show only the items with a matching name (hint: use .filter method)
//             7) Allow the user to delete items from the cart list

//             [EXTRA]
//             8) Add a "clean cart" button, to clean the whole list.
//             9) Create a second "detail page" for the product. When the user clicks on a product name, the app should redirect him to the secondary page, passing the ASIN in query string
//             10) In page "detail" show some details of the selected product (https://striveschool-api.herokuapp.com/books/1940026091 to fetch the details of a specific book)
//         -->

// 1------gets all products in the list-----------
const getData = () => {
	fetch('   https://striveschool-api.herokuapp.com/books')
		.then((res) => {
			console.log(res);
			return res.json();
		})
		.then((books) => {
			const row = document.querySelector('.row');
			// console.log(books);
			books.forEach((book) => {
				console.log(book);
				const { img, price, title } = book;
				displayProducts(img, price, title);
			});
		});
};

// 2.displaying al the products
function displayProducts(a, b, c) {
	const row = document.querySelector('.row');
	return (row.innerHTML += `
                    <div class="col-12 col-sm-6 col-md-4 py-2">
                        <div class="card" >
                            <img src="${a}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Title of Book: ${c}</h5>
                                <p class="card-text">price: ${b}</p>
								<button type="button" class="btn btn-success addCart" onclick = addCard(event)>Add to cart</button>
                            </div>

                        </div>
                    </div> `);
}
const addCard = (e) => {
	let card = e.target.closest('.card');
	let button = e.target.closest('.card').children[1].children[2];
	button.innerHTML = 'Remove from cart';
	// console.log(card);
	const row = document.querySelector('.row-add-card');
	row.appendChild(card);
};

// let btn = document.querySelector('.btn');
// console.log(btn);
// btn.addEventListener('click', function () {
// 	alert('clicked');
// });
function getInput() {
	let val = document.getElementById('input_id').value;

	console.log(val);
	fetch('   https://striveschool-api.herokuapp.com/books')
		.then((res) => {
			console.log(res);
			return res.json();
		})
		.then((books) => {
			const row = document.querySelector('.row');
			// console.log(books);
			books.forEach((book) => {
				console.log(book);
				const { img, price, title } = book;
				if (val.length >= 2) {
					if (title.toLowerCase().includes(val.toLowerCase())) {
						return (row.innerHTML += `
                    <div class="col-12 col-sm-6 col-md-4 py-2">
                        <div class="card" >
                            <img src="${img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Title of Book: ${title}</h5>
                                <p class="card-text">price: ${price}</p>
								<button type="button" class="btn btn-success addCart" onclick = addCard(event)>Add to cart</button>
                            </div>

                        </div>
                    </div> `);
					}
				}
			});
		});
}
