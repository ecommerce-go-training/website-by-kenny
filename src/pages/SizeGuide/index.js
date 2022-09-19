import React, { useState } from 'react';

import Header from 'components/Header';

import { sizeGuide } from 'assets/images';

import './style.scss';

function Size() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Header store />
      <div className='size'>
        <div>
          <p className='title'>size guide</p>
          <p className='description'>
						If your measurements are not consistent with a single column, use
						your waist measurement to determine your ideal size.
          </p>
          <div className='nav'>
            <p
              className={page === 0 ? 'active' : ''}
              onClick={() => setPage(0)}
            >
							sizing conversation
            </p>
            <p
              className={page === 1 ? 'active' : ''}
              onClick={() => setPage(1)}
            >
							centimetres
            </p>
            <p
              className={page === 2 ? 'active' : ''}
              onClick={() => setPage(2)}
            >
							inches
            </p>
          </div>
          <div className='table'>
            {page === 0 && (
              <table>
                <tr>
                  <th>our size</th>
                  <th>uk</th>
                  <th>eu</th>
                  <th>us</th>
                </tr>
                <tr>
                  <td>XS</td>
                  <td>6</td>
                  <td>34</td>
                  <td>0-2</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>8</td>
                  <td>36</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>10</td>
                  <td>38</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>12</td>
                  <td>40</td>
                  <td>8</td>
                </tr>
              </table>
            )}

            {page === 1 && (
              <table>
                <tr>
                  <th></th>
                  <th>size xs</th>
                  <th>size s</th>
                  <th>size m</th>
                  <th>size l</th>
                </tr>
                <tr>
                  <td>bust</td>
                  <td>78</td>
                  <td>82</td>
                  <td>86</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>waist</td>
                  <td>60</td>
                  <td>64</td>
                  <td>68</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>hips</td>
                  <td>84</td>
                  <td>88</td>
                  <td>92</td>
                  <td>96</td>
                </tr>
              </table>
            )}

            {page === 2 && (
              <table>
                <tr>
                  <th></th>
                  <th>size xs</th>
                  <th>size s</th>
                  <th>size m</th>
                  <th>size l</th>
                </tr>
                <tr>
                  <td>bust</td>
                  <td>30.7</td>
                  <td>32.3</td>
                  <td>33.9</td>
                  <td>35.4</td>
                </tr>
                <tr>
                  <td>waist</td>
                  <td>23.6</td>
                  <td>25.2</td>
                  <td>26.8</td>
                  <td>28.3</td>
                </tr>
                <tr>
                  <td>hips</td>
                  <td>33.1</td>
                  <td>34.6</td>
                  <td>36.2</td>
                  <td>37.8</td>
                </tr>
              </table>
            )}
          </div>
          <div className='explanation'>
            <div>
              <h1>bust</h1>
              <p>
								Measure around the fullest part of your chest, keeping the tape
								level to the floor
              </p>
            </div>
            <div>
              <h1>waist</h1>
              <p>
								Measure around your natural waistline (the smallest part of your
								waist)
              </p>
            </div>
            <div>
              <h1>hips</h1>
              <p>
								Measure aroud the fullest part of your hips. Slim-hipped ladies
								can take this measurement from 20cm/8in below the waistline
              </p>
            </div>
          </div>
        </div>
        <img src={sizeGuide} alt='size guide' />
      </div>
    </div>
  );
}

export default Size;
