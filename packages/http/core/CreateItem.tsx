import React, { useState } from 'react';
import { useCreateItemMutation } from './exampleApiCall';

const CreateItem = () => {
  const [createItem, { isLoading, isSuccess, isError, error }] =
    useCreateItemMutation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createItem({ name, description, price }).unwrap();
      setName('');
      setDescription('');
      setPrice(0);
    } catch (err) {
      console.error('Failed to create item:', err);
    }
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <div>Item created successfully!</div>}
      {isError && <div>Error creating item: {error.toString()}</div>}
      <h1>Create Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>
        </div>
        <button type="submit" disabled={isLoading}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
