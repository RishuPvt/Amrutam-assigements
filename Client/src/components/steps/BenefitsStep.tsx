import React, { useState } from 'react';
import { X, Plus, Heart } from 'lucide-react';

interface BenefitsStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

const BenefitsStep: React.FC<BenefitsStepProps> = ({ formData, setFormData }) => {
  const [newBenefit, setNewBenefit] = useState('');
  const [newWhyToUse, setNewWhyToUse] = useState('');
  const [vataReason, setVataReason] = useState('');
  const [kaphaReason, setKaphaReason] = useState('');
  const [pittaReason, setPittaReason] = useState('');

  const whyToUseItems = [
    'Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem ipsum has been.',
    'Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem ipsum has been.',
    'Enter here'
  ];

  const benefits = [
    'Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem ipsum has been',
    'Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem ipsum has been',
    'Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem ipsum has been',
    'Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem ipsum has been'
  ];

  const removeWhyToUseItem = (index: number) => {
    // Handle removal
  };

  const addWhyToUseItem = () => {
    if (newWhyToUse.trim()) {
      // Handle adding new item
      setNewWhyToUse('');
    }
  };

  const removeBenefit = (index: number) => {
    // Handle removal
  };

  const addBenefit = () => {
    // Handle adding new benefit
  };

  return (
    <div className="p-6 space-y-8">
      {/* Why To Use Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Why To Use?</h3>
        <div className="space-y-3">
          {whyToUseItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600 flex-1 text-sm">{item}</span>
              <button
                onClick={() => removeWhyToUseItem(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addWhyToUseItem}
          className="mt-3 text-green-600 text-sm hover:text-green-700"
        >
          + Add Another Items
        </button>
      </div>

      {/* Prakriti Impact Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Prakriti Impact</h3>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vata <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Select</option>
              <option>Increase</option>
              <option>Decrease</option>
              <option>Balance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kapha <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Select</option>
              <option>Increase</option>
              <option>Decrease</option>
              <option>Balance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pitta <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Select</option>
              <option>Increase</option>
              <option>Decrease</option>
              <option>Balance</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Vata Reason</label>
            <input
              type="text"
              value={vataReason}
              onChange={(e) => setVataReason(e.target.value)}
              placeholder="Type here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kapha Reason</label>
            <input
              type="text"
              value={kaphaReason}
              onChange={(e) => setKaphaReason(e.target.value)}
              placeholder="Type here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pitta Reason</label>
            <input
              type="text"
              value={pittaReason}
              onChange={(e) => setPittaReason(e.target.value)}
              placeholder="Type here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Benefits</h3>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 flex-1">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium">Add Emoji</span>
                </div>
                <span className="text-gray-600 text-sm">{benefit}</span>
              </div>
              <button
                onClick={() => removeBenefit(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addBenefit}
          className="mt-3 text-green-600 text-sm hover:text-green-700"
        >
          + Add Another Items
        </button>
      </div>
    </div>
  );
};

export default BenefitsStep;