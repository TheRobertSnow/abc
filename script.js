 /*(function() {
  function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('concerts');
  const url = 'https://apis.is/concerts';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let concerts = data.results;
    return concerts.map(function(concert) {
      let div = createNode('div'),
          img = createNode('img'),
          span = createNode('span');
      img.src = concert.imageSource;
      span.innerHTML = `${concert.eventDateName}`;
      append(div, img);
      append(div, span);
      append(ul, div);
    })
  })
  .catch(function(error) {
    console.log(error);
  });

  function filterSearch() {
  	let query = this.value.trim().toLowerCase();
  	
  }
}());*/



//----------------------Start of displaying process------------------
(function () {

	function createNode(element) {
		return document.createElement(element);
	}

	function append(parent, el) {
		return parent.appendChild(el);
	}

	function att(name) {
		return document.createAttribute(name);
	}
	let events = [];
	const ul = document.getElementById('concerts');
	const url = 'https://apis.is/concerts';
	let search = document.getElementById('search');
	//-----------------------------------------------------------

	/*const getConcerts = () => {//get the concert data and output in console
		return fetch(url)
		.then(res => res.json())
		.then(data => concerts = data)
		.then(() => console.log(concerts))
	}*/

	fetch(url)
		.then(res => res.json())
		//.then(data => obj = data.results)
		//.then(() => console.log(obj))
		.then(function(data) {
			let concerts = data.results;
			console.log(concerts);
			return concerts.map(function(concert) {

				
				let div = createNode('div'),
				img = createNode('img'),
				span = createNode('span'),
				name = att("id"),
				sty = att("style");
				div.classList.add("container");
				name.value = `${concert.eventDateName}`;
				div.setAttributeNode(name);
				div.setAttributeNode(sty);
				img.src = concert.imageSource;
				span.innerHTML = `${concert.eventDateName}`;
				events.push({
					concerts
				})
				append(div, img);
				append(div, span);
				append(ul, div);
				
			})
			
		})

	




	//-----Filter for concert search------------------------------

	/*let q = function filter() {
		let query = this.value.trim().toLowerCase();
		return query;
		events.forEach(function(eve) {
			let index = 0;

			if (query) {
				index = eve.eventDateName.indexOf(query);
			}
			eve.element.style.display = index === -1 ? 'none' : '';
		});
		
	}*/





	//search.addEventListener("input", filter);
	//search.addEventListener("keyup", filter);

}());//----------------End of displaying process---------------------------





//------------------------------Úreltur kóði--------------------------------



	/*let displayConcerts = (query) => {//displays concerts in html file
		let filt = query;
		//console.log(filt);
		fetch(url)
		.then((resp) => resp.json())
		.then(function(data) {
			let concerts = data.results;
			return concerts.map(function(concert) {//	outputs images and text
				if (concert.eventDateName) {
					let div = createNode('div'),
					img = createNode('img'),
					span = createNode('span');
					img.src = concert.imageSource;
					span.innerHTML = `${concert.eventDateName}`;
					append(div, img);
					append(div, span);
					append(ul, div);
				}
			})
		})
		.catch(function(error) {
			console.log(error);
		});
	}*/










/*const container = document.createElement('div');
container.setAttribute('class', 'container');


obj = fetch('https://apis.is/concerts')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		return obj = data;
	})
	.then(() => idk()) 
	
		function idk() {
		let count = 0;
			for(key in obj.results) {
				count++;
			};
			console.log(count);
			for(let i = 0; i < count; i++) {

				const card = document.createElement('div');
  				card.setAttribute('class', 'card');

  				const h1 = document.createElement('h1');
  				h1.textContent = obj.results[i].eventDateName;

  				const p = document.createElement('p');
  				p.textContent = obj.results[i].dateOfShow;

  				container.appendChild(card);
  				card.appendChild(h1);
  				card.appendChild(p);
  			};
		};*/

/*console.log(obj);
for (let i = 0; i < obj.results; i++) {

	const card = document.createElement('div');
  	card.setAttribute('class', 'card');

  	const h1 = document.createElement('h1');
  	h1.textContent = obj.results[i].eventDateName;

  	const p = document.createElement('p');
  	p.textContent = obj.results[i].dateOfShow;

  	container.appendChild(card);
  	card.appendChild(h1);
  	card.appendChild(p);
};*/