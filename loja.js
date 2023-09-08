    // Faz uma requisição AJAX para a API que retorna o arquivo JSON
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'dados.json');
    xhr.onload = () => {
      if (xhr.status === 200) {
        // Converte a resposta JSON para um objeto JavaScript
        const data = JSON.parse(xhr.responseText);

        // Adiciona as imagens à página HTML
        const imagesContainer = document.querySelector('#images');
        data.images.forEach(image => {
          const img = document.createElement('img');
          img.src = image;
          imagesContainer.appendChild(img);
        });
      } else {
        console.error('Erro ao carregar os dados');
      }
    };
    xhr.send();