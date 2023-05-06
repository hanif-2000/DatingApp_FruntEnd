import {StyleSheet} from 'react-native';
import React, {useState, useCallback, useEffect, useRef} from 'react';
import {t} from 'i18next';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import Toast from 'react-native-toast-message';

import Container from '../common/Container';
import {GiftedChat} from 'react-native-gifted-chat';
import GlobalHeader from '../common/GlobalHeader';
import {COLORS, HP_WP} from '../common/theme';

const ChattingScreen = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const msgContainerRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const meTyping = text => {
    // socketRef.current?.emit('setTypingStatus', {
    //   room: getRoomId(profile.id, interlocutor?.id),
    //   typingStatus: text.length > 0 ? true : false,
    //   id: socketRef.current.id,
    // });
  };

  return (
    <Container Style={styles.mainContainer}>
      <GlobalHeader title={t('chat')} />
      {/* <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            /> */}
      <GiftedChat
        // user={{ _id: profile.id }}
        messages={messages}
        onSend={message => onSend(message)}
        isTyping={typing}
        onInputTextChanged={meTyping}
        // renderMessage={renderMessage}
        // renderBubble={(props) => renderBubble(props)}
        timeFormat={'MM/DD/YYYY  HH:MM'}
        renderTime={() => null}
        renderSend={() => null}
        // renderComposer={(props) => {
        //     return <RenderComposer {...props} />;
        // }}
        listViewProps={{
          scrollEventThrottle: 400,
          onScroll: ({nativeEvent}) => {
            // if (isCloseToTop(nativeEvent) && messages.length) getMoreMessages()
          },
          showsVerticalScrollIndicator: false,
          ref: msgContainerRef,
        }}
        // renderAvatar={renderAvatar}
        showUserAvatar
        alwaysShowSend
        // renderChatFooter={() =>
        //     item ? (
        //         <>
        //             <LinearGradient
        //                 colors={['#fff', '#DEDEDE']}
        //                 style={styles.gradient}
        //             />

        //         </>
        //     ) : null
        // }
      />
      <Spinner
        color={COLORS.purple}
        visible={loading}
        size="large"
        overlayColor="rgba(0,0,0,0.5)"
      />
    </Container>
  );
};

export default ChattingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: HP_WP.wp(5),
  },
});
