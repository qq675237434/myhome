/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'app',
        
        //系统信息
        system:{
        	name:'消费信托OM后台管理程序',
        	iconUrl:'',
        	version:'0.0.1'
        },
        //用户信息
        user: {
        	company: '深圳中顺易金融服务有限公司',
        	department: '分控部',
        	name: '小易'
        },
        
        //服务信息
        service: {
        	company: '深圳中顺易金融服务有限公司',
        	name: '小易',
        	phone: 'xxxxxxxxxxxxxx',
        	qq: 'xxxxxxxxxxxxxxxxxxx',
        	email: 'admin@admin.com',
        	copyright: 'xxxxxx'
        	
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});