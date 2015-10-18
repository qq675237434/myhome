Ext.define('app.view.system.SystemSearchPanel', {
			extend:'Ext.form.Panel',			
			xtype:'system-search-panel',					  		
			id: 'system-search-panel',
			boder:'0 0 0 0',			
			 // Fields will be arranged vertically, stretched to full width
		    layout: 'anchor',
		    defaults: {
		        anchor: '100%'
		    },
		    width: '98%',
		    // The fields
		    defaultType: 'textfield',
		    items: [{
		        fieldLabel: '用户名',
		        name: 'name',
		        allowBlank: false
		    },{
		        fieldLabel: 'Last Name',
		        name: 'age',
		        allowBlank: false
		    }],

		    // Reset and Submit buttons
		    buttons: [{
		        text: 'Reset',
		        handler: function() {
		            this.up('form').getForm().reset();
		        }
		    }, {
		        text: 'Submit',
		        formBind: true, //only enabled once the form is valid
		        disabled: true,
		        handler: function() {
		            var form = this.up('form').getForm();
		            if (form.isValid()) {
		                form.submit({
		                    success: function(form, action) {
		                       Ext.Msg.alert('Success', action.result.msg);
		                    },
		                    failure: function(form, action) {
		                        Ext.Msg.alert('Failed', action.result.msg);
		                    }
		                });
		            }
		        }
		    }],
		    initComponent: function(){  	       
		         this.callParent();  
		         var me = this ;
		         var user = Ext.create('app.model.local.LocalUserModel');
		        	var store = new Ext.data.Store({  
		                model:user  
		            }); 
		        	
		        	store.load();  
		            var msg = [];  
		            store.each(function(rec){  
		                msg.push(rec.get('name'));  
		                me.loadRecord(rec);
		            });  
		             alert(msg.join("\n"));	
		   }  
			
			
		});