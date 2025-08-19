// src/components/steps/OtherStep.tsx
import React from 'react';

// Define the shape of the props
interface OtherProps {
  formData: {
    plantParts: { part: string; description: string }[];
    bestCombinedWith: string;
    geographicalLocations: string;
  };
  updateFormData: (data: Partial<OtherProps['formData']>) => void;
}

const OtherStep: React.FC<OtherProps> = ({ formData, updateFormData }) => {

  // --- Handlers for "Plant Parts" section ---
  const handlePlantPartChange = (index: number, field: 'part' | 'description', value: string) => {
    const newPlantParts = [...formData.plantParts];
    newPlantParts[index][field] = value;
    updateFormData({ plantParts: newPlantParts });
  };

  const addPlantPartItem = () => {
    updateFormData({ plantParts: [...formData.plantParts, { part: '', description: '' }] });
  };

  const removePlantPartItem = (index: number) => {
    const newPlantParts = formData.plantParts.filter((_, i) => i !== index);
    updateFormData({ plantParts: newPlantParts });
  };

  // --- Handlers for "Best Combined With" and "Geographical Locations" ---
  const handleOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div className="space-y-8 p-6">
      <h2 className="text-xl font-semibold text-gray-800">Plant Parts And Its Purpose</h2>

      {/* Input row for adding a new plant part */}
      <div className="flex items-end space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Plant Part <span className="text-red-500">*</span></label>
          <select
            name="part"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option>Select</option>
            {/* You can map over a list of plant parts here */}
            <option value="Leaf">Leaf</option>
            <option value="Bark">Bark</option>
            <option value="Root">Root</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Type here..."
          />
        </div>
        <button
          onClick={addPlantPartItem}
          className="p-2 bg-green-700 text-white rounded-md shadow-sm hover:bg-green-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Display table for existing plant parts */}
      {formData.plantParts.length > 0 && (
        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.plantParts.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.part}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => removePlantPartItem(index)} className="text-red-600 hover:text-red-900">
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <hr className="border-gray-200" />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Best Combined With <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="bestCombinedWith"
          value={formData.bestCombinedWith}
          onChange={handleOtherChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Type here..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Geographical Locations <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="geographicalLocations"
          value={formData.geographicalLocations}
          onChange={handleOtherChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Type here..."
        />
      </div>
    </div>
  );
};

export default OtherStep;