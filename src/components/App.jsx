import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleDelete = event => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== event.currentTarget.id
      ),
    });
  };

  handleAddContact = event => {
    const { name, number } = event.currentTarget.elements;
    

    if (this.state.contacts.map(contact => contact.name).some(collectionName => collectionName === name.value)) {
      return alert(`${name.value} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: name.value,
          number: number.value,
        },
      ],
    }));
  };

  renderContacts = () => {
    if (this.state.filter === '') {
      return this.state.contacts;
    }

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1 style={{textAlign: 'center'}}>Phonebook</h1>
          <ContactForm
            onAddContact={this.handleAddContact}
            onChange={this.handleChange}
          />

          <h2 style={{textAlign: 'center'}}>Contacts</h2>
          <Filter contacts={this.state} onChange={this.handleChange} />
          <ContactList
            contacts={this.renderContacts()}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
