Ext.define('app.view.main.menu.MenuPanel', {
			extend:'Ext.panel.Panel',
			title : '系统菜单',
			width : 300,
			requires: [
		        'app.view.main.menu.MenuController',
		        'app.view.main.menu.MenuTreePanel',
		        'app.view.system.SystemManagerPanel'
		    ],
		    name: 'app',
			controller: 'menu',
			xtype : 'app-menu',
			id: 'app-menu',
			defaults : {
				// applied to each contained panel
				bodyStyle : 'padding:15px'
			},
			layout : {
				// layout-specific configs go here
				type : 'accordion',
				titleCollapse : false,
				animate : true
				//activeOnTop : true
			},
			items : [{
						title : '系统参数管理',
						items : [{
									xtype : 'treepanel',									
									
									store : Ext.create("Ext.data.TreeStore" , {
												root: {
											        expanded: true,
											        children: [
											            { text: "配置管理1", xtype:'system-manager-panel', leaf: true },
											            { text: "配置管理2", expanded: true, children: [
											                { text: "配置管理2-1", leaf: true },
											                { text: "配置管理2-2", leaf: true}
											            ] },
											            { text: "配置管理3", leaf: true }
											        ]
											    }										
											}),
									rootVisible : false

								}]
					}, {
						title : '用户管理',
						items : [{
									xtype : 'treepanel',									
									
									store : Ext.create("Ext.data.TreeStore" , {
												root: {
											        expanded: true,
											        children: [
											            { text: "用户管理1", leaf: true },
											            { text: "用户管理2", expanded: true, children: [
											                { text: "用户管理2-1", leaf: true },
											                { text: "用户管理2-2", leaf: true}
											            ] },
											            { text: "用户管理3", leaf: true }
											        ]
											    }										
											}),
									rootVisible : false

								}]
					}, {
						title : '文章管理',
						items : [{
									xtype : 'treepanel',
									store : Ext.create("Ext.data.TreeStore" , {
												root: {
											        expanded: true,
											        children: [
											            { text: "文章管理1", leaf: true },
											            { text: "文章管理2", expanded: true, children: [
											                { text: "文章管理2-1", leaf: true },
											                { text: "文章管理2-2", leaf: true}
											            ] },
											            { text: "文章管理3", leaf: true }
											        ]
											    }										
											}),
									rootVisible : false

								}]
					}]

		});