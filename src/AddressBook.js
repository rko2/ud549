function AddressBook() {
  var self = this;
  self.addresses = [];
  self.initialComplete = false;
  self.getInitialContacts = function(cb) {
    setTimeout(function() {
      self.initialComplete = true;
      if(cb) {
        return cb();
      }
    }, 3);
  }
  self.addContact = function(contact) {
    self.addresses.push(contact);
  }
  self.getContact = function(contactnumber) {
    return self.addresses[contactnumber];
  }
  self.deleteContact = function(contactnumber) {
    self.addresses.splice(contactnumber, 1);
  }
}
