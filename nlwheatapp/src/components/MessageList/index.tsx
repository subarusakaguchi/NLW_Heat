import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Message } from '../Message'

export function MessageList(){
  const message = {
    id: '1',
    text: 'Esse vai ser um evento incrível!',
    user: {
      name: 'SubaruSakaguchi',
      avatar_url: 'https://github.com/subarusakaguchi.png'
    }
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      >
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
    </ScrollView>
  );
}