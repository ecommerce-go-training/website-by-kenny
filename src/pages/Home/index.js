import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from 'global/redux/counter/slice';

function Home({ name, age }) {
  // router
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('isLogin');

  const handleLogout = () => {
    localStorage.setItem('isLogin', 'false');
    navigate('/');
  };

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
  console.log('Login check: ', isLogin);
  const lngs = [
    { value: 'en', label: 'English' },
    { value: 'vi', label: 'Vietnamese' },
  ];

  // React select
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const animatedOptions = makeAnimated();
  const colorOptions = [
    { value: 'Red', label: 'Red' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
    { value: 'Yellow', label: 'Yellow' },
  ];
  const handleChange = (options) => {
    setSelectedOptions(options);
  };
  console.log(selectedOptions[0]?.value);

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
        <Select options={lngs} onChange={(e) => i18n.changeLanguage(e.value)} />
        {/*<select onChange={(e) => i18n.changeLanguage(e.target.value)}>
          {Object.entries(resources)
            .map((item) => item[0])
            .map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>*/}
      </div>
      <div>
        <h1>Router check: </h1>
        <button onClick={() => navigate('/signin')}>Login</button>
        <button
          style={{ display: isLogin === 'true' ? '' : 'none' }}
          onClick={handleLogout}
        >
					Logout
        </button>
      </div>
      <div>
        <h1>React-select check:</h1>
        <Select options={options} />
        <Select
          components={animatedOptions}
          isMulti
          options={colorOptions}
          onChange={handleChange}
        />
      </div>
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
