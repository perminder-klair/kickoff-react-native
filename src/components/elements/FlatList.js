import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

const List = ({ data, renderItem, loading, onRefresh }) => (
  <SafeAreaView>
    <FlatList
      data={data}
      renderItem={renderItem}
      initialNumToRender={20}
      maxToRenderPerBatch={20}
      onRefresh={onRefresh}
      refreshing={loading}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
);
export default List;
