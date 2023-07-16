const container = document.querySelector('.container');
const items = document.querySelectorAll('.row');

items.forEach((item)=>{
    item.addEventListener('dragstart', (e)=>{

        setTimeout(()=>{
            e.target.classList.add('draging');

        }, 0)
    });

    item.addEventListener('dragend', (e)=>{

        e.target.classList.remove('draging');
    });
})

const initcontainer = (e)=>{
    e.preventDefault();
    const dragingElement = container.querySelector('.draging');

    const siblings = [...container.querySelectorAll('.row:not(.draging)')];

    const nextSibling = siblings.find((sibling=>{
        return e.clientY <=sibling.offsetTop + sibling.offsetHeight /2;
    }));

    container.insertBefore(dragingElement, nextSibling);

}
container.addEventListener('dragover', initcontainer);
container.addEventListener('dragenter', (e)=>{e.preventDefault()});