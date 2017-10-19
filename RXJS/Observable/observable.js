class DataSource {
  constructor(){
    let i = 0 ;
    this._id = serInterval(()=>this.emit(i++),200);
  }

  emit(n){
    const limit  = 10 ;
     if(this.ondata){
       this.ondata(n);
     }
     if(n === limit ){
       if(this.oncomplete){
         this.oncomplete();
       }
       this.destroy();
     }
  }
  destroy(){
    clearInterval(this._id);
  }
}
// sdds

function myObservable(observer){
  // 创建数据源
  let dataSource =  new DataSource();
  // 处理数据流
  dataSource.ondata = (e) =>observer.next(e);
  // 处理异常
  dataSource.onerror = (err) =>observer.error(err);
  // 处理数据流终止
  dataSource.oncomplete =()=> observer.complete();
  //  返回一个函数用于 销毁数据源
  return ()=>{
    dataSource.destroy();
  }
}

const unsub = myObservable({
  next(x) { console.log(x); },
  error(err) { console.error(err); },
  complete() { console.log('done')}
});
