# webpackChunkName
vue动态加载路由addRouter时如果想对webpackChunkName进行循环动态处理
# webpackChunkName的概念   
webpack在打包的时候如果import内部通过webpackChunkName的注释确定打包时的名字
# 不方便动态赋值的原因    
es6的懒加载是在运行时访问到import这行代码时加载dist文件夹中对应地址的文件；

变量只有在运行时可以用所以在编译时循环import不能用变量或者只能用字符串插值模板结合webpack的request；

webpack的原理是如果用了插值变量会把它变成/后.*   匹配静态路径之后所有文件，所以不可以整个地址用插值变量否则会匹配整个操作系统文件导致webpack异常

综上所述，动态处理只能做半个，处理方法不能提取成公共只能做把一部分写死  

【import即webpackchunkname参考地址】 https://www.cnblogs.com/QxQstar/archive/2019/01/28/10331205.html

【webpack插值原理参考地址】https://segmentfault.com/a/1190000015648036  

【vue动态addRouter原理】https://www.php.cn/js-tutorial-397246.html
