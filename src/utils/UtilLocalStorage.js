export default function UtilLocalStorge() {

  function set(itemName, item){
    if (typeof item === "object") {
      localStorage.setItem(itemName, JSON.stringify(item));
    } else {
      localStorage.setItem(itemName, item);
    }
  }

  this.saveUser = function(user){
    set("USER",user);
  };

}
