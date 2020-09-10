import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const User = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {userData.loading ? (
        <h2>Loading...</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          {userData &&
            userData.users &&
            userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
