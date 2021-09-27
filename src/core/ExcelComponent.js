import {DomListener} from './DomListener'

export class ExcelComponent extends DomListener {
constructor($root, options= {}) {
    super($root, options.listeners)
    this.name = options.name || ''
}
    //angebunden an alle classen mit extend

    toHTML(){
        return ''
    }
    init(){
        this.initDOMListener()
    }
    destroy(){
        this.removeDOMListener()
    }
}