import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Message } from '../message/message.model';
// init messageArr as an empty array
const initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[]; // a function return Message[]
  // messages: Message[];
}

/**
 * the messageService
 */
@Injectable()
export class MessagesService {
  // a stream that publishes new messages only once
  // singleton
  newMessages: Subject<Message> = new Subject<Message>();

  // `messages` is a stream that emits an array of the most up to date messages
  messages: Observable<Message[]>;

  // `updates` receives _operations_ to be applied to our `messages`
  // it's a way we can perform changes on *all* messages (that are currently
  // stored in `messages`)
  updates: Subject<any> = new Subject<any>();

  // action streams
  create: Subject<Message> = new Subject<Message>();

  markThreadAsRead: Subject<any> = new Subject<any>();

  // scan 操作符签名：
  // public scan(accumulator: function(acc: R, value: T, index: number): R,
  // seed: T | R): Observable<R>
  // scan 操作符作用：
  // 对 Observable 发出值，执行 accumulator 指定的运算，可以简单地认为是 Observable 版本的 Array.prototype.reduce 。


  constructor() {
    this.messages = this.updates
      // watch the updates and accumulate operations on the messages
      .scan((messages: Message[],
             operation: IMessagesOperation) => {
               debugger;
               return operation(messages);
             },
            initialMessages)
      // make sure we can share the most recent list of messages across anyone
      // who's interested in subscribing and cache the last known list of
      // messages
      .publishReplay(1)
      .refCount(); // refCount 必须搭配 multicast 一起使用，在调用 multicast 操作符后，接着调用 refCount() 。
    // `create` takes a Message and then puts an operation (the inner function)
    // on the `updates` stream to add the Message to the list of messages.
    //
    // That is, for each item that gets added to `create` (by using `next`)
    // this stream emits a concat operation function.
    //
    // Next we subscribe `this.updates` to listen to this stream, which means
    // that it will receive each operation that is created
    //
    // Note that it would be perfectly acceptable to simply modify the
    // "addMessage" function below to simply add the inner operation function to
    // the update stream directly and get rid of this extra action stream
    // entirely. The pros are that it is potentially clearer. The cons are that
    // the stream is no longer composable.
    this.create
      .map( function(message: Message): IMessagesOperation {
        return (messages: Message[]) => {
          debugger;
          return messages.concat(message);
        };
      })
      .subscribe(this.updates);

    this.newMessages
      .subscribe(this.create);

    // similarly, `markThreadAsRead` takes a Thread and then puts an operation
    // on the `updates` stream to mark the Messages as read
    this.markThreadAsRead
      .map( (thread: Thread) => {
        return (messages: Message[]) => {
          return messages.map( (message: Message) => {
            // note that we're manipulating `message` directly here. Mutability
            // can be confusing and there are lots of reasons why you might want
            // to, say, copy the Message object or some other 'immutable' here
            debugger;
            if (message.thread.id === thread.id) {
              message.isRead = true;
            }
            return message;
          });
        };
      })
      .subscribe(this.updates);

  }

  // an imperative function call to this action stream
  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages
      .filter((message: Message) => {
               // belongs to this thread
        return (message.thread.id === thread.id) &&
               // and isn't authored by this user
               (message.author.id !== user.id);
      });
  }
}

export const messagesServiceInjectables: Array<any> = [
  MessagesService
];
