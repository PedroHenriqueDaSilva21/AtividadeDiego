//Criando servidor + página inicial

//Importando Express na aplicação
const express = require("express"); //CommonJS Modules
const app = express(); //criando uma instância do Express

//definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

//Criando a rota principal
app.get("/", (req, res) => {
  //será renderizada a página index.ejs que está na pasta views
  res.render("index");
});


app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const midia = req.params.video;
  res.render("videos", { 
  playlist: playlist,
  video:midia
 });
});

//rota de produtos, passando as variaveis para a pagina
app.get("/produtos/:produto?", (req,res) => {
  const listaDeProdutos = ['Computador', 'Celular', 'Tablet', 'Notebook']
  const produto = req.params.produto
  res.render("produtos", {produto:produto, listaDeProdutos:listaDeProdutos});

  //na paágina haverá uma testagem de condições
})

//rota de perfil
app.get("/perfil/:nome?", (req, res) => {
  const listaDeNomes = ['Pedro','Felipe','Mauricio']
  const nome = req.params.nome
  res.render("perfil", {nome:nome, listaDeNomes:listaDeNomes});
})


//rota pedidos
app.get("/pedidos", (req,res) => {
  //array de objetos com os pedidos
  
  const pedidos = [
    {produto: "Celular", valor: 3000}, 
    {produto: "Computador", valor: 4000}, 
    {produto: "Tablet", valor: 2000}, 
    {produto: "Notebook", valor: 3800}]
  res.render("pedidos", {
    //enviando o array de objetos para a página
    pedidos: pedidos
  })
})

//Iniciando o servidor na porta 8080

const port = 3000
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor online em: http://localhost:${port}`);
  }
});
