import PropTypes from 'prop-types';
import React from 'react';
import Entity from './Entity';
import { connect } from 'react-redux';

import Flex from '../../common/glamorous/Flex';
import { fetchFoo, fetchBar, fetchBaz, fetchTodo } from '../../../redux/actions/thunks';
import { ENTITY_KEY } from '../../../common/app-const';

const ReduxEntity = ({
  entities,
  fetchFoo,
  fetchBar,
  fetchBaz,
  fetchTodo,
}) => {
  const getLoadEntityThunk = (key) => {
    switch (key) {
      case ENTITY_KEY.FOO:
        return fetchFoo;
      case ENTITY_KEY.BAR:
        return fetchBar;
      case ENTITY_KEY.BAZ:
        return fetchBaz;
      case ENTITY_KEY.TODO:
        return fetchTodo;
    }
  };
  return (
    <Flex column className="notification is-light m-top--small">
      {
        Object.keys(ENTITY_KEY).map((key, index) => {
          const entityKey = ENTITY_KEY[key];
          return (
            <Entity
              key={index}
              name={entityKey}
              append={entityKey === ENTITY_KEY.BAR}
              runFetchEntityOnMount={true}
              entity={entities[entityKey]}
              fetchEntity={getLoadEntityThunk(entityKey)}/>
          );
        })
      }
    </Flex>
  );
};

ReduxEntity.propTypes = {
  entities: PropTypes.object.isRequired,
  fetchFoo: PropTypes.func.isRequired,
  fetchBar: PropTypes.func.isRequired,
  fetchBaz: PropTypes.func.isRequired,
  fetchTodo: PropTypes.func.isRequired
};

export default connect(
  (state) => ({
    entities: state.entities
  }),
  { fetchFoo, fetchBar, fetchBaz, fetchTodo }
)(ReduxEntity);
