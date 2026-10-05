import { useEffect, useRef } from 'react'
import type { ChatMessage, Sender } from '../types/message'

type ChatShellProps = {
  messages?: ChatMessage[]
  sender: Sender
  inputValue: string
  isSendDisabled: boolean
  onSenderChange: (sender: Sender) => void
  onInputChange: (value: string) => void
  onSend: () => void
}

export function ChatShell({
  messages = [],
  sender,
  inputValue,
  isSendDisabled,
  onSenderChange,
  onInputChange,
  onSend,
}: ChatShellProps) {
  const isUserMode = sender === 'user'
  const isRobotMode = sender === 'robot'
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    const textarea = textareaRef.current

    if (!textarea) {
      return
    }

    textarea.style.height = 'auto'
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`
  }, [inputValue])

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-6 text-slate-800">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md items-center justify-center">
        <div className="flex h-[calc(100vh-3rem)] w-full max-w-md flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <header className="border-b border-slate-200 bg-white px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-600">
              Offline Chat
            </p>
            <h1 className="mt-1 text-xl font-semibold text-slate-900">Assistant</h1>
          </header>

          <main className="flex flex-1 flex-col bg-stone-50">
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex min-h-full flex-col gap-3">
                {messages.map((message) => {
                  const isUser = message.sender === 'user'

                  return (
                    <div
                      key={message.id}
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-6 shadow-sm ${
                          isUser
                            ? 'bg-violet-600 text-white'
                            : 'border border-slate-200 bg-white text-slate-700'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="border-t border-slate-200 bg-[#f9f7f4] p-4">
              <div
                className={`rounded-2xl border bg-[#f8f7f5] p-3 shadow-inner transition-colors ${
                  isRobotMode ? 'border-violet-900' : 'border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-slate-700">Send as</span>

                  <div className="inline-flex rounded-full bg-stone-200 p-1">
                    <button
                      type="button"
                      onClick={() => onSenderChange('user')}
                      className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                        isUserMode ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'
                      }`}
                    >
                      User
                    </button>
                    <button
                      type="button"
                      onClick={() => onSenderChange('robot')}
                      className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                        isRobotMode ? 'bg-violet-900 text-white shadow-sm' : 'text-slate-600'
                      }`}
                    >
                      Robot
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex items-end gap-2">
                  <textarea
                    ref={textareaRef}
                    aria-label="Message input"
                    rows={1}
                    placeholder="Type a message"
                    value={inputValue}
                    onChange={(event) => onInputChange(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key.toLowerCase() === 'enter' && !event.shiftKey) {
                        event.preventDefault()

                        if (!isSendDisabled) {
                          onSend()
                        }
                      }
                    }}
                    className="min-h-11 flex-1 resize-none overflow-y-auto rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                  />

                  <button
                    type="button"
                    onClick={onSend}
                    disabled={isSendDisabled}
                    className="h-11 shrink-0 rounded-xl bg-slate-300 px-4 text-sm font-medium text-slate-500 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
