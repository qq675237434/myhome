Ext.create('Ext.data.Store', {
    storeId:'simpsonsStore',
    fields:['name', 'email', 'phone'],
    data:{'items':[
        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
        { 'name': 'Homer', "email":"homer@simpsons.com",  "phone":"555-222-1244"  },
        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});


Ext.define('app.view.system.SystemOrderPanel', {
			extend:'Ext.grid.Panel',
			title:'订单信息',
			xtype:'system-order-panel',					  		
			id: 'system-order-panel',			
			store: Ext.data.StoreManager.lookup('simpsonsStore'),
			    columns: [
			        { text: 'Name',  dataIndex: 'name' },
			        { text: 'Email', dataIndex: 'email' },
			        { text: 'Phone', dataIndex: 'phone', flex: 1 }
			    ],
			    height: 200,
			    width: '98%'
			
			
		});


