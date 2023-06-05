const nav = document.getElementById('sideBar'),
button = nav.querySelector('button'),
icon = button.querySelector('i'),
spans = nav.querySelectorAll('span'),
noSideBarList = nav.querySelectorAll('#bodySideBar .noSideBarList'),
SideBarDrop = nav.querySelectorAll('#bodySideBar .withSideBarList'),
withSideBarList = nav.querySelectorAll('#bodySideBar .withSideBarList'),
checkUls = nav.querySelectorAll('ul'),
ul = nav.querySelectorAll('.withSideBarList ul');

var clickedOrNotBtn = false;
var menuAberto = true
button.addEventListener('click', () => {
  clickedOrNotBtn = true;
  if (icon.classList.contains('bi-x')) {
    nav.style.width = "var(--menu-collapsed-width)";
    spans.forEach(removeDisplayNone => {
      removeDisplayNone.classList.add('display-none');
    });
    icon.classList.remove('bi-x');
    icon.classList.add('bi-list');
    menuAberto = false
  } else {
    icon.classList.add('bi-x');
    icon.classList.remove('bi-list');
    spans.forEach(addDisplayNone => {
      addDisplayNone.classList.remove('display-none');
    });

      checkUls.forEach(esconderUls =>{
        if((esconderUls.classList.contains('display-none'))){
          esconderUls.classList.add('display-none')
        }
      })

      SideBarDrop.forEach(esconderUls =>{
        if(!(esconderUls.classList.contains('display-none'))){
          esconderUls.classList.remove('display-none')
        }
      })

    nav.style.width = "var(--menu-collapse-width)";
    menuAberto = true
  }

  console.log(menuAberto)
  
});


/* Ação do dropdown fechado */
 
function acaoDropFechado(){

    
  withSideBarList.forEach(buscarUls =>{
    const ul = buscarUls.querySelector('ul')
    buscarUls.addEventListener("click", ()=>{
      if(ul.classList.contains('display-none')){
        ul.classList.toggle('display-none')
      }
      else{
        ul.classList.remove('ulMobile')
        nav.style.width('var(--menu-collapse-width)')
      }
      
    })
  })

}



/*Ação do dropdown aberto*/
function acaoDropAberto(){

SideBarDrop.forEach(dropMenu => {
  dropMenu.addEventListener('click', () => {  
      const ul = dropMenu.querySelector('ul'),
      arrow = dropMenu.querySelector('span .bi-caret-right-fill');
      const clickedElements = [];
if (clickedElements.includes(dropMenu)) {
  clickedElements.splice(clickedElements.indexOf(dropMenu), 1);
} else {
  clickedElements.push(dropMenu);
}

const notClickedElements = Array.from(SideBarDrop).filter(item => !clickedElements.includes(item));

notClickedElements.forEach(elementNaoClicado => {
    elementNaoClicado.classList.add('display-none')
});
if (ul.classList.contains('display-none') && arrow.classList.contains('bi-caret-right-fill') ) {

  noSideBarList.forEach(noSideBarListItem => {
    if (!(noSideBarListItem.classList.contains('display-none'))) {
      noSideBarListItem.classList.add('display-none');
    }

  });

  ul.classList.remove('display-none')
  ul.classList.remove('ulMobile')
        ul.classList.add('d-flex')
        arrow.classList.remove('bi-caret-right-fill')
        arrow.classList.add('bi-caret-left-fill')
    
      
}
   else{
        ul.classList.remove('d-flex')
        ul.classList.add('display-none')
        ul.classList.add('ulMobile')

        SideBarDrop.forEach(displayBlock =>{
          if(displayBlock.classList.contains('display-none')){
            displayBlock.classList.remove('display-none')
          } } )


        const   arrow = dropMenu.querySelector('span .bi-caret-left-fill');
        if(arrow.classList.contains('bi-caret-left-fill')){;
        arrow.classList.remove('bi-caret-left-fill')
        arrow.classList.add('bi-caret-right-fill')
    }
        
        noSideBarList.forEach(noSideBarListItem => {
            if ((noSideBarListItem.classList.contains('display-none'))) {
                noSideBarListItem.classList.remove('display-none');
            }
        
        })
}
     
  });
});

}

if(nav.style.width == "var(--menu-collapse-width)"){
  acaoDropFechado()
}
else{
  acaoDropAberto()
}