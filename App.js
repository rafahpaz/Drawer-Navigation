import * as React from 'react';
import { View,Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tela1Route = () => (
  <View style={[styles.scene, { backgroundColor: '#F8D494' }, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Tela 1</Text>
  </View>
);

const Tela2Route = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Tela 2</Text>
  </View>
);


const Tela3Route = () => (
  <View style={[styles.scene, { backgroundColor: '#F8D494' }, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Tela 3</Text>
  </View>
);

const renderTabBar = props => (
  <TabBar
    {...props}
    renderIcon={({ route, focused, color }) => (
      <Icon name="smartphone" size={24} color={color} />
    )}
    tabStyle={{ flexDirection: 'row' }}
    style={{ backgroundColor: '#8FCFF2' }}
  />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Tela1' },
      { key: 'second', title: 'Tela2' },
      { key: 'third', title: 'Tela3' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Tela1Route,
          second: Tela2Route,
          third: Tela3Route,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
        renderTabBar={renderTabBar}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
