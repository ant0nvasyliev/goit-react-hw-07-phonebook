import {
  StyledContactListText,
  StyledDeleteButton,
} from './ContactListItem.styled';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contactsSlice';
import { fetchDeleteContacts } from '../../redux/contactsOperations';

export const ContactListItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledContactListText>Name: {name}</StyledContactListText>
      <StyledContactListText>Number: {phone}</StyledContactListText>
      <StyledDeleteButton
        type="button"
        onClick={() => {
          dispatch(fetchDeleteContacts(id));
        }}
      >
        <MdOutlineDeleteForever />
      </StyledDeleteButton>
    </>
  );
};
