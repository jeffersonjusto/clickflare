
document.addEventListener("DOMContentLoaded", function() {
  const botao = document.querySelector('a[href="https://www.ofertaunico.site/descubraosegredo"]');
  if (!botao) return;

  const urlParams = new URLSearchParams(window.location.search);
  const cf_click_id = urlParams.get('cf_click_id');
  
  if (cf_click_id) {
    let novoHref = botao.href;
    if (novoHref.indexOf('?') === -1) {
      novoHref += `?cf_click_id=${cf_click_id}`;
    } else {
      novoHref += `&cf_click_id=${cf_click_id}`;
    }
    botao.href = novoHref;
  }
});
