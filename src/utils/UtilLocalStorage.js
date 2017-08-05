export default function UtilLocalStorage() {
  const USER = "USER";

  this.loadUser = function(){
    return new Promise((resolve) => {
      let user = get(USER);
      resolve(user === undefined ? {} : user);
  });};

  this.saveUser = function(user){
    return set(USER,user);
  };

  function set(itemName, item){
    if (typeof item === "object") {
      localStorage.setItem(itemName, JSON.stringify(item));
    } else {
      localStorage.setItem(itemName, item);
    }
  }

   function get(itemName){
    let item = localStorage.getItem(itemName);
    let patt = new RegExp(/^\d+$/);

     if(item){
      if(typeof item === "object"){return item;}
      if(isObjectWithoutParse(item)){return JSON.parse(item);}
      if(patt.test(item)) {return parseFloat(item);}
      return item;
    }
  }

  function isObjectWithoutParse(item){
    return item.charAt(0) === '{' && item.charAt(item.length-1) === '}';
  }

  /*
   remove(itemName){
   localStorage.removeItem(itemName);
   }
   */
}
