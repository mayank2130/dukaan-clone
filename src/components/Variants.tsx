"use client";
import React, { useState } from "react";

function Variants() {
  const [options, setOptions] = useState<string[]>(["Sizes", "Colors"]);
  const [newOption, setNewOption] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions([...selectedOptions, event.target.value]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewOption(event.target.value);
  };

  const handleAddOption = (event: any) => {
    event.preventDefault(); // Prevent form submission
    if (newOption.trim() !== "" && !options.includes(newOption)) {
      setOptions([...options, newOption.trim()]);
      setNewOption("");
    }
  };
  const handleRemoveOption = (
    optionToRemove: any,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault(); // Prevent the default behavior of the button
    setSelectedOptions(
      selectedOptions.filter((option) => option !== optionToRemove)
    );
  };

  return (
    <div className="mb-20">
      <div className="pb-3">
        <select
          className="border border-gray-300 rounded-lg p-3"
          value=""
          onChange={handleOptionChange}
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option
              key={index}
              value={option}
              className="gap-4"
              disabled={selectedOptions.includes(option)}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="pb-5 flex flex-row gap-3">
        <div className="relative max-w-60 mt-3">
          <input
            type="text"
            value={newOption}
            onChange={handleInputChange}
            placeholder="Create a custom option"
            className="border-b-2 border-gray-400 focus:outline-none pb-2"
          />
        </div>
        <button
          className="bg-green-400 p-3 rounded-lg"
          onClick={handleAddOption}
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-8 pb-10">
        {selectedOptions.map((selectedOption, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="mb-3">{selectedOption}</h4>
            <div className="flex gap-2">
              {selectedOption === "Sizes" && (
                <>
                  <input type="checkbox" id="small" className="w-5" />
                  <label htmlFor="small" className="mr-4">
                    Small
                  </label>
                  <input type="checkbox" id="medium" className="w-5" />
                  <label htmlFor="medium" className="mr-4">
                    Medium
                  </label>
                  <input type="checkbox" id="large" className="w-5" />
                  <label htmlFor="large">Large</label>
                </>
              )}
              {selectedOption === "Colors" && (
                <>
                  <input type="checkbox" id="red" className="w-5" />
                  <label htmlFor="red" className="mr-4">
                    Red
                  </label>
                  <input type="checkbox" id="blue" className="w-5" />
                  <label htmlFor="blue" className="mr-4">
                    Blue
                  </label>
                  <input type="checkbox" id="green" className="w-5" />
                  <label htmlFor="green">Green</label>
                </>
              )}
              {selectedOption !== "Sizes" && "Colors" && (
                <>
                  <input
                    type="text"
                    // value={newOption}
                    // onChange={handleInputChange}
                    placeholder="Write the price, length other variants, etc."
                    className="border-b-2 w-80 border-gray-400 focus:outline-none pb-2"
                  />
                </>
              )}
              {/* Add more options here as needed */}
            </div>
            <button
              onClick={(event) => handleRemoveOption(selectedOption, event)}
              className="mt-3 px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Variants;
