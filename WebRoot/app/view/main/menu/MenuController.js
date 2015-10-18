Ext.define('app.view.main.menu.MenuController', {
    extend: 'Ext.app.ViewController',
	alias: 'controller.menu',
	refs: [
        {
            ref: 'mainContent',
            selector: 'mainContent'
        }
    ],
    init: function() {
    	this.control({
    		'app-menu':{
    				/*beforerender:function(panel,  eOpts){    					
				    	//alert('aaaaa');
    					//初始化treePanel
    					var systemPanelTree = Ext.create('appTreePanel');
    					
    					//初始化treePanel
				    }	*/
	    			
    		},
    		'treepanel':{
    		
    			itemclick:this.itemclick 
    		}
    	
    	})
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
    
    render:function(tree,  eOpts){
    
    	alert('aaaaa');
    },
    itemclick:function(treePanel, record){
    	if(record.childNodes.length < 1){ //叶子节点
    		var xtype = record.get('xtype');
    		var tab =  Ext.getCmp('mainContent');
    		var childTab = tab.child(xtype);
    		if(!childTab){
    			tab.add(Ext.widget(xtype));
    		}
    		tab.setActiveTab(childTab);
    	}
    }
});