/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'app.view.main.MainController',
        'app.view.main.MainModel',
        'app.view.main.menu.MenuPanel',
        'app.view.main.MainContent'
        /*'app.view.main.region.Top',
        'app.view.main.region.Bottom'*/
    ],
    
   /* uses: ['app.view.main.region.Top', 'app.view.main.region.Bottom'],*/

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
    	region: 'west',
    	xtype:'app-menu'
    	/*
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }],
        items:[{
        
        	xtype: 'myBtn' ,
        	text: '自定义按钮'
        }]
    */},{
        region: 'center',
        xtype: 'mainContent'
        
    }/*, {
    	region: 'north',
    	xtype: 'main-top'
    }, {
    	region: 'south', // 把他放在最底下
    	xtype: 'main-bottom'
    }*/]
});
