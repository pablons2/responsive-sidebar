const nav = document.getElementById('sideBar'),
button = nav.querySelector('button'),
icon = button.querySelector('i'),
spans = nav.querySelectorAll('span'),
noSideBarList = nav.querySelectorAll('#bodySideBar .noSideBarList'),
SideBarDrop = nav.querySelectorAll('#bodySideBar .withSideBarList');

button.addEventListener('click', () => {
  if (icon.classList.contains('bi-list')) {
    nav.style.width = "var(--menu-collapse-width)";
    spans.forEach(removeDisplayNone => {
      removeDisplayNone.classList.remove('display-none');
    });
    icon.classList.remove('bi-list');
    icon.classList.add('bi-x');
  } else {
    icon.classList.add('bi-list');
    icon.classList.remove('bi-x');
    spans.forEach(addDisplayNone => {
      addDisplayNone.classList.add('display-none');
    });
    nav.style.width = "var(--menu-collapsed-width)";
  }
});

/*Ação do dropdown*/

SideBarDrop.forEach(dropMenu => {
  dropMenu.addEventListener('click', () => {
    const ul = dropMenu.querySelector('ul'),
          arrow = dropMenu.querySelector('span .bi-caret-right-fill');

        if (ul.classList.contains('display-none') && arrow.classList.contains('bi-caret-right-fill')) {
           
            noSideBarList.forEach(noSideBarListItem => {
              if (!(noSideBarListItem.classList.contains('display-none'))) {
                noSideBarListItem.classList.add('display-none');
              }
           
            });

            ul.classList.remove('display-none')
            ul.classList.add('d-flex')
            arrow.classList.remove('bi-caret-right-fill')
            arrow.classList.add('bi-caret-left-fill')
    }
       else{
            ul.classList.remove('d-flex')
            ul.classList.add('display-none')
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
