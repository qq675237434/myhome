Ext.define('app.view.main.region.Top' , {

	extend:'Ext.toolbar.Toolbar',
	alias:'main-top',
	items:[
		{
		xtype:'lable',
		bind: {
			text:'{system.name}'
		},
		style:'fornt-size: 20px; color: blue'
	},{
		xtype: 'lable',
		bind: {
			text: '{system.version}'
		}
	}, '->', {
		text: '菜单',
		menu: [{
			text: '工程管理',
			menu: [{
				text: '工程项目'
			}, {
				text: '工程标段'
			}]
		}]
	}]
})