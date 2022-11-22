import React from 'react'
import { ChatContainer } from './styles'
export const LiveChat: React.FC = () => {
  return (
    <ChatContainer>
      <iframe
        src="https://go.arena.im/embed/chat/arenabteodosio/WcEqCnU"
        style={{
          border: 0,
          width: '400px',
          height: '100vh',
          borderRadius: '4px'
        }}
      ></iframe>
    </ChatContainer>
  )
}
