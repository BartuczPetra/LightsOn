class Lampa {
  constructor(elem, id) {
    this.elem = elem;
    this.id = id;
    this.allapot = false;
    this.setSzin();

    this.elem.on("click", () => {
      this.atvalt();
      this.kattintasTrigger();
    });
  }

  setSzin() {
    if (this.allapot) {
      this.elem.css("background-color", "rgb(247, 164, 10)");
    } else {
      this.elem.css("background-color", "rgb(255, 241, 215)");
    }
  }

  atvalt() {
    this.allapot = !this.allapot;
    this.setSzin();
  }

  kattintasTrigger() {
    let esemeny = new CustomEvent("lampaKattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
