import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import './ContactForm.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    dispatch(addContact(name.value, number.value));

    e.target.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone number"
        required
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
