/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        	
        	
        	var user = Ext.create('app.model.local.LocalUserModel',{
        		name:'小可爱',
        		age:11
        	});
        	var store = new Ext.data.Store({  
                model:user  
            }); 
        	debugger ;
        	user.clearData();
        	/*var oldModel = store.removeAll(true);
        	
        	var i = 0 ; 
        	 store.each(function(rec){
            	 store.removeAt(i);
            	 i++;
             });*/
        	store.add(user);
        	store.sync(); 
        	store.load();  
            var msg = [];  
            store.each(function(rec){  
                msg.push(rec.get('name'));  
            });  
             alert(msg.join("\n"));       	
        	
        }
    },
     init: function() {
        //alert('main.controller');
    }
});
