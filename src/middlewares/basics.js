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

    //basics.url = this.request.url;
    //basics.originalUrl = this.request.originalUrl;
    //basics.origin = this.request.origin;
    //basics.href = this.request.href;
    //basics.path = this.request.path;
    //basics.search = this.request.search;
    //basics.host = this.request.host;
    //basics.hostname = this.request.hostname;
    //basics.querystring = this.request.querystring;
    //basics.fresh = this.request.fresh;

    console.info(basics);//TODO: remove it

    yield next;
};

module.exports = processor;