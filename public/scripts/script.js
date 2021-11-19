onload = () => {
    let sidebarServerIcons = document.querySelectorAll('.listItemWrapper, .blobContainer-pmnxKB');
    sidebarServerIcons.forEach(sidebarServerIcon => {
        sidebarServerIcon.addEventListener('mouseenter', () => {
            let circleIcon = sidebarServerIcon.querySelector('.circleIconButton-1QV--U, .wrapper-1BJsBx');
            circleIcon.classList.add('selected');
            circleIcon.closest('foreignObject').setAttribute('mask', 'url(#8a838e1c-a6a9-4e92-b51f-dd5ff27e325f)')
            circleIcon.closest('.sidebar-sep').classList.add('new-msg');
            sidebarServerIcon.parentElement.querySelector('.pill-new-message > span').style.height = '20px';
        });

        sidebarServerIcon.addEventListener('mouseleave', () => {
            let circleIcon = sidebarServerIcon.querySelector('.circleIconButton-1QV--U, .wrapper-1BJsBx'),
                newMessageBar = sidebarServerIcon.parentElement.querySelector('.pill-new-message > span');
            circleIcon.classList.remove('selected');
            circleIcon.closest('foreignObject').setAttribute('mask', 'url(#bd13ca0a-8973-44e6-b8e0-e1765f9186c3)');
            newMessageBar.style.height = newMessageBar.getAttribute('data-default-heigh') || '8px';
            circleIcon.closest('.sidebar-sep').classList.remove('new-msg');
        });
    });
}