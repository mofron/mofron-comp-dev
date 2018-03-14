/**
 * @file   mofron-comp-{@comp-name}/index.js
 * @author simpart
 */
let mf = require('mofron');
/**
 * @class mofron.comp.{@Comp-name}
 * @brief {@comp-name} component for mofron
 */
mf.comp.{@Comp-name} = class extends mf.Component {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
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
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.{@Comp-name};
/* end of file */
