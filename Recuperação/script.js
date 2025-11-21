let danoMasterSword = 70
let danoBomba = 50
let danoBumerangue = 30
protecaoEscudo = 40
precisaoArco = 50
pocaoDeCura = 60


const personagensZelda =
{
    nome: "Link", hp: 100, rupees: 300, armaEquipada: "MasterSword",
    historicoDeAcoes: [],
    inventario: ["Bumerangue", "Bomba", "Escudo Hylian", "Arco"],
    atacar: function (inimigoNome, multiplicadorDano) {
        if (inimigoNome = "Octorok") {
            danoAoInimigo = multiplicadorDano * danoMasterSword
            console.log(`Link atacou ${inimigoNome} causando 60 de dano`)
        }
        else if (inimigoNome = "Bokoblin") {
            danoAoInimigo = multiplicadorDano * danoMasterSword
            console.log(`Link atacou ${inimigoNome} causando 60 de dano`)
        }
        else console.log("Inimigo não encontrado")
        this.historicoDeAcoes.push(`Link atacou ${inimigoNome} causando 60 de dano`)
    },
    comprar: function (custo) {
        if (personagensZelda.rupees >= custo) {
            pagamentoDaCompra = personagensZelda.rupees - custo
            console.log(this.inventario.includes("Poção de Cura"))
            this.historicoDeAcoes.push("Link comprou uma poção de cura")
        }
        else if (personagensZelda.rupees <= custo) {
            pagamentoDaCompra = personagensZelda.rupees - custo
            console.log("Link não tem rupees suficientes!!")
        } else 
        console.log("Compra não encontrada")
    },
    curar: function (temPocao, vidaCheia) {
        temPocao = this.inventario.includes("Poção de Cura")
        vidaCheia = this.hp - 100
        if (temPocao && vidaCheia) {
            adicaoAOHp = this.hp + pocaoDeCura
            console.log(this.inventario.pop("Poção de Cura"))
            this.historicoDeAcoes.push("Link usou uma poção de cura")
        }
        else if (temPocao && !vidaCheia) {
            console.log("O Hp já está cheio")
        }
        else if (!temPocao && !vidaCheia) {
            console.log("Link não tem poção de cura! Cuidado o HP está baixo")
        }
        else console.log("A ação não foi executada")
    },
    verificarInventario: function () {
        for (let item of personagensZelda.inventario) {
            console.log("Item encontrado no inventario:", item)
            if (item = this.inventario[1]) {
                console.log("Cuidado! Bomba Encontrada!")
            }
            else console.log("Item não encontrado")
        }
    },
    verificarStatus: function () {
        console.log(personagensZelda.nome.hp.rupees.armaEquipada, personagensZelda.historicoDeAcoes.join, personagensZelda.inventario.join)
    },
    entrarCaverna: function (nivel, temArma) {
        temArma = this.armaEquipada
        if (nivel >= 5 && temArma) {
            console.log("Sucesso! Link entrou na caverna")
        }
        else if (!nivel >= 5 && temArma) {
            console.log("Falha! Link não pode entrar na caverna devido ao nível")
        }
    }
}
// Chamando a função para atacar.
personagensZelda.atacar("Octorok", 1);
personagensZelda.atacar("Bokoblin", 1.5);
personagensZelda.comprar(120);
// Chamando a função para uma dungeon nível 8 e 4.
personagensZelda.entrarCaverna(8, "MasterSword");
personagensZelda.entrarCaverna(4, "MasterSword");