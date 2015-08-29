/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'app',
        // 系统信息
        system: {
            name: '工程项目合同及资金管理系统',
            version: '5.2014.06.60',
            iconUrl: ''
        },

        // 用户单位信息和用户信息
        user: {
            company: '武当太极公司',
            department: '工程部',
            name: '张三丰'
        },

        // 服务单位和服务人员信息
        service: {
            company: '无锡熙旺公司',
            name: '蒋锋',
            phonenumber: '1320528----',
            qq: '78580822',
            email: 'jfok1972@qq.com',
            copyright: '熙旺公司'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});