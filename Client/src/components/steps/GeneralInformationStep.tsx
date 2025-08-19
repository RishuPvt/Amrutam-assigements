import React, { useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface GeneralInformationStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

const GeneralInformationStep: React.FC<GeneralInformationStepProps> = ({ formData, setFormData }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev: any) => ({
        ...prev,
        image: file
      }));
    }
  };

  const removeImage = () => {
    setFormData((prev: any) => ({
      ...prev,
      image: null
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">General Information</h2>
      
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ingredient Name <span className="text-red-500">*</span>
          </label>
          <span className="block text-xs text-gray-500 mb-2">Label</span>
          <input
            type="text"
            name="ingredientName"
            value={formData.ingredientName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter ingredient name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Scientific Name <span className="text-red-500">*</span>
          </label>
          <span className="block text-xs text-gray-500 mb-2">Label</span>
          <input
            type="text"
            name="scientificName"
            value={formData.scientificName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter scientific name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sanskrit Name <span className="text-red-500">*</span>
          </label>
          <span className="block text-xs text-gray-500 mb-2">Label</span>
          <input
            type="text"
            name="sanskritName"
            value={formData.sanskritName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter sanskrit name"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ingredient Name <span className="text-red-500">*</span>
        </label>
        <span className="block text-xs text-gray-500 mb-2">
          description: Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been.
        </span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
          placeholder="Enter description"
        />
      </div>

      <div className="mb-6">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
        
        {!formData.image ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-48 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 bg-gray-50"
          >
            <Upload className="w-6 h-6 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">Upload Image</span>
          </div>
        ) : (
          <div className="relative w-48 h-32 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/4198374/pexels-photo-4198374.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
              alt="Uploaded ingredient"
              className="w-full h-full object-cover"
            />
            <button
              onClick={removeImage}
              className="absolute top-2 right-2 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralInformationStep;