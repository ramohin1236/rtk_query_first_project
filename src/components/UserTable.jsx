import React from "react";
import PropTypes from "prop-types";

const UserTable = ({ user }) => {
  return (
    <div className="overflow-x-auto">
  <table className="min-w-full border border-gray-200 rounded-xl shadow-md overflow-hidden">
    <thead className="bg-gray-100 text-gray-700">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-semibold border-b">Id</th>
        <th className="px-6 py-3 text-left text-sm font-semibold border-b">Name</th>
        <th className="px-6 py-3 text-left text-sm font-semibold border-b">Email</th>
        <th className="px-6 py-3 text-left text-sm font-semibold border-b">Age</th>
        <th className="px-6 py-3 text-left text-sm font-semibold border-b">Role</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-6 py-4 text-sm text-gray-700">{user.id}</td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
        <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
        <td className="px-6 py-4 text-sm text-gray-700">{user.age}</td>
        <td className="px-6 py-4 text-sm">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            {user.role}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  );
};
UserTable.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserTable;

