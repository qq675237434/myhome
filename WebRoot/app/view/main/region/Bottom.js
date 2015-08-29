Ext.define('app.view.main.Bottom', {

	extend: 'Ext.toolbar.Toolbar',
	
	alias: 'main-bottom',
	
	items: [{
        bind: {
            text: '使用单位:{user.name}'
        }
    }, {
        bind: {
            text: '用户:{user.name}'
        }
    }, '->', {
        bind: {
            text: '服务单位:{service.company}'
        }
    }, {
        bind: {
            text: '服务人员:{service.name}'
        }
    }, {
        bind: {
            text: 'tel:{service.phonenumber}'
        }
    }, {
        bind: {
            hidden: '{!service.email}', // 绑定值前面加！表示取反，如果有email则不隐藏，如果email未设置，则隐藏
            text: 'eMail:{service.email}'
        }
    }, {
        bind: {
            text: '©{service.copyright}'
        }
    }]
})