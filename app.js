const item = document.querySelector('.item') // Обращается к объекту с классом Item
const placeholders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart', dragstart) // Добавляет событие к объекту с классом Item (в данном случае, когда захватываем объект, это начало, когда заканчиваем - конец)
item.addEventListener('dragend', dragend)



for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) // над plasceholder
    placeholder.addEventListener('dragenter', dragenter) // когда мы заходим на территорию
    placeholder.addEventListener('dragleave', dragleave) // когда мы вышли с территории
    placeholder.addEventListener('drop', dragdrop) // когда мы отпустили блок
}


function dragstart (event) {
    
    event.target.classList.add('hold') // добавляет класс в JS, не забудь добавить и описать этот класс в CSS 
    setTimeout(() => event.target.classList.add
    ('hide'), 0 ) // С помощью стрелочной функции теперь при перетаскивании блок пропадает только на изначальной позиции
    /* event.target.classList.add('hide') */ // Добавляем класс и описываем в CSS который при перетаскивании блока, скрывает его
}

function dragend (event) {
    
    /* event.target.classList.remove('hold', 'hide') */
    event.target.className = 'item' // тот же функционал, 
    
}

function dragover (event) {
    event.preventDefault()
   
}

function dragenter (event) {
    event.target.classList.add('hovered')
    console.log('drag enter')
}

function dragleave (event) {
    event.target.classList.remove('hovered')
    
}

function dragdrop (event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}