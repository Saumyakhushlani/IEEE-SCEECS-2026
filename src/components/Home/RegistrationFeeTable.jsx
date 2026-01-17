function RegistrationFeeTable() {
  const registrationData = [
    {
      category: "IEEE Members",
      early: "₹ 2500",
      late: "₹ 3000",
      onDesk: "₹ 3500"
    },
    {
      category: "Non-IEEE Members",
      early: "₹ 3000",
      late: "₹ 3500",
      onDesk: "₹ 4000"
    }
  ];

  return (
    <div className=" bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-600 mb-4">
            Registration Fee Details
          </h2>
          <div className="flex justify-center">
            <svg
              className="w-32 h-2 text-pink-400"
              viewBox="0 0 128 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-4 text-left font-semibold text-base md:text-lg border-r border-blue-800">
                    Category
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-base md:text-lg border-r border-blue-800">
                    Early
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-base md:text-lg border-r border-blue-800">
                    Late
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-base md:text-lg">
                    On-Desk
                  </th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody>
                {registrationData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="px-6 py-4 text-gray-900 font-medium text-sm md:text-base border-r border-gray-200">
                      {row.category}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 text-sm md:text-base border-r border-gray-200">
                      {row.early}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 text-sm md:text-base border-r border-gray-200">
                      {row.late}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 text-sm md:text-base">
                      {row.onDesk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationFeeTable;
