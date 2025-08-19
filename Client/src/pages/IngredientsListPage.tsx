// src/pages/IngredientsListPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Dummy data to simulate fetching from a database
const dummyIngredients = [
  { id: 1, name: 'Khurasani', description: 'A versatile herb that has enhanced fertility and aids in treating insomnia. It has a calming effect on the nervous system.', status: 'Active' },
  { id: 2, name: 'Red Sandalwood', description: 'Also known as Rakta Chandan, this herb is prized for its skin-enhancing properties. It helps in treating blemishes and acne.', status: 'Active' },
  { id: 3, name: 'Ashwagandha', description: 'A rasayana herb in Ayurveda, believed to enhance stamina, strength, and overall well-being. It is an adaptogen.', status: 'Active' },
  { id: 4, name: 'Giloy', description: 'A powerful immunomodulator that boosts overall immunity. It also aids in digestion and helps fight respiratory issues.', status: 'Inactive' },
];

const IngredientsListPage: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Ingredients</h1>
        <Link 
          to="/add-ingredient" 
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
        >
          + Add Ingredient
        </Link>
      </div>

      {/* Ingredients Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b-2">
            <tr>
              <th className="p-4">Ingredients</th>
              <th className="p-4">Description</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyIngredients.map((ingredient) => (
              <tr key={ingredient.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{ingredient.name}</td>
                <td className="p-4 text-gray-600">{ingredient.description}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 text-sm rounded-full ${ingredient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {ingredient.status}
                  </span>
                </td>
                <td className="p-4 text-gray-500 font-bold">...</td> {/* Placeholder for Edit/Delete icons */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IngredientsListPage;