Ext.define('app.store.local.SessionStore', {
	 extend:'Ext.data.proxy.SessionStorage',
	 proxy: {
	        type: 'sessionstorage',
	        id  : 'myProxyKey'
	    }
});