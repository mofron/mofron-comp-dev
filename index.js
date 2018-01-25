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
    
    constructor (prm_opt) {
        try {
            super();
            this.name('{@Comp-name}');
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : (Date object) display date
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts () {
        try {
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
module.exports = mofron.comp.{@Comp-name};
