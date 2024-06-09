  const btnAcancar = document.getElementById("btn-avancar");
  const btnVoltar = document.getElementById("btn-voltar")
  let cartaoAtual = 0;
  const cartoes = document.querySelectorAll(".cartao");

  btnAcancar.addEventListener("click", function(){
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1
    if(ehUltimoCartao) return;

       esconderCartaoSelecionado();
       
        cartaoAtual++;
        
       mostrarCartao();

 });


 btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
