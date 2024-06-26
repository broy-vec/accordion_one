
function fun(id,item){
    let content = document.getElementById(id);
            let items = document.getElementsByClassName('acc-content');
            let accordionItems = document.getElementsByClassName('acc-items');
            for (let i = 0; i < items.length; i++) {
                if (items[i] !== content) {
                    items[i].style.display = 'none';
                }
            }

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
                for (var j = 0; j < accordionItems.length; j++) {
                    accordionItems[j].classList.remove('highlighted');
                }
                // Add the 'highlighted' class to the clicked accordion item
                item.classList.add('highlighted');
            }
}
