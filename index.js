function test(){
  let config={
    "560014":"cashflow/detail/index.vue",
    "300015":"transferTrustee/index.vue"
    //....省略其他路由
  }
  let obj={
    "beforePage":()=>import(/*webpackChunkName:"hsfundO45Equity/beforePage"*/"@hsfundIpsFrame/views/beforePage.vue")
  }
  for(let key in config){
    obj[key]=()=>import(/*webpackChunkName:"hsfundO45Equity/[request]"*/`@hsfundO45Equity/views/${config[key]}`)
  }
  return obj
}
export default test();
