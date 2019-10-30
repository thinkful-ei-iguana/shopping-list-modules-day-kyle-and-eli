import item from './item.js';
const store = {
  items: [],
  hideCheckedItems: false,
  findById(id){
    let newId = store.items.find(function(item){
      return item.id === id;
    });
    return newId;
  },
  addItem(name){
    try{
      item.validateName(name);
      let createdItem = item.create(name);
      this.items.push(createdItem);
      render();
    }
    catch(error){
      console.log(`Cannot add item: ${error.message}`);
    }
  },
  findAndToggleChecked(id){
    let checkToggle = this.findById(id);
    if(checkToggle.checked === false){
      checkToggle.checked = true;
    }else{
      checkToggle.checked = false;
    }
  },
  findAndUpdateName(id, newName){
    try{
      this.validateName(newName);
      let updateName = this.findById(id);
      updateName.name = newName;
    }
    catch(error){
      console.log(`Cannot update name: ${error.message}`);
    }
  },
  findAndDelete(id){
    let deleteName =this.findById(id);
    this.items.splice(this.items.indexOf(deleteName), 1);

  }
};
export default store;