Ext.define('app.view.system.SystemProductPanel', {
			extend:'Ext.grid.Panel',
			title:'产品设置参数信息',
			xtype:'system-product-panel',					  		
			id: 'system-product-panel',			
			 store: Ext.data.StoreManager.lookup('simpsonsStore'),
			    columns: [
			        { text: 'Name',  dataIndex: 'name' },
			        { text: 'Email', dataIndex: 'email' },
			        { text: 'Phone', dataIndex: 'phone', flex: 1 }
			    ],
			    height: 200,
			    width: '98%'			
			
		});