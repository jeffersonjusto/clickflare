
// Script de integração ClickFlare
(function() {
    var cf_click_id = new URLSearchParams(window.location.search).get('cf_click_id');
    if (cf_click_id) {
        fetch('https://webeasyhit.com/cf/cv?click_id=' + cf_click_id + '&payout=10')
            .then(response => response.json())
            .then(data => {
                console.log('Conversão enviada para ClickFlare:', data);
            })
            .catch(error => {
                console.error('Erro ao enviar conversão:', error);
            });
    } else {
        console.warn('Nenhum cf_click_id encontrado na URL.');
    }
})();
