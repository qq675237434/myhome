Ext.define('app.view.system.SystemManagerPanel', {
			extend:'Ext.panel.Panel',
			title:'系统管理',
			xtype:'system-manager-panel',					  		
			id: 'system-manager-panel',
			controller: 'system',
			requires: [
			           'app.view.system.SystemSearchPanel',
			           'app.view.system.SystemController',
			           'app.view.system.SystemOrderPanel',
			           'app.view.system.SystemBackPanel',
			           'app.view.system.SystemProductPanel'
			       ],
			defaults : {
				// applied to each contained panel
				bodyStyle : 'padding:15px'
			},
			items:[{
				xtype:'system-search-panel'			
			},{
				xtype:'system-order-panel'		
			},{
				xtype:'system-product-panel'
			},{
				xtype:'system-back-panel'
			}],
			 initComponent: function(){  	       
		         this.callParent();  
		         var me = this ;
		         var user = Ext.create('app.model.local.LocalUserModel');
		         var store = new Ext.data.Store({  
		                model:user  
		            }); 
		         	//debugger;
		        	var count =  store.load().getCount();  
		        	alert(count);
		        	
		            
		   } 
			
		});