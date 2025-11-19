// Refazendo o trabalho avaliativo B

const personagens =[
{nome: "Galadriel", classe:"Maga", nivel: 645,hp: 55,
historicoDeAcoes:[],
   lerMentes: function(){
       this.historicoDeAcoes.push("Galadriel leu a mente do inimigo")
       console.log("Galadriel leu a mente do inimigo")},
   atacar:function(){
     this.historicoDeAcoes.push("Galadriel atacou o inimigo")
    console.log("Galadriel atacou o inimigo")},
    defesa:function(){
        this.historicoDeAcoes.push("Galadriel defendeu-se")
        console.log("Galadriel defendeu-se")}},
{nome: "Legolas", classe:"Arqueiro", nivel: 232,hp:34,
historicoDeAcoes:[],
    visaoAgucada: function(){
        this.historicoDeAcoes.push("Legolas visualizou o campo de batalha")
        console.log("Legolas visualizou o campo de batalha")},
    atacar:function(){
        this.historicoDeAcoes.push("Legolas atacou usando suas flechas")
        console.log("Legolas atacou usando suas flechas")},
    defesa:function(){
        this.historicoDeAcoes.push()
        console.log("Legolas se defendeu do ataque")}},
{nome:"Sauron", classe: "Valar", nivel:434,hp:68,
historicoDeAcoes:[],
    metamorfose:function(){
        this.historicoDeAcoes.push("Sauron usou metamorfose para se transformar")
        console.log("Sauron usou metamorfose para se transformar")},
    atacou:function(){
        this.historicoDeAcoes.push("Sauron atacou o inimigo")
        console.log("Sauron atacou o inimigo")},
    defender:function(){
        this.historicoDeAcoes.push("Sauron se defendeu")
        console.log("Sauron se defendeu")}}]

let nomeDigitado = prompt ("Selecione um personagem")
let buscarPersonagem = function(nomeBuscado){
    nomeBuscado = personagens[0].find(function(personagem){
        return personagem.nome
    })
}