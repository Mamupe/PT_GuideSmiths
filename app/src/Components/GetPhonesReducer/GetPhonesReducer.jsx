import axios from 'axios';
import { useEffect, useReducer } from 'react';
import React from 'react';

const ACTIONS = {
  CALL_API: 'call-api',
  SUCCESS: 'success',
  ERROR: 'error',
};

const phoneDetailsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CALL_API: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        userDetails: action.data,
      };
    }
    case ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  }
};

const initialState = {
  phoneDetails: '',
  loading: false,
  error: null,
};

export const Phones1 = () => {
  const [state, dispatch] = useReducer(phoneDetailsReducer, initialState);
  const { phoneDetails, loading, error } = state;

  useEffect(() => {
    dispatch({ type: ACTIONS.CALL_API });
    const getPhones = async () => {
      let response = await axios.get('http://localhost:8080/phones');
      if (response.status == 200) {
        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        return;
      }
      dispatch({ type: ACTIONS.ERROR, error: response.error });
    };

    getPhones();
    console.log(phoneDetails);
  });

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {phoneDetails.map((phone) => (
            <div className="contPhones" key={phone.id}>
              <Popup
                trigger={
                  <button className="popBtn">
                    <img className="phoneImg" src={phone.imageFront} alt="Phone image" />
                  </button>
                }
                modal
                nested
              >
                <div className="pop">
                  <h2>{phone.name}</h2>
                  <img className="phoneImg" src={phone.imageFront} alt="Phone image" />
                  <p>{phone.description}</p>
                  <Link to={`/phone/${phone.id}`}>
                    <button className="moreInfo">+ Info</button>
                  </Link>
                </div>
              </Popup>

              <h3 className="name">{phone.name}</h3>
              <p className="preinfo">
                {phone.screen} {phone.processor} {phone.ram}GB RAM
              </p>
              <h3 className="price">{phone.price}$</h3>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Phones1;
