import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MissionList from '../../components/MissionList';

describe('Testing MissionList component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
