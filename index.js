/**
 * @file mofron-comp-{@comp-name}/index.js
 * @brief 
 * @author simpart
 */
const mf = require('mofron');
mf.comp.{@Comp-name} = class extends mf.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                object: component option
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('{@Comp-name}');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.{@Comp-name};
/* end of file */
