Ext.define('app.model.local.LocalUserModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'cardId'},   
        {name: 'name'},
        {name: 'age'},
        {name: 'phone'},
        {name: 'alive'}
    ],
    proxy:{  
        type:'sessionstorage',  
        id  : 'user-Searches'  
    },
    clearData:function(){
     	var  proxy = this.getProxy();
     	proxy.clear();
    },
    isEmpty:function(){
    	
    }

    
});