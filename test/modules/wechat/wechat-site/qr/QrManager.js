var QrManagerFactory = function(){
    return {
        createQr: function(option){

            return {

            }
        }
    }
};
describe('qr', function(){
    var qrManager = null;
    before(function(){
        qrManager = QrManagerFactory();
        qrManager.settings.test1 = 'test'
    });
    it('create a tmp qr', function(){
        var qr = qrManager.createQr({temp: true, expires: 30,type: qrManager.getType('test')});
    });
    it('create a forever qr', function(){
        var qr = qrManager.createQr();
    });

});