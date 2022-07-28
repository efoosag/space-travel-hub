import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import RocketList from '../../components/RocketList';

describe('Testing RocketList component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
