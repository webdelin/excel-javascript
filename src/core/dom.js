class Dom {
    constructor(selctor) {
        this.$el = typeof selctor === 'string'
        ? document.querySelector(selctor) : selctor
    }
    html(html){
        if(typeof html ==='string'){
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }
    clear(){
        this.html('')
        return this
    }
    on(eventType, callback){
        this.$el.addEventListener(eventType, callback)
    }
    off(eventType, callback){
        this.$el.removeEventListener(eventType, callback)
    }
    append(node){
        if(node instanceof Dom){
            node = node.$el
        }
        if(Element.prototype.append){
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }
}
export function $(selctor){
    return new Dom(selctor)
}
$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if(classes){
        el.classList.add(classes)
    }
    return $(el)
}