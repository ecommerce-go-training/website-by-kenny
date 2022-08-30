import axios from 'axios';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from 'global/redux/reducers/index';
import { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { resources } from 'assets/i18n/index';
import { useNavigate } from 'react-router-dom';

function Home({ name, age }) {
  // router
  const navigate = useNavigate();

  // redux
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // axios useage
  const [data, setData] = useState([]);
  const handleClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setData(res.data);
      console.log(res);
    });
  };

  async function getData() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => console.log(res))
      .catch((err) => alert(err.message));
  }

  useEffect(() => {
    getData();
  }, []);

  // i18next
  const { t, i18n } = useTranslation('translation');

  return (
    <div>
      <h1>HOME PAGE</h1>
      <div>
        <h1>Proptypes check: </h1>
        <p>Hello {name}</p>
        <p>
          {name} is {age}
        </p>
      </div>
      <div>
        {/*eslint-disable */}
				<h1>Env check:</h1>
				<p>{process.env.REACT_APP_MESSAGE}</p>
				{/*eslint-enable */}
      </div>
      <div>
        <h1>Redux toolkit check:</h1>
        <span>{count}</span>
        <div>
          <button onClick={() => dispatch(increment())}> Increment </button>
          <button onClick={() => dispatch(decrement())}> Decrement </button>
        </div>
      </div>
      <div>
        <h1>i18next check:</h1>
        <Trans i18nKey='Greet'></Trans>
        <p>{t('Description')}</p>
        <p>{t('Poet')}</p>
        <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
          {Object.entries(resources)
            .map((item) => item[0])
            .map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
      <button onClick={() => navigate('/signin')}>Login</button>
      <div>
        <h1>Axios check:</h1>
        <button onClick={handleClick}> Axios check </button>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}:{item.name}
          </li>
        ))}
      </div>
    </div>
  );
}

(Home.defaultProps = {
  name: 'Gun',
  age : 22,
}),
(Home.propTypes = {
  name: PropTypes.string.isRequired,
  age : PropTypes.number.isRequired,
});

export default Home;
