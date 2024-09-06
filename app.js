function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa se for uma string sem nada
    if (campoPesquisa == "") {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let título = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        título = dado.título.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase() 
      // se título includes campoPesquisa
      if (título.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.título}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
      // incluindo título, descrição e link     
    }

    if (!resultados) {
        resultados = "<p> Nada foi encontrado</p>"
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }