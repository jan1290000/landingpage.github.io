function calcularprojeto() {
    var tipoproj = document.getElementById('tipoprojeto').value;
    var horaproj = document.getElementById('horaprojeto').value;

    var precohora;
    switch (tipoproj) {
        case 'Website':
            precohora = 50;
            break;
        case 'Landing Page':
            precohora = 40;
            break;
        case 'WebApp':
            precohora = 60;
            break;
        default:
            precohora = 35;
    }
    var precototal = precohora * horaproj;
    document.getElementById('preco').innerHTML = 'Preço do Preojeto R$'+ precototal;
}
