Ext.define('app.view.main.Bottom', {

	extend: 'Ext.toolbar.Toolbar',
	
	alias: 'main-bottom',
	
	items: [{
		bind: {
			text: '使用单位：{user.name}'
		}
	}, {
		bind: {
			text: '用户：{user.name}'
		}
	}, '->', {
		bind: {
			text: '使用单位： {user.conpany}'
		}
	}]
})