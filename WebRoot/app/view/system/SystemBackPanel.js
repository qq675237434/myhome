Ext.define('app.view.system.SystemBackPanel', {
			extend:'Ext.grid.Panel',
			title:'订单信息',
			xtype:'system-back-panel',					  		
			id: 'system-back-panel',			
			 store: Ext.data.StoreManager.lookup('simpsonsStore'),
			    columns: [
			        { text: 'Name',  dataIndex: 'name' },
			        { text: 'Email', dataIndex: 'email' },
			        { text: 'Phone', dataIndex: 'phone', flex: 1 }
			    ],
			    height: 200,
			    width: '98%'
			
			
		});