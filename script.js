// 1. O fluxo inicia com login e vai DIRETAMENTE para a Tela Principal (Mapa)
function login() {
    window.location.href = 'mapa.html'; 
}

function logout() {
    window.location.href = 'index.html';
}

// 2. Após preencher a Nova Proposta, o sistema avisa sobre o Painel e volta ao Mapa
function enviarProposta(event) {
    event.preventDefault();
    alert("Proposta enviada com sucesso!\n\nEla já está disponível no Mapa para receber apoios e foi registrada na aba 'Meu Painel'.");
    window.location.href = 'mapa.html'; 
}

function apoiar(id) {
    const contador = document.getElementById('contador-apoio-' + id);
    let valorAtual = parseInt(contador.innerText);
    contador.innerText = valorAtual + 1;
    alert("Apoio registrado! Ajudando a proposta a atingir o quórum.");
}

function votar(opcao) {
    alert("Seu voto '" + opcao + "' foi registrado com sucesso na Consulta Pública!");
}

// 3. Ação do Gestor ao converter a proposta
function converterParaConsulta() {
    alert("Gestor: Proposta aprovada por quórum convertida em Consulta Pública!\n\nO status da proposta no 'Meu Painel' do autor mudou automaticamente para 'Em Consulta'.");
}