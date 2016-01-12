var webutil = require('../framework/web/webutil');

var processor = function* (next) {
    /**
     * Init basic state holder which will hold all pre-processed states
     */
    var basics = !this.basics && (this.basics = {});

    /**
     * Ensure browser object
     */
    if(!basics.browser){
        if(this.session && this.session.browser){
            basics.browser = this.session.browser
        }
        else{
            basics.browser = webutil.parseUserAgent(this.header['user-agent']);
            this.session && (this.session.browser = basics.browser);
        }
    }

    basics.originalUrl = this.request.originalUrl;
    basics.origin = this.request.origin;
    basics.href = this.request.href;

    console.info(basics);//TODO: remove it

    yield next;
};

module.exports = processor;