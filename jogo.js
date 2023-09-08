const bruno = '{"pessoa1": {"nome": "Adam Richard Sandler", "Profissao": "Ator", "Idade": "56 anos", "carreira": "Gente Grande, Arremessando Alto, Esposa de Mentirinha, Um Maluco no Golfe, Como Se Fosse a Primeira Vez, Juntos e Misturados, O Paizão, Pixels, Um Faz de Conta Que Acontece, Garota Veneno"}, "Pessoa2":{"nome": "Anne Jacqueline Hathaway", "Profissao": "Atriz", "Idade": "40 anos","carreira": "O diabo veste prada, Alice no país das maravilhas, O diário da princesa, Amor e outras drogas, Interestrelar, Convenção das bruxas, O preço da verdade"},"Pessoa3": {"nome": "Jennifer Shrader Lawrence", "Profissao": "Atriz", "Idade":"32 anos", "carreira":"X Men Fênix Negra, Mãe, O Lado Bom da Vida, Passagem, Trapaça, X Men Primeira Classe, Mob Girl, Serena, A Última Casa da Rua"}, "Pessoa4": {"nome": "Willard Carroll Smith Jr", "Profissao": "Ator", "Idade": "54 anos", "carreira": "À Procura da Felicidade, Esquadrão Suicida, Golpe Duplo, Sete Vidas, Beleza Oculta, Eu Sou a Lenda, Depois da Terra, MIB - Homens de Preto, Hancock, Aladdin" },"Pessoa5": {"nome": "Megan Denise Fox", "Profissao": "Atriz", "Idade": "36 anos","carreira":"Garota Infernal, Transformers - O Filme, As Tartarugas Ninjas, Bem-vindo aos 40, Big Gold Brick, O Anjo do Desejo, Um Louco Apaixonado, Até a Morte - Sobreviver É a Melhor Vingança"  },"Pessoa6":{"nome": "Dwayne Douglas Johnson (The Rock)", "Profissao": "Ator", "Idade": "50 anos", "carreira":"Hércules, Rápida Vingança, Treinando o Papai, Jungle Cruise, Alerta Vermelho, Adão Negro, Terremoto: A Falha de San Andreas, O Acordo, Central de Inteligência" }}';
 
const json = JSON.parse(bruno);
console.log(json);

function exibir(){
    document.getElementById("Nome").innerHTML = ("Nome: " + json.pessoa1.nome)
    document.getElementById("Profissao").innerHTML = ("Profissão: " + json.pessoa1.Profissao)
    document.getElementById("Idade").innerHTML = ("Idade: " + json.pessoa1.Idade)
    document.getElementById("carreira").innerHTML = ("Filmes: " + json.pessoa1.carreira)
}
function exibir2(){
    document.getElementById("Nome").innerHTML = ("Nome: " + json.Pessoa2.nome)
    document.getElementById("Profissao").innerHTML = ("Profissão: " + json.Pessoa2.Profissao)
    document.getElementById("Idade").innerHTML = ("Idade: " + json.Pessoa2.Idade)
    document.getElementById("carreira").innerHTML = ("Filmes: " + json.Pessoa2.carreira)
}
function exibir3(){
    document.getElementById("Nome").innerHTML = ("Nome: " + json.Pessoa3.nome)
    document.getElementById("Profissao").innerHTML = ("Profissão: " + json.Pessoa3.Profissao)
    document.getElementById("Idade").innerHTML = ("Idade: " + json.Pessoa3.Idade)
    document.getElementById("carreira").innerHTML = ("Filmes: " + json.Pessoa3.carreira)
}
function exibir4(){
    document.getElementById("Nome").innerHTML = ("Nome: " + json.Pessoa4.nome)
    document.getElementById("Profissao").innerHTML = ("Profissão: " + json.Pessoa4.Profissao)
    document.getElementById("Idade").innerHTML = ("Idade: " + json.Pessoa4.Idade)
    document.getElementById("carreira").innerHTML = ("Filmes: " + json.Pessoa4.carreira)
}
function exibir5(){
    document.getElementById("Nome").innerHTML = ("Nome: " + json.Pessoa5.nome)
    document.getElementById("Profissao").innerHTML = ("Profissão: " + json.Pessoa5.Profissao)
    document.getElementById("Idade").innerHTML = ("Idade: " + json.Pessoa5.Idade)
    document.getElementById("carreira").innerHTML = ("Filmes: " + json.Pessoa5.carreira)
}
function exibir6(){
    document.getElementById("Nome").innerHTML = ("Nome: " + json.Pessoa6.nome)
    document.getElementById("Profissao").innerHTML = ("Profissão: " + json.Pessoa6.Profissao)
    document.getElementById("Idade").innerHTML = ("Idade: " + json.Pessoa6.Idade)
    document.getElementById("carreira").innerHTML = ("Filmes: " + json.Pessoa6.carreira)
}


// var mais = 'images/carta.JPG';
// var menos = 'images/Capturar.JPG';
 
 
// function troca( el, obj )
// {
//     if( el.alt==mais )
//     {
//         el.src = menos;
//         el.alt = menos;
//         id( obj ).src = mais;
//         id( obj ).alt = mais;
//     }
//     else
//     {
//         el.src = mais;
//         el.alt = mais;
//         id( obj ).src = menos;
//         id( obj ).alt = menos;
//     }
// }
// function id( el ){
//     return document.getElementById( el );
// }
 
