import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Mission from '../../components/Mission';

describe('Testing Mission component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Mission
          mission={{
            mission_id: 2,
            mission_name: 'Telstar',
            description:
              'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
            reserved: false,
          }}
        />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
