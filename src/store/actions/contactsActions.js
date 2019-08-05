import types from "../types";
import ContactService from "../../services/ContactService";



export const fetchData = (data) => {
    return {
      type: types.Get_CONTACTS,
      data
    }
  };

  export const fetchDataById = (data) => {
    return {
      type: types.GET_BY_ID_CONTACT,
      data
    }
  };


  
  export const getContacts = (filterBy='') => {
    return (dispatch) => {
      return  ContactService.getContacts(filterBy)
        .then(response => {
          dispatch(fetchData(response))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const deleteContact = (contactId) => {
    return (dispatch) => {
      return  ContactService.deleteContact(contactId)
        .then(response => {
          dispatch(fetchData(response))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const getContactById = (contactId) => {
    return (dispatch) => {
      return  ContactService.getContactById(contactId)
        .then(response => {
          dispatch(fetchDataById(response))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const editContact = (contact) => {
    return (dispatch) => {
      return  ContactService.saveContact(contact)
        .then(response => {
          getContacts();
        })
        .catch(error => {
          throw(error);
        });
    };
  };


