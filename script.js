const container = document.querySelector('.section__result');
const section = document.querySelector('.section');
const searchButton = document.querySelector('.search__button');
const word = document.querySelector('.search__keyword');

function getGif(keyword) {
    container.textContent = '';
    document.querySelector('.section-error').textContent = '';

    renderLoading(true);
        return fetch(`http://api.giphy.com/v1/gifs/search?api_key=3iMjTFwmRAFuCLm6QuyMDXwrQsXhdkZH&q=${keyword}`)
        .then(function(res) {
            return res.json();  
        })
        .then((data) => {
            const arr = data.data;
            if(arr.length === 0) {
                document.querySelector('.section-error').textContent = 'Ничего не найдено';
                renderLoading(false);
            }
            else {
                arr.forEach(element => {
                    createItem(element.images.downsized_large.url, element.embed_url);
                  });
                  document.querySelector('.loader').setAttribute('style', 'display:none');
            }
            renderLoading(false);
          })
    }

function renderLoading(isLoading) {
    if(isLoading) {
        document.querySelector('.loader').setAttribute('style', 'display:block');
    }
    else {
        document.querySelector('.loader').setAttribute('style', 'display:none');
    }
    }

function createItem(url, link) {
const elementUrl = document.createElement('a');
const element = document.createElement('img');
element.classList.add('result__item');
element.setAttribute('src', url);
elementUrl.setAttribute('href', link);
elementUrl.setAttribute('target', '_blank')
container.appendChild(elementUrl);
elementUrl.appendChild(element);
}

searchButton.addEventListener('click', function() {
event.preventDefault();
getGif(word.value);
});