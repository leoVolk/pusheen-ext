const init = () => {
  const hostName = window.location.host.split('.');
  const hostClear = hostName[ hostName.length - 2 ];

  let imageToInsert = images[ hostClear ] ? images[ hostClear ] : images[ 'default' ];

  // const show = JSON.parse(localStorage.getItem('showPusheen'));
  //if (!show) return;

  document.documentElement.insertAdjacentHTML("beforeend",
    `<div id="pusheen">
      <img src="${imageToInsert}" width=126 />
      <div id="close">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
    </div>`
  );


  document.getElementById('close').addEventListener('click', () => {
    //localStorage.setItem('showPusheen', 'false');

    document.getElementById('pusheen').style = 'display: none;'
  });


  // dragElement(document.getElementById("pusheen"));
}

const images = {
  default: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG9id2NmNGI5YXQwcGJxbTZyZjVndDBnNWo4ZmFsOGppbjlvMm4xeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OKalQ6YS6trCOxzoeM/giphy.gif',
  google: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWZmdXhlaTAzbTM3a2E2ajFtZ2hua3FlODI3bGZ6YTR4dWxsbHJvdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cgzHlhotPqBPesNYyU/giphy.gif',
  netflix: 'https://media0.giphy.com/media/lVk3vhcbd9SzI5KxVw/giphy.webp?cid=ecf05e47ahc3ku31vqnmk5kibfzpq823eo2ujojghw1movpk&ep=v1_stickers_search&rid=giphy.webp&ct=s',
  wikipedia: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzIweXU2djYzZHo2NHc0cXVueHVoeTE4b3RiYWg0NDEwMTNwbHF2MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GZ1kHk53BUdDXsQWmP/giphy.gif',
  twitter: 'https://media4.giphy.com/media/gUAceHpXLafjtUXtXj/giphy.webp?cid=ecf05e47sg8c0lzcb95iidr9qcwn94pxavsi81zjyqwxsc8u&ep=v1_stickers_search&rid=giphy.webp&ct=s',
  x: 'https://media4.giphy.com/media/gUAceHpXLafjtUXtXj/giphy.webp?cid=ecf05e47sg8c0lzcb95iidr9qcwn94pxavsi81zjyqwxsc8u&ep=v1_stickers_search&rid=giphy.webp&ct=s',
  youtube: 'https://media0.giphy.com/media/SWEfsr2Z2rj7ZvE1Zo/giphy.webp?cid=ecf05e47glnhxr4q5e6xdgly2f2do67p9lg49vcv0av1yntu&ep=v1_stickers_search&rid=giphy.webp&ct=s',
  amazon: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHVhbnFoa2xtMWlibjl4eXpvZnEzbzN2dGtzbGMwcmh6cTdnaWl4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UbDWVoGWmGI4lG859Q/giphy.gif',
  github: 'https://media0.giphy.com/media/K9Xy6osm73DbxIa8f2/giphy.webp?cid=ecf05e47cszr6cywq2swq412epcuy6duincnt0da3unos4fc&ep=v1_stickers_search&rid=giphy.webp&ct=s',
  stackoverflow: 'https://media0.giphy.com/media/K9Xy6osm73DbxIa8f2/giphy.webp?cid=ecf05e47cszr6cywq2swq412epcuy6duincnt0da3unos4fc&ep=v1_stickers_search&rid=giphy.webp&ct=s',

}


init();