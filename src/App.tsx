import { useState } from 'react'
import { ChatShell } from './components/ChatShell'
import type { ChatMessage, Sender } from './types/message'

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [sender, setSender] = useState<Sender>('user')
  const [inputValue, setInputValue] = useState('')

  const isSendDisabled = inputValue.trim().length === 0

  const handleSenderChange = (nextSender: Sender) => {
    setSender(nextSender)
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  const handleSend = () => {
    if (isSendDisabled) {
      return
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: crypto.randomUUID(),
        sender,
        text: inputValue.trim(),
      },
    ])
    setInputValue('')
  }

  return (
    <ChatShell
      messages={messages}
      sender={sender}
      inputValue={inputValue}
      isSendDisabled={isSendDisabled}
      onSenderChange={handleSenderChange}
      onInputChange={handleInputChange}
      onSend={handleSend}
    />
  )
}