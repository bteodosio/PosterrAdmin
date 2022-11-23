import React from 'react'
import { ChatContainer } from './styles'
import { Helmet } from 'react-helmet'
export const LiveChat: React.FC = () => {
  return (
    <ChatContainer>
      <div
        className="arena-chat"
        data-publisher="arenabteodosio"
        data-chatroom="GtqwprG"
        data-position="overlay"
      ></div>
      <Helmet>
        <script
          async
          src="https://go.arena.im/public/js/arenachatlib.js?p=arenabteodosio&e=GtqwprG"
        ></script>
      </Helmet>
    </ChatContainer>
  )
}
