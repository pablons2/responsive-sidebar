     
      const toogleNavMenu = document.querySelector('.item-nav-btn-toogle');
      const changeIconToogle = document.querySelector('.icons-nav i');
      
      const linkNavList = document.querySelectorAll('.links-nav');

      const spanNavList = document.querySelectorAll('.span-nav');
      const itemNavMain = document.querySelector('.item-nav-main');
      const flexMenuItem = document.querySelectorAll('.flex-nav-item');
    

      const nav = document.querySelector('nav');
       //pega todos os icones...
      const iElements = nav.querySelectorAll('i');
      const aElements = nav.querySelectorAll('a');
     
      
     //abre o menu pelos ícones ou pelo toogle inicial
      iElements.forEach((elementos) => {
        elementos.addEventListener("click", function() {
          if (toogleNavMenu.classList.contains('active-toggle')) {
            changeIconToogle.classList.remove('bi-x');
            changeIconToogle.classList.add('bi-list');
            toogleNavMenu.classList.remove('active-toggle');
            nav.style.width = '4rem';
            //recebe o resultado do loop...
            linkNavList.forEach(function (linkNav) {
              linkNav.style.display = 'none';
            });
          } else {
            changeIconToogle.classList.remove('bi-list');
            changeIconToogle.classList.add('bi-x');
            toogleNavMenu.classList.add('active-toggle');
            nav.style.width = '14rem';
            // espera a transição de abertura para mostrar os links <
            function showLinksMenu() {
              linkNavList.forEach(function (linkNav) {
                linkNav.style.display = 'flex';
              });
            }
            setTimeout(showLinksMenu, 350);
          }
        });
      });


      /*MENU DROP DOWN DO NAV abre e fecha a lista! */
      const dropBtnNav = document.querySelectorAll('.drop-btn-nav');
      const dropdownNav = document.querySelectorAll('.dropdown-nav');
      dropBtnNav.forEach((dropBtn, index) => {
        const dropdown = dropdownNav[index];
        
        dropBtn.addEventListener('click', () => {
          if (dropdown.style.display === 'none') {
            dropdown.style.display = 'flex';
          } else {
            dropdown.style.display = 'none';
          }
        });
      });
