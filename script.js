$(function () {
  //szülőelem es a sablonelem meghatározása
  const szuloElem = $("article");
  const sablonElem = $(".lampa");
  //a sablonelem klónozása és szülőelemhez csatolása
  const lampaTomb = [];
  const meret = 9;
  let szam=0;

  for (let i = 0; i < meret; i++) {
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const lampa = new Lampa(ujElem, i);
    //a lámpa objektumokat beletesszük egy tömbbe
    lampaTomb.push(lampa);
  }

  sablonElem.remove();

  $(window).on("lampaKattintas", (event) => {
    if (event.detail.id % 3 !== 0) {
      lampaTomb[event.detail.id - 1].atvalt();
    }
    if (event.detail.id % 3 !== 2) {
      lampaTomb[event.detail.id + 1].atvalt();
    }
    if (event.detail.id >= 3) {
      lampaTomb[event.detail.id - 3].atvalt();
    }
    if (event.detail.id <= 5) {
      lampaTomb[event.detail.id + 3].atvalt();
    }
    szam=0;
    lampaTomb.forEach(elem => {
        if(elem.allapot===true){
            szam++;
        }
    });
    if(szam===9){
        $("section").html("<h1>Nyertél! :)</h1>");
    }

  });
});
