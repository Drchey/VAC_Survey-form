const TableData = ({ user }) => {
  return (
    <div
      className="row"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.isAdmin ? 'Admin' : 'User'}</div>
      <div>{user.name}</div>
    </div>
  )
}

export default TableData
