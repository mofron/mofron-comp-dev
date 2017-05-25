/**
 * @file   mofron-comp-xxx/index.js
 * @author simpart
 */

/**
 * @class mofron.comp.xxx
 * @brief xxx component for mofron
 */
mofron.comp.xxx = class extends mofron.Component {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('xxx');
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize vdom
     * 
     * @param prm : (string) text contents
     */
    initDomConts (prm) {
        try {
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.xxx = {};
module.exports = mofron.comp.xxx;
