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
  const historyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const textarea = textareaRef.current

    if (!textarea) {
      return
    }

    textarea.style.height = 'auto'
    const contentHeight = textarea.scrollHeight
    const maxHeight = 118
    const styles = getComputedStyle(textarea)
    const borderHeight =
      Number.parseFloat(styles.borderTopWidth) + Number.parseFloat(styles.borderBottomWidth)
    const requiredHeight = contentHeight + borderHeight
    textarea.style.height = `${Math.min(requiredHeight, maxHeight)}px`
    textarea.style.overflowY = requiredHeight > maxHeight ? 'auto' : 'hidden'
  }, [inputValue])

  useEffect(() => {
    const history = historyRef.current

    if (history) {
      history.scrollTop = history.scrollHeight
    }
  }, [messages])

  return (
    <div className="h-dvh overflow-hidden bg-stone-100 px-4 py-6 text-slate-800">
      <div className="mx-auto flex h-full min-h-0 w-full max-w-md items-center justify-center sm:max-w-lg">
        <div className="flex h-full min-h-0 w-full max-w-md flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:max-w-lg">
          <header className="border-b border-slate-200 bg-white px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-600">
              Offline Chat
            </p>
            <h1 className="mt-1 text-xl font-semibold text-slate-900">Assistant</h1>
          </header>

          <main className="flex min-h-0 flex-1 flex-col bg-stone-50">
            <div
              ref={historyRef}
              className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden scrollbar-gutter-stable p-4"
            >
              <div className="flex min-h-full flex-col gap-3">
                {messages.map((message) => {
                  const isUser = message.sender === 'user'

                  return (
                    <div
                      key={message.id}
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-6 shadow-sm whitespace-pre-wrap wrap-break-word overflow-wrap-anywhere ${
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
                  isRobotMode ? 'border-violet-900 shadow-[inset_0_0_0_1px_rgba(76,29,149,0.18)]' : 'border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-slate-700">Send as</span>

                  <div className="inline-flex rounded-full bg-stone-200 p-1">
                    <button
                      type="button"
                      aria-pressed={isUserMode}
                      onClick={() => onSenderChange('user')}
                      className={`rounded-full px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${
                        isUserMode ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'
                      }`}
                    >
                      User
                    </button>
                    <button
                      type="button"
                      aria-pressed={isRobotMode}
                      onClick={() => onSenderChange('robot')}
                      className={`rounded-full px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${
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
                      if (event.key === 'Enter' && !event.shiftKey) {
                        event.preventDefault()

                        if (!isSendDisabled) {
                          onSend()
                        }
                      }
                    }}
                    className="min-h-11 max-h-29.5 flex-1 resize-none overflow-y-hidden rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm leading-5 text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  />

                  <button
                    type="button"
                    onClick={onSend}
                    disabled={isSendDisabled}
                    className="h-11 shrink-0 rounded-xl bg-violet-600 px-4 text-sm font-medium text-white transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:hover:bg-slate-300"
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
