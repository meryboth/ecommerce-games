import { useState } from 'react';

const ContactForm = ({ toggleVisibility, setContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  const handleContactForm = (e) => {
    e.preventDefault();
    toggleVisibility.current.toggleVisibility();

    const objContact = {
      name,
      phone,
      address,
      comment,
    };
    setContact(objContact);
    setName('');
    setPhone('');
    setAddress('');
    setComment('');
  };

  return (
    <div className='flex items-center justify-center bg-slate-200'>
      <div className='min-h-1/2'>
        <div className='mx-4 sm:mx-24 md:mx-34 lg:mx-56 flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col'>
          <div>
            <h1 className='text-2xl font-bold'>Contact</h1>
          </div>
          <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>
              Name
              <input
                className='w-full p-2 bg-green-900 rounded-md  border border-green-700 focus:border-green-700'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>
            <label className='LabelContact'>
              Phone
              <input
                className='w-full p-2 bg-green-900 rounded-md  border border-green-700 focus:border-green-700'
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'>
              Address
              <input
                className='w-full p-2 bg-green-900 rounded-md  border border-green-700 focus:border-green-700'
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'>
              Comment
              <input
                className='w-full p-2 bg-green-900 rounded-md  border border-green-700 focus:border-green-700'
                type='text'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
            </label>
            <div className='flex items-center my-3'>
              <button
                className='w-1/3 p-2 bg-green-900 rounded-full font-bold hover:bg-green-700 text-white'
                type='submit'
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
