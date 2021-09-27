import {$} from '../../core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }
    getRoot(){
        const $root = $.create('div', 'excel')
/*        const $root = document.createElement('div')
        $root.classList.add('excel')*/
/*      $root.textContent = 'TEST'
        $root.style.fontSize = '9rem'*/
        this.components = this.components.map( (Component) => {
/*            const $el = document.createElement('div')
            $el.classList.add(Component.className)*/
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            // DEBUG
/*            if(component.name){
                window['c' + component.name] = component
            }*/
            $el.html(component.toHTML())
            $root.append($el)
            //$root.insertAdjacentHTML('beforeend', component.toHTML())
            return component
        })
        return $root
    }
    render(){
        //console.log(this.$el)
        // afterbegin, afterend, beforeend, beforebegin
        //this.$el.insertAdjacentHTML('afterbegin', '<h1>Test</h1>')
/*        const node = document.createElement('h1')
        node.textContent = 'TEST'*/
        this.$el.append(this.getRoot())
        this.components.forEach(component => component.init())
    }
}