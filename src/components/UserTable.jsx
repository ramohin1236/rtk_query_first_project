import PropTypes from "prop-types";

const UserTable = ({ user }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <td className="px-6 py-4 text-sm text-gray-700">{user.id}</td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 w-40">
        {user.name}
      </td>
      <td className="px-6 py-4 text-sm text-gray-600 w-80">{user.email}</td>
      <td className="px-6 py-4 text-sm text-gray-700 w-20">{user.age}</td>
      <td className="px-6 py-4 text-sm w-40">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 w-40">
          {user.role}
        </span>
      </td>
      </div>

      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 ml-20 mr-6">
        Edit
      </button>
      <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-blue-700">
        Delete
      </button>
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
