
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabBar/buy/buy","pages/tabBar/disting/disting","pages/tabBar/wash/wash","pages/tabBar/my/my","pages/search/search","pages/detail/detail","pages/kinds/kinds","pages/map/map"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿得物","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","background":"#efeff4"},"tabBar":{"color":"#666666","selectedColor":"#333333","borderStyle":"white","backgroundColor":"#f8f9fb","list":[{"text":"购买","pagePath":"pages/tabBar/buy/buy","iconPath":"static/img/buy.png","selectedIconPath":"static/img/buy_active.png"},{"text":"鉴别查询","pagePath":"pages/map/map","iconPath":"static/img/vip.png","selectedIconPath":"static/img/vip_active.png"},{"text":"洗护","pagePath":"pages/tabBar/wash/wash","iconPath":"static/img/wash.png","selectedIconPath":"static/img/wash_active.png"},{"text":"我","pagePath":"pages/tabBar/my/my","iconPath":"static/img/my.png","selectedIconPath":"static/img/my_active.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"demo","compilerVersion":"3.3.0","entryPagePath":"pages/tabBar/buy/buy","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabBar/buy/buy","meta":{"isQuit":true,"isTabBar":true},"window":{"backgroundColor":"#f5f5f9","enablePullDownRefresh":true}},{"path":"/pages/tabBar/disting/disting","meta":{},"window":{}},{"path":"/pages/tabBar/wash/wash","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/tabBar/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"搜索","backgroundColor":"#FFFFFF"}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"商品详情"}},{"path":"/pages/kinds/kinds","meta":{},"window":{"navigationBarTitleText":"分类","backgroundColor":"#FFFFFF"}},{"path":"/pages/map/map","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"地图","backgroundColor":"#FFFFFF"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
