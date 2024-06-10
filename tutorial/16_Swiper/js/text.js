const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus perspiciatis eaque? Sequi necessitatibus reprehenderit numquam doloremque repudiandae, dignissimos facere nesciunt esse repellendus molestiae quo deserunt dolores voluptas id eius?'
const textBox = document.querySelectorAll('section p')

textBox.forEach(item => {
    item.innerText = text
})
