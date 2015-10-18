Ext.define('app.view.main.MainContent', {
	extend:'Ext.tab.Panel',
	xtype: 'mainContent',
	id: 'mainContent',
	//layout:'fit',
	bodyBorder:false ,
	items: [{
    	xtype:'button',
    	text:'存储数据',
    	handler: 'onClickButton'
    	
    }]
});