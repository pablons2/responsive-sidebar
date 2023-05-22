     
      const toogleNavMenu = document.querySelector('.item-nav-btn-toogle');
      const changeIconToogle = document.querySelector('.icons-nav i');
  
      const linkNavList = document.querySelectorAll('.links-nav');

      const spanNavList = document.querySelectorAll('.span-nav');
      const itemNavMain = document.querySelector('.item-nav-main');
      const flexMenuItem = document.querySelectorAll('.flex-nav-item');
      const bodypd = document.getElementById('body-pd')
     
      const nav = document.querySelector('nav');
       //pega todos os icones...
      const iElements = nav.querySelectorAll('i');
      const aElements = nav.querySelectorAll('a');
     
      
     //abre o menu pelos ícones ou pelo toogle inicial
      iElements.forEach((elementos) => {
        
        elementos.addEventListener("click", function() {
          if ((elementos.classList.contains('bi-caret-down-fill'))) {

            return 
          }
          else{

            if (toogleNavMenu.classList.contains('active-toggle')) {
              changeIconToogle.classList.remove('bi-x');
              changeIconToogle.classList.add('bi-list');
              toogleNavMenu.classList.remove('active-toggle');
              nav.style.width = '4.2rem';
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
            bodypd.classList.toggle('section-pd')
          }

         
        });
      }
    );


      /*MENU DROP DOWN DO NAV abre e fecha a lista! */
      const dropBtnNav = document.querySelectorAll('.drop-btn-nav');
      const dropdownNav = document.querySelectorAll('.dropdown-nav');
      const trocarSetasdoMenu = nav.querySelectorAll('.bi-caret-down-fill')
      dropBtnNav.forEach((dropBtn, index) => {
        const dropdown = dropdownNav[index];
        
        dropBtn.addEventListener('click', () => {
          
          if (dropdown.style.display === 'none' ) {
            dropdown.style.display = 'flex';

          } else {
            dropdown.style.display = 'none';

          }
        });
      });


      /*ABRIR MENU COM BTN RESPONSIVO*/

      const responsiveBtn = document.querySelector('#header-mobile');
      
      responsiveBtn.addEventListener('click', ()=>{
        if(nav.style.display === 'none'){
          nav.style.display = 'block';
        }
        else{
          nav.style.display = 'none';
        }


      });


       /* trocar setas subir / descer */

     
      trocarSetasdoMenu.forEach(function(changeArrow){

        changeArrow.addEventListener('click', ()=>{

          if(changeArrow.classList.contains = 'bi-caret-down-fill' ||
          dropdownNav.style.display==='none'
          ){
            console.log( changeArrow)
            changeArrow.classList.toggle('bi-caret-down-fill')
            changeArrow.classList.toggle('bi-caret-up-fill')

          }
          else{
           
            changeArrow.classList.toggle('bi-caret-down-fill')
            changeArrow.classList.toggle('bi-caret-up-fill')
          }
        });
        })

      
        const body_ = document.querySelector('body');
        (function(){
          if(document.style.width > '768px'  || nav.style.display === 'none'){
            nav.style.display = 'block';
          }
        })();