console.log("Cargando acordeón");

const dataAccordion = [
  {
    title: "Nuevos lanzamientos",
    desc: "Ofrecemos lo último en videojuegos."
  },
  {
    title: "Juegos Retro",
    desc: "Contamos con una gran extensión de juegos retro."
  },
];

(function() {
  let ACCORDION = {
    init: function() {
      let _self = this;
      this.insertData(_self);
      this.eventHandler(_self);
    },

    insertData: function(_self) {
      dataAccordion.forEach(function(item) {
        document
          .querySelector(".main-accordion-container")
          .insertAdjacentHTML("beforeend", _self.tplAccordionItem(item));
      });
    },

    eventHandler: function(_self) {
      let arrayRefs = document.querySelectorAll(".accordion-title");
      arrayRefs.forEach(function(ref) {
        ref.addEventListener("click", function(event) {
          _self.showTab(event.target);
        });
      });
    },

    tplAccordionItem: function(item) {
      return `
        <div class='accordion-item'> 
          <div class='accordion-title'><p>${item.title}</p></div>
          <div class='accordion-desc'><p>${item.desc}</p></div>
        </div>
      `;
    },

    showTab: function(refItem) {
      let activeTab = document.querySelector(".tab-active");
      if (activeTab) {
        activeTab.classList.remove("tab-active");
      }

      console.log("Mostrando tab:", refItem);
      refItem.parentElement.classList.toggle("tab-active");
    },
  };
  ACCORDION.init();

  const hamburger = document.getElementById('hamburger-icon');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

})();