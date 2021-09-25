export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }
    getRoot(){
        const $root = document.createElement('div')
/*      $root.textContent = 'TEST'
        $root.style.fontSize = '9rem'*/
        this.components.forEach( (Component) => {
            const component = new Component()
            $root.insertAdjacentHTML('beforeend', component.toHTML())
        })
        return $root
    }
    render(){
        console.log(this.$el)
        // afterbegin, afterend, beforeend, beforebegin
        //this.$el.insertAdjacentHTML('afterbegin', '<h1>Test</h1>')
/*        const node = document.createElement('h1')
        node.textContent = 'TEST'*/
        this.$el.append(this.getRoot())
    }
}