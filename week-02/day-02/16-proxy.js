`use strict`
const target = { name:`Katy`};
const handler = {
  get: function(targetObject, field) {
    let flag = 0;
    for (let item in targetObject) {
      if(item === `nextId`) {
        flag = 1;
      }
    }
    if(flag) {
      return ++targetObject[field];      
    } else{
      return targetObject[`nextId`] = 1;
    }
    return undefined;
  },

  set:function(targetObject,field,value) {
    if(field === `nextId`) {
      return targetObject[field] =  value;
    }
  }
}

const proxyObject = new Proxy(target, handler);
console.log(proxyObject.nextId);
console.log(proxyObject.nextId);
console.log(proxyObject.name);
console.log(target.name);

